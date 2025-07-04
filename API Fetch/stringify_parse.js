const student = {
  name: "Anowar",
  age: 24,
  cgpa: 3.73
};

const jsonData = JSON.stringify(student);
console.log("👉 JSON.stringify():", jsonData);

const parsedData = JSON.parse(jsonData);
console.log("👉 JSON.parse():", parsedData);
console.log("Name:", parsedData.name);
