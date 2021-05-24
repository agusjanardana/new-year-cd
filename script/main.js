const newYear = '1 Jan 2022';
const days = document.getElementById('days');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function newYears() {
  const NextNewYear = new Date(newYear);
  //   console.log(NextNewYear);
  const CurrentDate = new Date();
  //   console.log(CurrentDate);

  const TotalDetik = (NextNewYear - CurrentDate) / 1000;
  console.log(TotalDetik);
  const hari = Math.floor(TotalDetik / 3600 / 24);
  const jam = Math.floor(TotalDetik / 3600) % 24;
  const menit = Math.floor(TotalDetik / 60) % 60;
  const sec = Math.floor(TotalDetik) % 60;

  days.innerText = hari;
  hour.innerText = jam;
  minute.innerText = menit;
  second.innerText = sec;
}

newYears();

setInterval(newYears, 1000);
