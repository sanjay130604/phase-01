let students = [
    { name: "Alice", age: 22, grades: [85, 90, 88] },
    { name: "Bob", age: 19, grades: [78, 82, 80] },
    { name: "Charlie", age: 21, grades: [92, 95, 94] },
    { name: "David", age: 18, grades: [70, 75, 72] },
    { name: "Eve", age: 23, grades: [88, 85, 90] }
];

let studentNames = students.map(student => student.name);

let olderStudents = students.filter(student => student.age > 20);

let totalGrades = students.reduce((sum, student) => sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length, 0);
let averageGrade = totalGrades / students.length;

let avgGradeOlderStudents = students
    .filter(student => student.age > 20)
    .map(student => student.grades.reduce((a, b) => a + b, 0) / student.grades.length)
    .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);

console.log("Student Names:", studentNames);
console.log("Students Older Than 20:", olderStudents);
console.log("Average Grade of All Students:", averageGrade.toFixed(2));
console.log("Average Grade of Students Older Than 20:", avgGradeOlderStudents.toFixed(2));
