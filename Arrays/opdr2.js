var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];
var optellen = document.getElementById("optellen");
var aftrekken = document.getElementById("aftrekken");
var vermenigvuldig = document.getElementById("vermenigvuldig");
var delen = document.getElementById("delen");


function plus(num1, num2){
	for (i = 0; i <= 9; i++){
		var add = num1[i] + num2[i]
optellen.innerHTML += num1[i] + "+" + num2[i] + "=" + add + "<br>"
	}
}

plus(arrayEen, arrayTwee)

function min(num1, num2){
	for (i = 0; i <= 9; i++){
		var subtract = num1[i] - num2[i]
aftrekken.innerHTML += num1[i] + "-" + num2[i] + "=" + subtract + "<br>"
	}
}

min(arrayEen, arrayTwee)

function keer(num1, num2){
	for (i = 0; i <= 9; i++){
		var multiply = num1[i] * num2[i]
vermenigvuldig.innerHTML += num1[i] + "*" + num2[i] + "=" + multiply + "<br>"
	}
}

keer(arrayEen, arrayTwee)

function deel(num1, num2){
	for (i = 0; i <= 9; i++){
		var divide = num1[i] / num2[i]
delen.innerHTML += num1[i] + "/" + num2[i] + "=" + divide + "<br>"
	}
}

deel(arrayEen, arrayTwee)