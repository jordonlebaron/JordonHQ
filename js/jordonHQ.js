//document.onclick = function() {
//	alert("Hello");
//}

var myImage = document.getElementByID("jordonHQImage");

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