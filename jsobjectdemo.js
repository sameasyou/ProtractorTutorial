function car()
{
	this.firstInputBox= element(by.model("first"));
	this.secondInputBox= element(by.model("second"));
	this.goButton=  element(by.id("gobutton"));
	this.URL= "http://juliemr.github.io/protractor-demo/";
	this.result= element(by.css("h2[class='ng-binding']"));
	
	this.colour="red";
	this.engine="turbo";
	this.brand="Mercedes";
	this.search="by.css('input')";
	
	this.getModel=function()
	{
		
		console.log("this is 2020 model");
	};
};

	module.exports= new car();
// a.getModel();
// console.log(a.engine);
