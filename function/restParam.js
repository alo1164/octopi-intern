function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
let a = sumAll(4, 5, 2, 56)
let b = sumAll(9, 34)
console.log(a); 
console.log(b);
