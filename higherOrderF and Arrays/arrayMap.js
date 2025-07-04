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