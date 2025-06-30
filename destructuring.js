const mydetails = {
    name: 'Anowar',
    age: 25,
    height: '5 ft 8 inch',
    weight: '67 kg',
    education:{
        bsc: 'cse'
    }
}
const {name} = mydetails
const {education: {bsc}} = mydetails
console.log(name)
console.log(bsc)

//array destructuring
let num=[3,4,2,5,1]
let [a,b] = num
console.log(a,b)
let [,c,,,d] = num
console.log(c,d)

let num1 = [4, 5, [54, 3, 52], 38]
let [,,[,i,j]] = num1
console.log(i,j)

/// swap
let k = 6;
let l = 3;

[k, l] = [l, k]; 

console.log(k, l);
