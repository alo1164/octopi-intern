let arr = [43, 2, 73, 23]
let a = arr.filter((val)=>{
    return val<30
})
console.log(a)

//reduce method 
let arr2 = [3, 4, 1, 5, 2]
let i = arr2.reduce((val1, val2)=>{
    return val1 + val2
})
console.log(i)

const reduce_func = (val1, val2) => {
    return val1 + val2
}
let Narr = arr2.reduce(reduce_func)
console.log(Narr)


const students = [
  { name: "Anowar", marks: 85 },
  { name: "Rifat", marks: 33 },
  { name: "Sami", marks: 45 },
  { name: "Nazia", marks: 75 },
  { name: "Shuvo", marks: 22 }
];

const PassedStd = students.filter( student => student.marks >= 40 )
console.log(PassedStd)
