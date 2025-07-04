function sum(a, b, cb){
 let res= a+b;
 cb(res);
}

sum(4,9, function cb(val){
    console.log(val);
});


//new system
////function sum(a, b, cb){
function add(a, b, cb){
 let val= a+b;
 cb(val);
}
function showRes(val){
console.log(val)
}
add(8,9, showRes);

// Style 1: Named Function (Function আগে থেকে define করে পাঠানো)
function showResult(result){
  console.log("ফলাফল:", result);
}

add(4, 5, showResult);

//Style 2: Anonymous Function (নামহীন)
add(4, 5, function(result){
  console.log("ফলাফল:", result);
});

//Style 3: Arrow Function (ES6+ shortcut)
add(4, 5, (result) => {
  console.log("ফলাফল:", result);
});

//Style 4: Inline Arrow Function (one-liner)
add(4, 5, result => console.log("ফলাফল:", result));

//callback
function cook(food, callback){
  console.log(food + " রান্না করছি...");
  callback(); // রান্না শেষে callback function কল
}

function notify(){
  console.log("রান্না শেষ, ম্যানেজারকে জানানো হলো!");
}

cook("বিরিয়ানি", notify);
