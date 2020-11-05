/*function add(a,b)
{
	return a+b;

}
c=add(2,3);
console.log(c);
console.log(add(7,3));
b=4;
var a=4;
var b=["hello","world","member","4","goodbye"];
console.log("size of the array is "+b.length);
for(var i=0;i<b.length;i++)
	{
	
	console.log(b[i]);
	
	}*/


var c= Array();
c[0]= "goodbye";
c[1]= "4";	
c[2]= "good";
/*for(var i=0;i<c.length;i++)
	{
	
	console.log(c[i]);
	
	}*/
for (var j=c.length-1;j>=0;j--)
	{
	console.log(c[j]);
	}

var name = "George";
console.log(name.charAt(3));
var completename=name.concat(" Ginguta");
console.log(completename);

console.log(completename.indexOf(" "));

console.log(completename.slice("3"))

console.log(completename.slice(1, 9))

console.log(completename.toUpperCase())

console.log(completename.trim("6"));

var name2= new String("George");

