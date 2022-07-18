const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const celebration = document.querySelector(".celebration");
const celebrationEnds = document.querySelector(".celebration-ends");
const items = document.querySelectorAll(".celebration-ends-format h4");

let futureDate = new Date(2022, 6, 20, 12, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

celebration.textContent = `Celebration starts on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}AM`;

//Future Time in Milli-Seconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //Values in Milli-seconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //Calculating Values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //Values in Array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `o${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    celebrationEnds.innerHTML = `<h4 class="expired">Celebration has been completed..!</h4>`;
  }
}
//Count - Down
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
