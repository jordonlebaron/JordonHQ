//document.onclick = function() {
//	alert("Hello");
//}

$(function(){

var $header = $('header');
	
	$header.hide()
	.addClass('center')
	.fadeIn(1000);

});


$(function (){

var $nav = $('nav')
	
	$nav.hide()
	.addClass('center')
	.slideDown(2000);

});


$(function() {
	var $li = $('li');

	$li.hide()
	.each(function(index) {
		$(this).delay(700 * index)
		.show(700);
	});

	$li.on('mouseover', function() {
		$(this).setAttribute('opacity', 0.5);

	});

});

//Image Change Code --- need to figure out picture orientation
//var myImage = document.getElementById("jordonHQImage");

//var imageArray = ["images/AngeFlower.jpg", "images/asherFun.jpg", "images/family14.jpg"];

//var imageIndex = 0;

//function changeImage() {
//	myImage.setAttribute("src", imageArray[imageIndex]);
//	imageIndex++;
//	if (imageIndex >= imageArray.length) {
//		imageIndex = 0;
//	}
//}

//setInterval(changeImage, 4000);
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
//var styleTest = document.getElementById("foodTitle");
//styleTest.style.color = "red";

//var picChange = document.getElementById("Jordon")



//Playing with the TIME methods of javascript
//Attempt to build time counter for length of Family establishment
/*var today = new Date();
var year, month, date, hour, minute, second;
var established = new Date(2009, 2, 6, 9, 0, 0);
var yearDiff = today.getFullYear() - established.getFullYear();
var monthDiff = today.getMonth() - established.getMonth();
var dateDiff = today.getDate() - established.getDate();
var hourDiff = today.getHours() - established.getHours();
var minuteDiff = today.getMinutes() - established.getMinutes();
var secondDiff = today.getSeconds() - established.getSeconds();

// THIS SECTION IS FOR ROUNDING --------------------------------------v
if (monthDiff <= 0) {
	monthDiff += 12;
	yearDiff -= 1;
}

if (dateDiff <= 0){
	if (dateDiff <= 0 && (month === 0 || month === 2 || month === 4 
		|| month === 6 || month === 7 || month === 9 || month === 11)){
		dateDiff += 31; //Months with 31 days
		} else if (dateDiff <= 0 && (month === 1 && (year%4 !== 0))) {
		dateDiff += 28; //February non-leap year
		} else if (dateDiff <= 0 && (month === 1 && (year%4 === 0))) {
		dateDiff += 29; //February leap year
		} else {
		dateDiff += 30; //Months with 30 (the rest)
		}
}

if (hourDiff < 0) {
	hourDiff += 24;
	}

if (minuteDiff < 0) {
	minuteDiff += 60;
	}

if (secondDiff < 0) {
	secondDiff += 60;
	}
// END ROUNDING SECTION ----------------------------------------------^

var el = document.getElementById('familyTitle');
el.innerHTML += '<p>Established for: </br>' + yearDiff + ' years, ' 
			+ monthDiff + ' months, ' + dateDiff + ' days, '
			+ hourDiff + ' hours, ' + minuteDiff + ' minutes, &amp '
			+ secondDiff + ' seconds!</p>';
// END Family Establish Counter
*/
// MORE EXPERIMENTS


