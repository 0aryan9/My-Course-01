// Functions

// function Sum(value1,value2) {
//     // let num1 = 16;
//     // let num2 = 25;

//     console.log('Addition of two numbers:', value1 + value2);
// }

// Sum(16,25);  //caliing of function
// Sum(10,20);
// Sum(83,90);
// Sum(111,222);
// Sum(54,45);
// Sum(90,9);

//Abov => Normal function and funtion with arguments

//Function with Return type

// function sum(val1,val2) {
//     let result = val1 + val2;
//     return result;
// }
// let adds = sum(12,13);
// console.log(adds);

//String as parameter
// function URL(url,domain) {
//     let con ='http://';
//     let result = con + url + domain;
//     return result;
// }
// let aryansite = URL('aryansaini','.me')
// console.log(aryansite)

//Passing n number of parameters

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let sumarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrresult = sum(sumarray);
// console.log(arrresult);

// function sum(arr) {       //arr is holding the values of sumarray irrespective of diffrent names.
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let sumarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrresult = sum(sumarray);
// console.log(arrresult);

// function nihal() {
//     // Arguments
//     // console.log(arguments);
//     let sum = 0;
//     for(i=0; i< arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// let a = nihal(7,8,9,10,11,12,14,15)
// console.log(a);
// console.log(nihal(7,8,9,10,11,12,14,15));

 //Arrow functions

//  let aryan = (x,y) => {
//     console.log('Me Bhagwan Hu', x, y);
//  };

//  aryan(1,2);


// OBJECT

let userinfo = {
    fname:"Aryan",
    lname:"Saini",
    role:"student",
    LoginCount:25,
};
// console.log(userinfo);
// // console.log(userinfo.LoginCount);

// userinfo.LoginCount=40;
// console.log(userinfo);


//For in LOOP
// for(let x in userinfo) {
    // console.log(x);  //will get keys
    // console.log(userinfo[x]);  //will get values
// }
