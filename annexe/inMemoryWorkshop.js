inMemoryWorkshop = [];

function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop);
    });
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === name));
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        if (!description) {
            reject(new Error("Workshop description required"));
        }
        inMemoryWorkshop.push({
            name,
            description
        });
        resolve();
    });
}

function updateWorkshop(oldName, newName, newDescription) {
    return new Promise((resolve, reject) => {
        if (!oldName) {
            reject(new Error("Workshop oldName required"));
        }
        if (!newName) {
            reject(new Error("Workshop newName required"));
        }
        if (!newDescription) {
            reject(new Error("Workshop newDescription required"));
        }
        getWorkshopByName(oldName).then(workshop => {
            workshop.name = newName;
            workshop.description = newDescription;
            resolve();
        })
        .catch(error => {
            reject(error);
        });
    });
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        getWorkshopByName(name).then(workshop => {
            getWorkshopList().then(list => {
                const indexWorkshop = list.indexOf(workshop);
                 if (indexWorkshop > -1) {
                    list.splice(indexWorkshop, 1);
                    resolve();
                } else {
                    reject(new Error("Workshop is not in memory"));
                }
            });
        });
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};