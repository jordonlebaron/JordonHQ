//document.onclick = function() {
//	alert("Hello");
//}


//Image Change Code --- need to figure out picture orientation
var myImage = document.getElementById("jordonHQImage");

var imageArray = ["images/AngeFlower.jpg", "images/asherFun.jpg", "images/family14.jpg"];

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


//Testing HTML editing
var styleTest = document.getElementById("foodTitle");
styleTest.style.color = "red";

var picChange = document.getElementById("Jordon")



//Playing with the TIME methods of javascript
//Attempt to build time counter for length of Family establishment
var today = new Date();
var year, month, date, hour, minute, second;
var established = new Date(2009, 2, 6, 10, 0, 0);
var yearDiff = today.getFullYear() - established.getFullYear();
var monthDiff = today.getMonth() - established.getMonth();
var dateDiff = today.getDate() - established.getDate();
var hourDiff = today.getHours() - established.getHours();
var minuteDiff = today.getMinutes() - established.getMinutes();
var secondDiff = today.getSeconds() - established.getSeconds();

var el = document.getElementById('jordonHQTitle');
el.innerHTML = '<p>Established for: ' + yearDiff + ' years, ' 
			+ monthDiff + ' months, ' + dateDiff + ' days, '
			+ hourDiff + ' hours, ' + minuteDiff + ' minutes, &amp '
			+ secondDiff + ' seconds!';
//This works, now we need to work on rounding the variables correctly.