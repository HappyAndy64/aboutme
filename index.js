/*var a = 1

alert(a)
alert("Checking If You Have Permission To Enter This Web")
alert("Done")
if (a==1) {
	alert("You Have Permissions :)")	
}
else {
	alert("You Don't Have Permissions :(")
}
var arrayA = [1, 2, 5, 6, 10]

alert(arrayA);
arrayA.push("NEW ELEMENT!")
alert(arrayA) 
var boo = false && true || !(true && true)
alert(boo)*/

/*function addSquares(x, y) {
	return(x*x + y*y)
}*/


//alert(addSquares(2,3))

/*function concat(str1, str2) {
	return(str1 + str2);

}
var newstring = concat("hello ", "world")

//alert(newstring)

function triProduct(a, b, c) {
	alert(a*b*c)
}
alert(triProduct(10, 11, 12))
function slide() {
	$("#div1").toggle();
}
function change() {
	$("#p1").html("REE")
	$("#p1").css("font-size", "100px")
}
function alertValue() {
	alert($("#name").val())
}*/
function validate() {             //You Need this
	var missing = []
	if($("#name").val() == "")
			missing.push("name")
		if($("#email").val() == "")
			missing.push("email")
	if($("#message").val() == "")
		missing.push("message")
	if(missing.length>0) {
		$("#errormessage").css("color", "red")
		$("#errormessage").html("You are missing:" + missing)
		} 
	else {
		$("#errormessage").css("color", "green")
		$("#errormessage").html("Thank you for submitting!")	}	
			}
