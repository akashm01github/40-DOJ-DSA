//Number of Days in a Month
let prompt = require("prompt-sync")();
let month = Number(prompt("Enter the Month: "));
let year = Number(prompt("Enter the Year: "));
let days = 0;
function isLeap(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  days = 31;
  console.log(days);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  days = 30;
  console.log(days);
} else if (month == 2) {
  days = isLeap(year) ? 29 : 28;
  console.log(days);
} else {
  console.log("Invalid Input");
}
