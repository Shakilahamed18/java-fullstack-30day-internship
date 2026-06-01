import {
  students,
  addStudent,
  findStudentsByGrade,
  calculateAverageAge,
  getUniqueSubjects,
  sortStudentsByName,
  fetchStudentById
} from "./students.mjs";

const main = async () => {
  const newStudent = {
    id: 4,
    name: "Divya",
    age: 23,
    grade: "B",
    subjects: ["English", "Computer"]
  };

  const updatedStudents = addStudent(students, newStudent);

  console.log("All Students:");
  console.log(updatedStudents);

  console.log("\nStudents with grade A:");
  console.log(findStudentsByGrade(updatedStudents, "A"));

  console.log("\nAverage Age:");
  console.log(calculateAverageAge(updatedStudents));

  console.log("\nUnique Subjects:");
  console.log(getUniqueSubjects(updatedStudents));

  console.log("\nStudents Sorted by Name:");
  console.log(sortStudentsByName(updatedStudents));

  console.log("\nOptional Chaining Example:");
  console.log(updatedStudents[0]?.name ?? "Unknown");

  console.log("\nPromise.all Demo:");
  const [s1, s2] = await Promise.all([
    fetchStudentById(1),
    fetchStudentById(3)
  ]);
  console.log(s1);
  console.log(s2);
};

main().catch((error) => {
  console.error("Error:", error.message);
});