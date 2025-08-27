

const students = [
  { name: "Ekta", marks: 78 },
  { name: "Komal", marks: 92 },
  { name: "Kunal", marks: 85 }
];

// Calculate total marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);

// Find average
const averageMarks = totalMarks / students.length;

// Find highest scorer
const highestScorer = students.reduce((prev, current) => 
    prev.marks > current.marks ? prev : current
);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Scorer:", highestScorer.name, "-", highestScorer.marks);
