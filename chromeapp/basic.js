let a = 221;
let b = a-5;
a = 4;
console.log(b,a);

/*
let: 변수 처음 선언할때 사용
const: 상수 변수 선언(변경 불가)
*/

// String 변수
// const what = "👀";
// console.log(what);

// boolean
// const what = true;

// number
// const what = 1;

//float
// const what = 1.1;

// array
// const dayOfWeek = ["mon","tue","wed","thu","fri","sat","sun",1234,true];
// console.log(dayOfWeek);
// console.log(dayOfWeek[7]);
// console.log(dayOfWeek[999]);

// Object
// const peterInfo = {
//     name:"Peter",
//     age:26,
//     gender:"Male",
//     isHandsome: true,
//     favFood: [
//         {
//             name:"oldboy",
//             age:19
//         },
//         {
//             name:"batman",
//             age:15
//         }
//     ]
// };
// console.log(peterInfo);
// console.log(peterInfo.gender);
// peterInfo.gender = "Female"; //안에 있는 값은 변경 가능
// console.log(peterInfo.gender);

// console.log(peterInfo.favFood[1].name);

//function
function sayHello(name, age){
    console.log('Hello!',name);
    console.log(`Hello! ${name}, you are ${age} years old`);
}
sayHello("peter",26);
