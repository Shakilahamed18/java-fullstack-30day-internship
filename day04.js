// Day 04 - JavaScript Core

// 1) Array of student objects
let students = [
  {
    name: "Asha",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"]
  },
  {
    name: "Bala",
    age: 22,
    grade: "B",
    subjects: ["Math", "History"]
  },
  {
    name: "Charan",
    age: 21,
    grade: "A",
    subjects: ["Science", "Computer"]
  }
];

// 2) Add a new student
function addStudent(student) {
  students.push(student);
}

// 3) Find students by grade
function findStudentsByGrade(grade) {
  return students.filter(student => student.grade === grade);
}

// 4) Calculate average age
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// 5) Get all unique subjects
function getUniqueSubjects() {
  const allSubjects = students.map(student => student.subjects).flat();
  return [...new Set(allSubjects)];
}

// 6) Sort students by name alphabetically
function sortStudentsByName() {
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

// 7) Closure: counter for number of students added
function createStudentCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const studentAddedCounter = createStudentCounter();

// Add one new student
addStudent({
  name: "Divya",
  age: 23,
  grade: "B",
  subjects: ["English", "Computer"]
});

console.log("All Students:");
console.log(students);

console.log("\nStudents with grade A:");
console.log(findStudentsByGrade("A"));

console.log("\nAverage Age:");
console.log(calculateAverageAge());

console.log("\nUnique Subjects:");
console.log(getUniqueSubjects());

console.log("\nStudents Sorted by Name:");
console.log(sortStudentsByName());

console.log("\nCounter Demo:");
console.log("Students added:", studentAddedCounter());
console.log("Students added:", studentAddedCounter());
console.log("Students added:", studentAddedCounter());