///normal arrow function
const greet = (name) => {
  return "Hello " + name;
};
console.log(greet("Alo"))

//more shorter without return
const hop = (name) => "Hello " + name;

console.log(hop("Anowar"));  // Hello, Anowar

//without parameter
const sayHi = () => console.log("Hi!");
sayHi(); 

//for only one parameter
const double = x => x * 2;

console.log(double(4));

//for multiple parameter must use bracket
const add = (a, b) => a + b;
console.log(add(5, 7));  

//filtering with arrow function
const students = [
  { name: "Anowar", marks: 85 },
  { name: "Rifat", marks: 33 },
  { name: "Sami", marks: 45 },
  { name: "Nazia", marks: 75 },
  { name: "Shuvo", marks: 22 }
];


const passedStudents = students.filter(student => student.marks >= 40);

passedStudents.forEach(student => {
  console.log(`Congrats, ${student.name}! You passed with ${student.marks} marks.`);
});

console.log('\n\n')
for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 40) {
    console.log(`Congrats, ${students[i].name}! You passed with ${students[i].marks} marks.`);
  } else {
    console.log(`Sorry ${students[i].name}, you have failed. Better luck next time.`);
  }
}


