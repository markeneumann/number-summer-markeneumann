// Write a program that sums the numbers from start to end.
function numberSummer(start, end) {
  console.log("func received arguments", start, end);
  let sum = 0;

  for (let i = start; i <= end; i += 1) {
    sum += i; // sum
  }

  //write to the console
  console.log(sum);
}

numberSummer(1, 10);
