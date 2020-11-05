describe(
		'Protractor Angular Commerce site',
		function() {
			function selectItems(product)

			{
				element.all(by.tagName("app-card")).each(function(item)
						{
									item.element(by.css("[class='card-title']")).getText().then(function(text)
											{
										if (text == product) {

												item.element(By.css("button[class*='btn-info']")).click();
														}
													})
								})
			}

			it('Navigate Angular Commerce Website ', function() {

				// browser.waitForAngularEnabled(false);
				browser.driver.manage().window().maximize();
				browser.get("https://rahulshettyacademy.com/angularpractice/");
				element(by.name("name")).sendKeys("MyLoginName");
				element(by.css("input[name='email']")).sendKeys(
						"MyName@gmail.com");
				element(by.id("exampleInputPassword1")).sendKeys(
						"mysecretPassword");
				// select checkbox
				// element(by.id("exampleCheck1")).click(); // select checkbox
				// with id
				element(by.css("input[type='checkbox']")).click();
				// select from male or female !!! - this is important, there are
				// 2 ways
				// - both good
				element(by.id('exampleFormControlSelect1')).click().then(
						function() {
							browser.actions().sendKeys(
									protractor.Key.ARROW_DOWN).perform()
						})
				// element(by.cssContainingText("id=['exampleFormControlSelect1']","Female")).click();
				// this return all the radio button objects and after that u can
				// select
				// the one you need
				// element.all(by.name("inlineRadioOptions")).get(0); //one way
				// of getting
				// the first one
				element.all(by.name("inlineRadioOptions")).first().click();
				// on this site u can also select any of them beacause they have
				// ID
				element(by.buttonText("Submit")).click().then(
						function()

						{

							element(by.css("div[class*='success']")).getText()
									.then(function(text)

									{

										console.log(text);

									})
							// This is code to validate that in the name section
							// you input a name
							// that is longer than 2 characters
							// You can do the same validation by not sending any
							// letter but
							// there will be a different alert
							/*
							 * element(by.name("name")).clear();
							 * element(by.name("name")).sendKeys("M").then(function() {
							 * 
							 * element(by.css("class='alert
							 * alert-danger'")).getText().then(function(text) { }) })
							 */

							// this is the same thing but a different approach.
							// You count how
							// many times the "class='alert alert-danger'"
							// appears
							// when running the code. The number should be 0,
							// then u completed
							// the form properly
							// element.all(by.css("class='alert
							// alert-danger'")).count(); // the number
							// should be 0
							// element(by.css("a[href*='angularpractice/shop']")).click();
							element(by.linkText("Shop")).click();
							// element(by.xpath("/html/body/app-root/app-shop/div/div/div[2]/app-card-list/app-card[1]/div/div[2]/button")).click();

							// take the 4 elements (cards with products) into
							// lists
							// traverse through each item in the list
							// for each item you will get the name of the
							// product by the text
							// if title = desired object, then u will select
							// that index and add
							// it to cart
							/*
							 * element.all(by.tagName("app-card")).each(function(item)
							 * //this is a loop that will run 4 times (4 items
							 * that can be added to cart) {
							 * //item.element(by.css("h4[class=''card-title]
							 * a")).getText().then(function(text)
							 * item.element(by.css("[class='card-title']")).getText().then(function(text) {
							 * console.log(text); if(text=="Nokia Edge") //||
							 * text=="iphone X" || text=="Samsung Note 8" ||
							 * text=="Blackberry" { // click on Add button
							 * item.element(By.css("button[class*='btn-info']")).click(); }
							 */
							/*
							 * else { console.log("Something went wrong") }
							 */
							selectItems("Samsung Note 8");
							selectItems("Nokia Edge");
browser.sleep(6000);

							element(by.css("a[class*='btn-primary']")).getText().then(function(text)
						//			element(by.partialLinkText("Checkout")).getText().then(function(text)
									// element(by.xpath("//*[@id='navbarResponsive']/ul/li/a")).getText().then(function(text)
									// *[@id='navbarResponsive']/ul/li/a

									{
										var res = text.split("(");
										expect(res[1].trim().charAt(0)).toBe('2')
//										expect( element( by.className('btn-primary') ).getText() ).toContain('1');
										var mda=res[1].trim().charAt(0);
								//			expect(res[1].trim().charAt(0)).toBe(y);
										console.log("Textul butonului este "+text);
										console.log("Textul splituita este "+res[1]);
										console.log("numarul de items adaugate in cos este "+mda);
									})

							//
						})
			})
		})
