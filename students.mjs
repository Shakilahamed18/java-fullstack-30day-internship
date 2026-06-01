export const students = [
  {
    id: 1,
    name: "Asha",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"]
  },
  {
    id: 2,
    name: "Bala",
    age: 22,
    grade: "B",
    subjects: ["Math", "History"]
  },
  {
    id: 3,
    name: "Charan",
    age: 21,
    grade: "A",
    subjects: ["Science", "Computer"]
  }
];

export const addStudent = (list, student) => [...list, student];

export const findStudentsByGrade = (list, grade) =>
  list.filter(({ grade: studentGrade }) => studentGrade === grade);

export const calculateAverageAge = (list) =>
  list.length
    ? list.reduce((sum, { age }) => sum + age, 0) / list.length
    : 0;

export const getUniqueSubjects = (list) => {
  const allSubjects = list.flatMap(({ subjects = [] }) => subjects);
  return [...new Set(allSubjects)];
};

export const sortStudentsByName = (list) =>
  [...list].sort((a, b) => a.name.localeCompare(b.name));

export const fetchStudentById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(students.find((student) => student.id === id));
    }, 500);
  });