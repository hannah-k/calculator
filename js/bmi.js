
var bmi = function(weight, height) {
	return weight / height;
};

var heightIn = prompt("How tall are you in inches?");

var weightLb = prompt("How much do you weigh in pounds?");

var heightConversion = function(num) {
	return Math.pow(parseInt(num) * 0.025, 2);
 };

 alert(heightConversion(heightIn))

 var weightConversion = function(num) {
	return parseInt(num) * 0.45;
 };
 alert(weightConversion(weightLb))

 alert(bmi(weightConversion(weightLb)),(heightConversion(heightIn)));
