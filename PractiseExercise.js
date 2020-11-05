describe('Protractor Anguar Commerce site',function() {
	
	it('Navigate Angular commerce Website ',function(){
		
	
		
		
		browser.get("https://rahulshettyacademy.com/angularpractice/");
		element(by.name("name")).sendKeys("MyLoginName");
		element(by.name("input[name='email']")).sendKeys("MyName@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("mysecretPassword");
		// select checkbox
	//	element(by.id("exampleCheck1")).click(); // select checkbox with id
		element(by.css("input[type='checkbox']")).click();
		//select from male or female !!! - this is important
		element(by.cssContainingText("id=['exampleFormControlSelect1'] option","Female")).click();
		// this return all the radio button objects and after that u can select the one you need
	//	element.all(by.name("inlineRadioOptions")).get(0); //one way of getting the first one
		element.all(by.name("inlineRadioOptions")).first().click();
		// on this site u can also select any of them beacause they have ID
		element(by.buttonText("Submit")).click().then(function()
				
		{
			
			element(by.css("div[class*='success']")).getText().then(function(text)
					
			{
				
				console.log(text);
				
			})
			
		})
		
		
	})
		
	})
	
		





