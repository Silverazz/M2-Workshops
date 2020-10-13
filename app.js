const express = require("express");
const app = express();
const InMemoryWorkshop = require("./annexe/inMemoryWorkshop");
const path = require("path");
const ejs = require("ejs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view/template"));
app.use(express.static(path.join(__dirname , "view/css")));


app.get("/", function (req, res) {
    InMemoryWorkshop.getWorkshopList()
    .then(workshops => {
        res.render("index", {
            workshops: workshops
        });
    });
});

app.get("/workshop", function (req, res) {
    console.log("get");
    res.render("workshop");
});

app.post("/workshop", function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
        .then(() => {
            res.redirect("/");
        });
    })
    .catch(e =>res.send(e.message));
});

app.get("/workshop/:name", function (req, res) {
    const workshopName = req.params.name;
    InMemoryWorkshop.getWorkshopByName(workshopName)
    .then(workshop => {
        res.render("workshop", {workshop : workshop});
    })
    .catch(e =>ejs.send(e.message));
});


app.post("/updateWorkshop", function(req, res) {
    const oldName = req.body.oldName;
    const newName = req.body.name;
    const newDescription = req.body.description;

    InMemoryWorkshop.updateWorkshop(oldName, newName, newDescription)
    .then(() => res.redirect("/"))
    .catch(e =>res.send(e.message));
});


app.listen(3000, function () {
  console.log("Workshop app listening on port 3000!");
});
