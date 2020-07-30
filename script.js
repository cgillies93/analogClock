const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


const runTheClock = () => {

  const date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();


  let hrPosition = (hr * 30) + ((min * 6) / 12);
  let minPosition = (min * 6) + ((sec * 6) / 60);
  let secPosition = sec * 6;


  HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}


const interval = setInterval(runTheClock, 1000);
