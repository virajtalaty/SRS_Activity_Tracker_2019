function openSettings(){  
  parent.openSettings(); 
}

function updateClock() {
    var now = new Date();
    time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
    document.getElementById('time').innerHTML = [time].join(' / ');
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call 