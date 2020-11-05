describe('Protractor Alert steps',function() {

    it('Open Non-Angular JS Website Alerts',function(){



        browser.waitForAngularEnabled(false);
        browser.get("https://www.rahulshettyacademy.com/AutomationPractice").then(function()
            {
                browser.sleep(10000)
            }
        );
        browser.switchTo().frame('iframe-name');
        element(by.css("a[href*='sign_in']")).getText().then(function(text)
        {

            console.log(text);

        })




    })

})







