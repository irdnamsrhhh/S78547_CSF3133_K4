function checkMark() {

let name = document.forms["gradeForm"]["name"].value.trim();
let mark = document.forms["gradeForm"]["mark"].value.trim();

// Error 1 (Line 5): Assignment instead of comparison.
// Wrong: if (name = "") {
if (name === "") {
    alert("Name must be filled out.");
    return false;
}

// Part 2: Validate empty mark
if (mark === "") {
    alert("Mark field cannot be empty.");
    return false;
}

// Error 2 (Line 9): Incorrect function spelling.
// Wrong: if (isNan(mark)) {
if (isNaN(mark)) {
    alert("Please enter a valid numeric value.");
    return false;
}

// Convert mark into a number
mark = Number(mark);

// Error 3 (Line 14): Incorrect logical operator.
// Wrong: if (mark < 0 && mark > 100) {
if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
}

let grade;
let colour;

// Determine grade and colour
if (mark >= 80) {
    grade = "A";
    colour = "green";

} else if (mark >= 65) {
    grade = "B";
    colour = "green";

} else if (mark >= 50) {
    grade = "C";
    colour = "orange";

} else {
    grade = "F";
    colour = "red";
}

// Error 4 (Line 28): Incorrect method spelling.
// Wrong: document.getElementByID("result").innerHTML =
//     name + " got grade " + grade;

document.getElementById("result").textContent =
    name + " got grade " + grade;

// Error 5 (Line 30): Incorrect CSS property.
// Wrong: document.getElementById("result").style.colour = "green";

// Part 2: Change result colour according to grade
document.getElementById("result").style.color = colour;

// Part 2: Display checking date and time
document.getElementById("checkTime").innerHTML =
    "Checked on: " + Date();

// Error 6 (Line 31): True causes the page to reload.
// Wrong: return true;
return false;
}

// Function to display grade table
function showTable() {

let grades = ["A", "B", "C", "F"];
let ranges = ["80-100", "65-79", "50-64", "0-49"];

let tableHTML = "<table>";

// Part 2: Add table header
tableHTML +=
    "<tr><th>Grade</th><th>Mark Range</th></tr>";

// Error 7 (Line 38): Starting at index 1 skips grade A.
// Wrong: for (let i = 1; i < grades.length; i++) {
for (let i = 0; i < grades.length; i++) {

    tableHTML += "<tr><td>" + grades[i] +
        "</td><td>" + ranges[i] + "</td></tr>";
}

tableHTML += "</table>";

// Error 8 (Line 42): Incorrect innerHTML spelling.
// Wrong: document.getElementById("tableContainer").innerHtml = tableHTML;
document.getElementById("tableContainer").innerHTML = tableHTML;
}

// Part 2: Function to generate random mark
function randomMark() {

// Generate random whole number from 0 to 100
let random = Math.floor(Math.random() * 101);

// Display random number in mark input
document.getElementById("mark").value = random;
}