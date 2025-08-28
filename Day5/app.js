const express = require("express");
const app = express();


const students = [
  { id: 1, name: "Ekta", marks: 78 },
  { id: 2, name: "Komal", marks: 92 },
  { id: 3, name: "Kunal", marks: 85 },
  { id: 4, name: "Sneha", marks: 66 }
];


app.get("/", (req, res) => {
  res.send("Welcome to Student API .");
});


app.get("/students", (req, res) => {
  res.json(students);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
