function openSettings(){  
	location.href = "./personalDetails.html";
}

function openActivity()
{
	location.href = "./activity_screen.html";
}

function updateClock() {
    var now = new Date();
    time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
    document.getElementById('time').innerHTML = [time].join(' / ');
    setTimeout(updateClock, 1000);
}
updateClock();// initial call

function updateValue() {
   var step= '100'
    document.getElementById('stepCount').innerHTML = step

}