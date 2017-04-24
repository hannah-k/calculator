
var inquiry = prompt("How hot is it in Celsius?");

var formula = function(temp){
	return (parseInt((inquiry) * 9) / 5) + 32;
};

alert(formula(inquiry));

var question = prompt("How hot is it in Fahrenheit?");

var conversion = function(cels){
	return(parseInt((question - 32) * 5) / 9);
};

alert(conversion(question));
