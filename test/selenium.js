const {Builder, By, until, Key} = require('selenium-webdriver');

const { expect, should } = require('chai');
const { describe, it } = require('mocha');

var assert = require('assert');

let driver = new Builder()
  .forBrowser('chrome')
  .build();

  async function saveWorkshop(name, description) {
  	await driver.get("http://localhost:3000/workshop");

  	await driver.findElement(By.id('name'))
  		.then(async element => {
  			await element.sendKeys(name)
  		});

  	await driver.findElement(By.id('description'))
  		.then(async element => {
  			await element.sendKeys(description)
  		});

  	await driver.findElement(By.css('body > form > button'))
  		.then(async element => {
  			await element.click();
  		});
  }

  describe("Create new workshop", () => {
    it("Quand on clique sur Create new workshop, on devrait se retrouver sur l'interface de création d'un atelier", async () => {
      await driver.get("http://localhost:3000");

        await driver.findElements(By.className('btn-success'))
        .then(async elements => {
          await elements[0].click();

          driver.getCurrentUrl().then( url => {
            expect(url.includes("/workshop")).true;
          });
        });
      });
    });

  describe("Remplir les champs et Sauvegarder - un seul atelier", () => {
		it("Ajouter un atelier à la liste et vérifier si on a bien 1 élément dans cette même liste", async () => {
			await saveWorkshop('new workshop', 'new description');
			await driver.get("http://localhost:3000/");
			const ateliers = await driver.findElements(By.css('li'));

			expect(ateliers.length).to.be.equal(1);
		});
	});

  describe("Remplir les champs et Sauvegarder - plusieurs ateliers", () => {
		it("Ajouter deux ateliers à la liste et vérifier si on a bien 3 éléments dans cette même liste", async () => {
			await saveWorkshop('new workshop 2', 'new description 2');
			await saveWorkshop('new workshop 3', 'new description 3');
			await driver.get("http://localhost:3000");
			const ateliers = await driver.findElements(By.css('li'));

			expect(ateliers.length).to.be.equal(3);
		});
	});

  describe("Sauvegarder un atelier sans remplir le champs description", () => {
		it("Remplir le champs name uniquement, s'attendre à ce que l'on reste uniquement sur la même page après un clic sur save, et qu'aucun atelier n'a été créé", async () => {
			await saveWorkshop('new workshop 4', '');

      driver.getCurrentUrl().then( url => {
        expect(url.includes("/workshop")).true;
      });

			await driver.get("http://localhost:3000");
			const ateliers = await driver.findElements(By.css('li'));

			expect(ateliers.length).to.be.equal(3);
		});
	});

  describe("Sauvegarder un atelier sans remplir le champs name", () => {
		it("Remplir le champs description uniquement, s'attendre à ce que l'on reste uniquement sur la même page après un clic sur save, et qu'aucun atelier n'a été créé", async () => {
			await saveWorkshop('', 'new description 4');

      driver.getCurrentUrl().then( url => {
        expect(url.includes("/workshop")).true;
      });

			await driver.get("http://localhost:3000");
			const ateliers = await driver.findElements(By.css('li'));

			expect(ateliers.length).to.be.equal(3);
		});
	});

  describe("Sauvegarder un atelier sans remplir les champs", () => {
		it("Ne remplir aucun champs, s'attendre à ce que l'on reste uniquement sur la même page après un clic sur save, et qu'aucun atelier n'a été créé", async () => {
			await saveWorkshop('', '');

      driver.getCurrentUrl().then( url => {
        expect(url.includes("/workshop")).true;
      });

			await driver.get("http://localhost:3000");
			const ateliers = await driver.findElements(By.css('li'));

			expect(ateliers.length).to.be.equal(3);
		});
	});

  describe("Annuler la création atelier", () => {
    it("appuyer sur Cancel, s'attendre à revenir sur la page d'accueil et qu'aucun atelier ne soit créé", async () => {

      await driver.get("http://localhost:3000/workshop");

      await driver.findElement(By.css('body > form > a'))
      .then(async element => {
  			await element.click();
  		});

      driver.getCurrentUrl().then( url => {
        expect(url.includes("/")).true;
      });

      const ateliers = await driver.findElements(By.css('li'));

      expect(ateliers.length).to.be.equal(3);
    });
  });
