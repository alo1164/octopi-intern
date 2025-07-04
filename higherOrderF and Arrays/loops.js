//for each loop
let num = [5, 45, 4, 3]
num.forEach((element)=>{
    console.log(element * element)
})

//array.from
let name = 'Anowar'
let arr = Array.from(name)
console.log(arr)

//for of loop

for (let i of num){
    console.log(i)
}

//for in
for (let i in num){
    console.log(i)
}