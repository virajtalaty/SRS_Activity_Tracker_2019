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
updateClock();// initial call

function updateRunningValue() {
   var step= '400';
   var calorie ='50';
   var distance = '2';
   var heartRate = '170';
   
   document.getElementById('stepCount').innerHTML = step;
   document.getElementById('calorieCount').innerHTML = calorie;
   document.getElementById('distanceCovered').innerHTML = distance;
   document.getElementById('heartRateValue').innerHTML = heartRate;
}

function updateWalkingValue() {
    var step= '500';
    var calorie ='60';
    var distance = '4';
	var heartRate = '100';
    document.getElementById('stepCount').innerHTML = step;
    document.getElementById('calorieCount').innerHTML = calorie;
    document.getElementById('distanceCovered').innerHTML = distance;
	document.getElementById('heartRateValue').innerHTML = heartRate;
}

function updateClimbingValue() {
    var step= '200';
    var calorie ='100';
    var distance = '2.5';
	var heartRate = '190';
    document.getElementById('stepCount').innerHTML = step;
    document.getElementById('calorieCount').innerHTML = calorie;
    document.getElementById('distanceCovered').innerHTML = distance;
	document.getElementById('heartRateValue').innerHTML = heartRate;
}
