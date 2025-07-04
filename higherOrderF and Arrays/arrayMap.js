let arr = ['hi', 34, 'hello', 45]
let a = arr.map((value, index, array)=>{
    console.log(value, index)
    return value + index
})
console.log(a)

arr.shift()
console.log(arr)

arr.push("chup")
console.log(arr)

const students = [
  { name: "Anowar", marks: 85 },
  { name: "Rifat", marks: 33 },
  { name: "Sami", marks: 45 },
  { name: "Nazia", marks: 75 },
  { name: "Shuvo", marks: 22 }
];
const toUpper = students.map(student=>student.name.toUpperCase())
console.log("Uppercase Names:"+ toUpper);
