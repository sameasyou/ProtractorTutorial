describe('Protractor Angular Commerce site',function() {
    
    it('Navigate Angular Commerce Website ',function(){

        var until = protractor.ExpectedConditions;
        
        browser.get("https://rahulshettyacademy.com/angularpractice/");
        
        // Fill in the form and submit it
        element( by.name('name') ).sendKeys('MyLoginName');
        element( by.name('email') ).sendKeys('myname@gmail.com');
        element( by.id('exampleInputPassword1') ).sendKeys('mysecretPassword');
        element( by.id('exampleCheck1') ).click();
        element( by.id('exampleFormControlSelect1') )
            .element( by.cssContainingText('option', 'Male') ).click();
        element( by.id('inlineRadio1') ).click();
        element( by.className('btn-success') ).click();

        // Wait until form is submitted and success message is displayed
        var successMessage = element( by.className('alert-success'));
        browser.wait( until.presenceOf(successMessage), 5000, 'Ooops! Form did not submit properly.');
        expect( successMessage.element( by.tagName('strong') ).getText() ).toEqual('Success!');
	
        // Redirect to shop page
        element(by.linkText("Shop")).click();

        // Wait for shop page to load
        var shopPage = element( by.tagName('app-shop') );
        browser.wait( until.presenceOf(shopPage), 5000, 'Shop page did not load.');

        // Add noika phone to cart
        element.all( by.tagName('app-card') )
            .filter( function(item) {
                return item.element( by.css("[class='card-title']") ).getText().then( function(text) {
                    return text == 'Nokia Edge';
                });
            })
            .first()
            .element( by.css('button[class*="btn-info"]') )
            .click();
browser.wait(5000);
        // Check if it was added correctly
        expect( element( by.className('btn-primary') ).getText() ).toContain('1');
	})
		
})