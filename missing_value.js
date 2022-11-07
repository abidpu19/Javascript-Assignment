let num = [11, 15, 17, 18, 19];
const max = Math.max(...num); // Will find highest number
const min = Math.min(...num); // Will find lowest number
const missing = [];

for (let i = min; i <= max; i++) {
  if (!num.includes(i)) {
    missing.push(i);
  }
}

console.log("------------ given array with missing values -----------");
console.log(num);
console.log("------------ missing values -----------");
console.log(missing);
console.log("------------ Merged Array -----------");
const merg = [...num, ...missing];
const sortArray = merg.sort();
console.log(sortArray);
for (let i = 0; i <= sortArray.length; i++) {
  if (sortArray.indexOf[i] === undefined) {
    sortArray.indexOf[i] = 0 + i;
  }
  for (let j = 0; j < missing.length; j++) {
    if (missing[j] === sortArray[i]) {
      console.log(
        `Missing Array Index of ${missing[j]} is ` + sortArray.indexOf[i]
      );
    }
  }
}
