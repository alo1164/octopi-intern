function showName(name, callback) {
  console.log("Your name is:", name);
  callback(); 
}

function sayThanks() {
  console.log("Thanks for telling your name");
}

showName("Anowar Alo", sayThanks);


//another example of call back
console.log('\n\n')
console.log("Let's see another example")
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function showResult(sum) {
  console.log("Total:", sum);
}

add(5, 7, showResult);

//Asynchronous Callback with setTimeout
console.log('\n')
function downloadFile(fileName, callback) {
  console.log(`Start downloading: ${fileName}`);
  
  setTimeout(() => {
    console.log(`Downloaded: ${fileName}`);
    callback(); 
  }, 2000);
}

function notify() {
  console.log("file download is done!");
}

downloadFile("video.mp4", notify);
