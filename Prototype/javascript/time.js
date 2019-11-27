updateClock();// initial call

var initialSteps = 0;
var initialKcal = 0;
var initialMiles = 0;
var initialHeart = 70;

var stepIncrement = 0;
var kcalIncrement = 0;
var milesIncrement = 0;
var heartIncrement = 0;
var finalHeart = 70;


function openSettings(){  
	location.href = "./personalDetails.html";
}

function openActivity()
{
	location.href = "./activity_screen.html";
}

function openMain()
{
	location.href = "./time_screen.html";
}

function updateClock() {
    var now = new Date();
    time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
    document.getElementById('time').innerHTML = [time].join(' / ');
    setTimeout(updateClock, 1000);
}



function openHeartAlert(){
	document.getElementById("floating_alert").style.visibility = "visible";
}

function closeHeartAlert(){
	document.getElementById("floating_alert").style.visibility = "hidden";
}


function updateDetails() {
	
	
	document.getElementById('stepCount').innerHTML = initialSteps;
	document.getElementById('calorieCount').innerHTML = initialKcal;
	document.getElementById('distanceCovered').innerHTML = initialMiles;
	document.getElementById('heartRateValue').innerHTML = initialHeart;
	
	initialSteps += stepIncrement
	initialSteps = Math.round(initialSteps * 100) / 100; 
	
	initialKcal += kcalIncrement
	initialKcal = Math.round(initialKcal * 100) / 100; 
	
	initialMiles += milesIncrement
	initialMiles = Math.round(initialMiles * 100) / 100; 
	 
	if(initialHeart<finalHeart)
	{
		initialHeart+=heartIncrement;
	}
	if(finalHeart<initialHeart)
	{
		initialHeart-=heartIncrement;
	}
	
	setTimeout(updateDetails, 1000);
    
}

function updateRunningValue() {
	stepIncrement = 5;
	kcalIncrement = 3;
	milesIncrement = 0.2;
	finalHeart = 190;
	heartIncrement = 5;
	document.getElementById('manIcon').className = "fas fa-running";
}

function updateWalkingValue() {
    
	stepIncrement = 1;
	kcalIncrement = 1;
	milesIncrement = 0.05;
	finalHeart = 100;
	heartIncrement = 2;
	document.getElementById('manIcon').className = "fas fa-walking";
}

function updateClimbingValue() {
    stepIncrement = 3;
	kcalIncrement = 2;
	milesIncrement = 0.1;
	finalHeart = 170;
	heartIncrement = 3;
	document.getElementById('manIcon').className = "fas fa-hiking";
}
