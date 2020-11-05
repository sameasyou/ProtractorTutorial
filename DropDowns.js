describe('Chain Locators Demo',function() {
function Calc(a,b,c)
{
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    
        element.all(by.tagName("option")).each(function(item){
        	
        
		item.getAttribute("value").then(function(operatorValues)
				
				{
			if(operatorValues==c)
				{
				item.click();
				}
			
			
		})

        })
    
    element(by.id("gobutton")).click();

}
    it('Locators',function() {




        browser.get("http://juliemr.github.io/protractor-demo/");
        // repeater, chain locators and CSS for identical tags lesson
        // whenever you see ng-repeat as name u can use repeater locator

    /*    element(by.model("first")).sendKeys("5");

        //  element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
        element(by.model("second")).sendKeys("8");
        element(by.id("gobutton")).click();*/

        Calc(2,3,"MULTIPLICATION");
        Calc(4,6,"MODULO");
        Calc(24,8,"DIVISION");
        Calc(2,3,"DIVISION");
        Calc(7,2,"MULTIPLICATION");
        Calc(5,1,"MULTIPLICATION");
        Calc(10,11,"MULTIPLICATION");
        
  /*     element.all(by.repeater("result in memory")).each(function (item)
                {
                item.element(by.css("td:nth-child(3)")).getText().then(function(text)
                {
                    console.log(text);
                } )

                })*/


        // research this!!!
     /*   element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        } ) */

    })
})
