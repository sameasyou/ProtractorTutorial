describe('Chain Locators Demo',function() {
function Add(a,b)
{
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
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

        Add(2,3);
        Add(4,6);
        Add(6,8);
        Add(7,2);
        Add(5,1);
        Add(10,11);


        element.all(by.repeater("result in memory")).count().then(function (countofresults)
        {
            console.log(countofresults)

        })
        element.all(by.repeater("result in memory")).each(function (item)
        {
        item.element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        } )

        })


        // research this!!!
     /*   element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        } ) */

    })
})
