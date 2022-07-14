
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

// // Output: 
// //  1
// //  10

// // -----------------------------------

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

// // Output: 
// // 10
// // 100

// // -----------------------------------

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

// // Output: Uncaught SyntaxError: Identifier 'x' has already been declared

// // -----------------------------------

function a(){
    console.log(x);
}
a();
var x=2   

// // Output: undefined

// // -----------------------------------

let x;
function b(){
    console.log(x);
}
b();
x=2;

// //Output: undefined

// // -----------------------------------

function a(){
    console.log(x);
}
a();
let x=2

// //Output: x not defined

// // -----------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

// //Output: 10 20 30 2
// // ----------------------------------
 

 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();

// //Output: 
// //  ƒ y(){
// //     console.log(a);
// // }
// // 7

// // ----------------------------------


function x(){
    for(var i=0;i<600;i++){
        setTimeout(()=>{
            console.log(i);
        },100)
    }
}
x();
// //Output:  6 (6)
// // ----------------------------------


function x(){
    for(var i=0;i<6;i++)
    {
        function close(i)
        {
                setTimeout(function()
                {
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();

//output:
// (6) interview
// undefined
// 0
// 1
// 2
// 3
// 4
// 5

// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

// question1: make copy of the object and manipulate values inthe new copied object
// question2: print all the properties using appropriate for loop 

// Question-1: 
let person2 = person;
person2['name'] = "kajal";
person2['age'] = 21;
person2['isAutherised'] = true;
person2['isUnicorn'] = false;
person2['bestDomain'] = "Development";


//Question-2:
for(i in person2){
    console.log(i + ":" + person2[i]);
}

//Output:
// name:kajal
// age:21
// isAutherised:true
// isUnicorn:false
// bestDomain:Development




// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop


