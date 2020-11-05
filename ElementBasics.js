describe('Protractor element Demo',function() {

    var objLocators= require('./jsobjectdemo.js');
    var using = require('jasmine-data-provider');
    var d = require('./data.js');

   // beforeEach(function ()
   // {
  //      objLocators.getURL();

   // });

    using(d.datadrive, function (data, description) {


   // });


    it('Testing calculator functionality '+description,function () {



        browser.get(objLocators.URL);

        objLocators.firstInputBox.sendKeys(data.firstinput);
        objLocators.secondInputBox.sendKeys(data.secondinput);
        objLocators.goButton.click();/*.then(function () {
            browser.sleep(9000);
        })*/
        expect(objLocators.result.getText()).toBe(data.result);

        element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
afterEach(function ()
{
    console.log("test is finished");

});
    });
    });
 })
