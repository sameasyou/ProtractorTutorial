 var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
//    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['ElementBasics.js'],
    capabilities: {
       'browserName': 'chrome',
       'goog:chromeOptions': {
           w3c: false
          },
    },
    
    onPrepare: function()
    {
    	browser.driver.manage().window().maximize();
       jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                  savePath: 'target/screenshots'
    	
                }   )
        );
      },
      
      suites :
    	  {
    	  Smoke : ['ElementBasics.js'],
      Regression : ['DropDowns.js','ChainLocator.js']
    	  },
      
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      }
      };
/*

exports.config = {
	    seleniumAddress: 'http://localhost:4444/wd/hub',
	    specs: ['PractiseExercise.js'],
	    capabilities: {
	        'browserName': 'chrome',
	     //   'goog:chromeOptions': {
	       //     w3c: false
	        //},
	    },
	};


 Selenium::WebDriver::Remote::Capabilities.chrome({ "chromeOptions" => {'w3c' => false} }) but it didn't work.

 capabilities = { "chromeOptions" => {'w3c' => false} } and now it works. */