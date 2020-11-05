describe('Protractor Alert steps',function() {
	
	it('Open Non-Angular JS Website Alerts',function(){
		
	
		
		browser.waitForAngularEnabled(false);
		browser.get("https://www.rahulshettyacademy.com/AutomationPractice");
		
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().dismiss().then(function()
				{
			browser.sleep(5000);
				})
		
		
		
		
		
	})
		
	})
	
		





