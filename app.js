let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
m = checkTime(m);
h = checkTime(h);

document.getElementById("currenttime").innerHTML = h + ":" + m;
document.getElementById("currenttime2").innerHTML = h + ":" + m;
document.getElementById("currenttime3").innerHTML = h + ":" + m;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }