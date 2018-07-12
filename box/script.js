for (var i=0; i<300 ; i++){
	document.querySelector('.container').innerHTML += "<div class='box'></div>";
}

var arrayOfBoxes= document.querySelectorAll(".box");

for (var i= 0; i<arrayOfBoxes.length; i++){
	if (i % 2===0){
		arrayOfBoxes[i].style.background= "blue";
	} else if (i%3===0){
		arrayOfBoxes[i].style.background= "pink";
	} else if (i%5===0){
		arrayOfBoxes[i].style.background= "forestgreen";
	} else if (i%7===0) {
		arrayOfBoxes[i].style.background= "lightgreen";
	}
}
