// Function that changes text colors PT-BR to green or yellow
function changeColorBR(){
	var id = document.getElementById("ptbr");

	if(id.style.color == "green"){
		id.style.color = "yellow";
	}
	
	else{
		id.style.color = "green";
	}

	console.log(id.innerHTML);
}

// Function that changes the colors of the ENG text to blue or red
function changeColorEn(){
	var id = document.getElementById("eng");

	if(id.style.color == "blue"){
		id.style.color = "red";
	}
	
	else{
		id.style.color = "blue";
	}

	console.log(id.innerHTML);
}