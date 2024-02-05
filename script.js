/* Till now
=>Values(Data Types)
=>variables 
=>Operations
=>Conditions(Decisions)
=>Loops(do-while, while, for)
=>Indexing
=>Object and Array
*/

// TODAY
// Array in depth and For of.

// Array methods
// let names = ["Aryan","Aditya","Tarun","Arun"];
// console.log(names);
// console.log(names.length);
// console.log(names[2]);
// console.log(names.length-1);
// console.log(names[names.length-1]);

// names[0]='Lucky' //replacing value of index 0 by Lucky.
// console.log(names)

// let names=new Array('one','two') //another way of declaring array but not recommended.
// console.log(names)

//Puch => Insert new values inside the array
// names.push('Piyush')
// console.log(names);

//Slice => for accessing more than one value using index.
// let name= ['aryan','lucky','aditya','chintu'];
// console.log(name.slice(1,3));
// console.log(name.slice(0,4)); // For accessing complete array write index value more than total index.

//Splice => to insert value inside array
// let fruit = ["apple","bada apple","chota apple","double apple"];
// fruit.splice(2,0,'kharab apple','acha apple');
// console.log(fruit);
// fruit.splice(2,1,'kharab apple','acha apple');
// console.log(fruit);

//Concatenatoin

// let arr1= [1,2,3,4]
// let arr2 =[4,5,6,7]
// let arr3 =[8,9,10,11,12,13]

// console.log( arr1.concat(arr2,arr3))


//Fill




//includes
// let num = [1,2,3,4,5,6,7,8];
// console.log(num.includes(7,6));
// console.log(num.includes(7,7));


//indexOf => It wil tells about index no. of the value.
//  console.log(num.indexOf(5))


//isArray => tells about given is array or not.
// let num=[1,2,3,'aryan',4,5,'diya']
// let num1='Aryan';
// console.log(Array.isArray(num));
// console.log(Array.isArray(num1));


// jon() => will add the given value between the values of array
// let Arr1=[1,2,3,4,5,6];
// console.log(Arr1.join('xyz'));
// console.log(Arr1.join(000));


//lastIndexOf

// let num =[1,2,3,'anurag',4,5,6,'anurag','anurag']
// console.log(num.lastIndexOf('anurag'))


//.map()
// let maths=[1,4,9,16,25];
// console.log(maths.map(Math.sqrt));


//pop => to take out value from the original array from the last.
// let maths = [1,4,9,16,25];
// console.log(maths.pop());
// console.log(maths.pop());
// console.log(maths);


//reverse => change the direction of array
// let maths = [1,4,9,16,25];
// console.log(maths.reverse());


//shift() =>removes value from the starting
// let maths = [1,2,3,4,5]
// console.log(maths.shift());
// console.log(maths.shift());
// console.log(maths.shift());
// console.log(maths.shift());


//sort => arrange values in order
// let names=['lucky','chintu','babu','arun']
// console.log(names.reverse(names.sort()));


//unshift
// fruit = ["apple","bada apple","chota apple","double apple"];
// fruit.unshift('apple 1','apple2');
// console.log(fruit);


//converting to array
// name='Aryan'
// let array1=name.split('');
// console.log(array1);


// for of LOOP
// let fruit = ["apple","bada apple","chota apple","double apple"];
// let upperfruit =[]; //empty array

// for(const badaletter of fruit) {
//     upperfruit.push(badaletter.toUpperCase());
// }
// console.log(upperfruit);


//Break(Terminate everything) and Continue(skip or omit)
// for (let i=0; i<=5; i++){
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }
