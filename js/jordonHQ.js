//Playing with the TIME methods of javascript
//Attempt to build time counter for length of Family establishment
var today = new Date();
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

var el = document.getElementById('family-icon');
el.onmouseover = function() {
			el.innerHTML += '<br />' yearDiff + ' y, ' 
			+ monthDiff + ' m, ' + dateDiff + ' d, '
			+ hourDiff + ':' + minuteDiff + ':'
			+ secondDiff;
		};


// END Family Establish Counter


