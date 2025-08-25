// Array of student marks
const marks = [75, 88, 92, 64, 99, 81, 56];

// Method 1: Using a loop
let highest3 = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest3) {
    highest3 = marks[i];
  }
  
}
console.log("Highest Marks (loop):", highest3);

// Method 2: Using Math.max
const highest1 = Math.max(...marks);
console.log("Highest Marks (Math.max):", highest1);
