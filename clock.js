var seconds = 60;
var minutes = 0;
var hours = 0;

var timerHandler = setInterval(changeTime, 1000);

function changeTime() {
  document.getElementById("seconds").innerHTML = String(seconds);
  document.getElementById("minutes").innerHTML = String(minutes);
  document.getElementById("hours").innerHTML = String(hours);

  seconds--;
  if (seconds == 0) {
    seconds = 60;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 24) {
        seconds = 0;
        minutes = 0;
        hours = 0;
      }
    }
  }
}
