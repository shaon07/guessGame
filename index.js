var point =0;

function easymode(){
	document.querySelector("#modeText").value=21;
	document.querySelector("#selectmode").innerHTML= "Easy"
}

function normalmode(){
	document.querySelector("#modeText").value=51;
	document.querySelector("#selectmode").innerHTML= "Normal"

}

function hardmode(){
	document.querySelector("#modeText").value=101;
	document.querySelector("#selectmode").innerHTML= "Hard"

}

// var customNumber = document.querySelector("#customnum").value;

// function customMode(){
// 	document.querySelector("#modeText").value=customNumber;
// 	document.querySelector("#selectmode").innerHTML= "Custom"

// }

function changebg(){

	document.querySelector("#modebtn1").setAttribute("style","background:red");
	document.querySelector("#modebtn2").setAttribute("style","background:orangered");
	document.querySelector("#modebtn3").setAttribute("style","background:orangered");
}

function changebg2(){

	document.querySelector("#modebtn1").setAttribute("style","background:orangered");
	document.querySelector("#modebtn2").setAttribute("style","background:red");
	document.querySelector("#modebtn3").setAttribute("style","background:orangered");
}

function changebg3(){

	document.querySelector("#modebtn1").setAttribute("style","background:orangered");
	document.querySelector("#modebtn2").setAttribute("style","background:orangered");
	document.querySelector("#modebtn3").setAttribute("style","background:red");
}

function myfun(){
	// var modeNum = modefun();
	// function modefun(argument) {
		
	// 	document.querySelector("")
	// }
		// document.querySelector("#modeText").value=6;

	var usermode = document.querySelector("#modeText").value;
	var numberOne = Math.random() * usermode;
	numberOne = Math.floor(numberOne);
	var storeNum = document.querySelector("#inputbox").value;

	if (storeNum=="") {
		alert("Please Enter Your Lucky Number")
	}else if(isNaN(usermode)){
		alert("Please select a mode")
	}
	else if (numberOne==storeNum) {
		point++
		document.querySelector("#pointCard").innerHTML="Your Score : "+point;
		alert("The Lucky Number Is "+numberOne);
	}else{
				document.querySelector("#pointCard").innerHTML ="Your Score : "+point;
				alert("The Lucky Number Is "+numberOne+" Try Again")
	}
	
}
