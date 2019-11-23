function openSettings(){  
  parent.openSettings(); 
}

function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', '...']; // you get the idea
        time = now.getHours() + ':' + now.getMinutes(), // again, you get the idea

        // a cleaner way than string concatenation

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [time].join(' / ');

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();// initial call

function updateValue() {
   var step= '100'
    document.getElementById('stepCount').innerHTML = step

}