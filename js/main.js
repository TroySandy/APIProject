let deadline = [1616944200000,
  1618758600000,
  1619968200000,
  1620573000000,
  1621782600000,
  1617721800000,
  1618326600000];
// array of dates for countdown timer thru round 7.  

let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline[0] - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "It's Race Day!!!!!";
    deadline.shift();
  }
}, 1000);
