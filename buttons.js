
var image = document.getElementById("image");
var bgimage = document.getElementById("bgimage")



function button1() {
	const button1 =
	document.getElementById("button_1");
	const inside = button1.innerHTML;
	const nummer1 = parseInt(inside);
	const groter1 = nummer1 + 1;
	button1.innerHTML = groter1;

	var image = document.getElementById("image");
	var bgimage = document.getElementById("bgimage")
	image.src="images/1.jpg"
	bgimage.src="images/bg1.jpg"
}


function button2() {
	const button2 =
	document.getElementById("button_2");
	const inside = button2.innerHTML;
	const nummer = parseInt(inside);
	const groter = nummer + 1;
	button2.innerHTML = groter;

	var image = document.getElementById("image");
	var bgimage = document.getElementById("bgimage")
	image.src="images/2.jpg"
	bgimage.src="images/bg2.jpg"
}

function button3() {
	const button3 =
	document.getElementById("button_3");
	const inside = button3.innerHTML;
	const nummer = parseInt(inside);
	const groter = nummer + 1;
	button3.innerHTML = groter;

	var image = document.getElementById("image");
	var bgimage = document.getElementById("bgimage")
	image.src="images/3.jpg"
	bgimage.src="images/bg3.jpg"
}