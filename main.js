let deadline = new Date("Mar 28, 2021 11:10:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "It's Race Day!!!!!";
  }
}, 1000);
