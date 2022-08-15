let calendarTable = document.getElementById("table_hours");
const input = document.querySelectorAll("input");
let def = 0;
let monday = document.getElementsByName("monday");
let tuesday = document.getElementsByName("tuesday");
let wednesday = document.getElementsByName("wednesday");
let thursday = document.getElementsByName("thursday");
let friday = document.getElementsByName("friday");
let saturday = document.getElementsByName("saturday");
let sunday = document.getElementsByName("sunday");
let sum = 0;
let sumMonday = 0;
let sumTuesday = 0;
let sumWednesday = 0;
let sumThursday = 0;
let sumFriday = 0;
let sumSaturday = 0;
let sumSunday = 0;
let arrMon = Array.from(monday);

/*
input.forEach((element) => {
  element.addEventListener("change", getChange);
});

*/
arrMon.forEach((element) => {
  element.addEventListener("change", mondayTotal);
});

monday.forEach((element) => {
  element.addEventListener("change", mondayTotal);
});

tuesday.forEach((element) => {
  element.addEventListener("change", tuesdayTotal);
});

wednesday.forEach((element) => {
  element.addEventListener("change", wednesdayTotal);
});

thursday.forEach((element) => {
  element.addEventListener("change", thursdayTotal);
});

friday.forEach((element) => {
  element.addEventListener("change", fridayTotal);
});

saturday.forEach((element) => {
  element.addEventListener("change", saturdayTotal);
});

sunday.forEach((element) => {
  element.addEventListener("change", sundayTotal);
});

function total(event) {
  sum = 0 * Number(event.target.value);
  document.getElementById("totalMonday").innerHTML = sum;
}

//Monday
function mondayTotal(event) {
  monday.forEach((element) => {
    element.addEventListener("change", total);
  });

  sumMonday += Number(event.target.value);
  //console.log(sumMonday).value;
  document.getElementById("totalMonday").innerHTML = sumMonday;
}

//Tuesday
function tuesdayTotal(event) {
  sumTuesday += Number(event.target.value);
  document.getElementById("totalTuesday").innerHTML = sumTuesday;
}

//Wednesday
function wednesdayTotal(event) {
  sumWednesday += Number(event.target.value);
  document.getElementById("totalWednesday").innerHTML = sumWednesday;
}

//Thursday
function thursdayTotal(event) {
  sumThursday += Number(event.target.value);
  document.getElementById("totalThursday").innerHTML = sumThursday;
}

//Friday
function fridayTotal(event) {
  sumFriday += Number(event.target.value);
  document.getElementById("totalFriday").innerHTML = sumFriday;
}

//Saturday
function saturdayTotal(event) {
  sumSaturday += Number(event.target.value);
  document.getElementById("totalSaturday").innerHTML = sumSaturday;
}

//Sunday
function sundayTotal(event) {
  sumSunday += Number(event.target.value);
  document.getElementById("totalSunday").innerHTML = sumSunday;
}

/*
let calendarRows = calendarTable.rows;

for (row = 0; row < calendarRows.length; row++) {
  // console.log("row:", calendarRows[row].cells);
  let numCells = calendarRows[row].cells.length;
  let currentRow = calendarRows[row].cells;
  for (cell = 0; cell < numCells; cell++) {
    // console.log(currentRow[cell].textContent);
    let cellValue = Number(currentRow[cell]);
    if (!isNaN(cellValue)) {
      console.log(cellValue);
    }
  }
}
*/
