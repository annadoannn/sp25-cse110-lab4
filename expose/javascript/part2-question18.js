// runs the function once per second
setInterval(function () {
    let d = new Date(); // gets current timestamo
    let time = d.toLocaleTimeString(); //formats into human-readable time.
    console.log(time); // prints to console
}, 1000);
  