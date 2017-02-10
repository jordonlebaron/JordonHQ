//document.onclick = function() {
//	alert("Hello");
//}


//Image Change Code --- I can't get this to work yet
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

var foodTitle = document.getElementById("foodTitle");
food.setAttribute("font-family", "Garamond");

var foodAppend = document.createElement("li");
foodTitle.appendChild(foodAppend);
var foodText = document.createTextNode("Hello");
foodAppend.appendChild(foodText);