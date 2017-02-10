//document.onclick = function() {
//	alert("Hello");
//}


//Image Change Code --- need to figure out picture orientation
var myImage = document.getElementById("jordonHQImage");

var imageArray = ["images/family14.jpg", "images/asherFun.jpg"];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage, 4000);
//End Image Change Code


//Attempt to perform Javascript .getElementById call
//var foodTitle = document.getElementById("foodTitle");  
//food.setAttribute("font-family", "Garamond");          //Not used for style

//var foodAppend = document.createElement("li");
//foodTitle.appendChild(foodAppend);
//var foodText = document.createTextNode("Hello");
//foodAppend.appendChild(foodText);
//end ATTEMPT

var styleTest = document.getElementById("foodTitle");
styleTest.style.color = "red";

var picChange = document.getElementById("Jordon")