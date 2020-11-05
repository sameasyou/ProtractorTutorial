describe('Actions Demo',function() {
	
	it('javasagacoffee form',function(){
		// lesson 52
		
		browser.get("https://posse.com");
		
		element(by.css("//input[@id='search']")).sendKeys("a");
		// first action is to move and select the mouse into the edit box
		browser.actions().mouseMove(element(by.model(locationQuery))).sendKeys("London").perform();
		// now London is entered in the text box and a suggestion appears down, u need to to type arrow down key and select 
		browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform();
		// now u need to press ENTER so the selected field is chosen
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				
		{
			browser.sleep(5000);
			expect(element.all(by.css("div[ng-mouseover='onSearchResultOver']")),count()).toEqual(7);
			element.all(by.css("div[ng-mouseover='onSearchResultOver']")).get(0).click;
			element(by.css("a[ng-href*='London/River Island']")).click().then(function()
			{
				browser.sleep(3000)
						// the link will be opened on a new tab or a new window (child window)
		// u need to tell protractor to switch to the new window
				browser.getAllWindowHandles().then(function()
						{
					browser.switchTo().window(handles[1]);
						})//this will get all windows handles in put them in an array,
				//in the first place the parent window(index = 0) and so on
						browser.getTitle().then(function(title)
								{
							console.log("title is "+title);
								})

			})
			
		})
		

		
		
		
		
	})
	})
	
	
	
	