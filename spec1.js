describe('Protractor baby steps',function() {
	
	it('Open Angular JS Website',function(){
		
	// this is where the protractor code should be
		
		browser.get("https://angularjs.org");
		// browser.get will get the url on the default browser (chrome)
		// each it block will be called as a spec
		browser.get("http://juliemr.github.io/protractor-demo/").then(function()
				{
		console.log("I am third last stept to execute");
		//wait for 9 seconds
		browser.sleep(9000);
		// print in console output
		console.log("I am the last stept to execute");
		
				})
	})
	
	
	it('Second Test Case Close the Browser',function()
	
	{
		
		
		// this is where protractor code for the second test should be
		
	})
	
	
})
// describe has 2 parameters name (test suite name) and it block
// first parameter of describe is test suite name and the second is hte function that will have all the tests (it blocks)


// it block - 2 parameters the first is the test case name and second is 




