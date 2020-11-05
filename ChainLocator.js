describe('Chain Locators Demo',function() {

    it('Locators',function() {




        browser.get("http://juliemr.github.io/protractor-demo/");
        // repeater, chain locators and CSS for identical tags lesson
        // whenever you see ng-repeat as name u can use repeater locator
        
        element(by.model("first")).sendKeys("5");

        element(by.model("second")).sendKeys("8");
        
        element(by.id("gobutton")).click();
        
        // research this!!!
  /*      element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text)
        {
        	console.log(text);
        })*/

        // another way of doing the same thing as above
        // this is only if u know which of the operators you want to use and it is only one
        // if u want to look at what operators are available and select one of them, look how it's done in DropDowns.js
        
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        
        
    })
})
