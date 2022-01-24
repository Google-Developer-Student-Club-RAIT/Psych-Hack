
function eventTimer(){
  var x = setInterval(function() {
    document.getElementById("cdtext").innerHTML = "EVENT IS NOW LIVE";
    // Set the date we're counting down to
    var countDownDate = new Date("feb 13, 2022 22:00:00").getTime();
    
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("Day").innerHTML = days ;
    document.getElementById("Hour").innerHTML = hours;
    document.getElementById("Min").innerHTML = minutes ;
    document.getElementById("Sec").innerHTML = seconds;


    if (distance < 0) {
      clearInterval(x);
      document.getElementById("cdtext").innerHTML = "This Event has ended";
      document.getElementById("Day").innerHTML =  "0";
      document.getElementById("Hour").innerHTML = "0";
      document.getElementById("Min").innerHTML = "0 " ;
      document.getElementById("Sec").innerHTML = "0 ";
    }

  }, 1000);
}

// Set the date we're counting down to
var countDownDate = new Date("feb 12, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("Day").innerHTML = days ;
  document.getElementById("Hour").innerHTML = hours;
  document.getElementById("Min").innerHTML = minutes;
  document.getElementById("Sec").innerHTML = seconds;
  // If the count down is finished
  if (distance < 0) {
    eventTimer();
    clearInterval(x);
  }
}, 1000);