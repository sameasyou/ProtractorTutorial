describe('Protractor Frames Handling Demo', function () {
    it('Frames Handling', function () {
        //protractor code to open website
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        browser.actions().mouseMove(
            element(by.buttonText("Mouse Hover"))).perform();
        browser.switchTo().frame("iframe-name");
        element(by.css("a[href*='sign_in']")).getText().then(function (text) {
            console.log(text);
        })
    })
})