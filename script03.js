// const obj1 = {
//     rocket: 'rr',
//     fuel: 2,
//     config: {
//         name: 'mars',
//     }
// }

// obj1.fuel = 200;
// obj1['year'] = 2000;
// console.log(obj1);

// part 2

// const obj2 = new Object()
// obj2.fname = 'aryan'
// obj2.lname = 'saini'
// obj2.cname = 'aryansaini'

// console.log(obj2);

// part 3

// const powers = {
//     fly:'True',
//     coordinate: Math.random() + 2
// }

// const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.fly);
// console.log(Object.getPrototypeOf(obj3));

// part 4

// const obj4 = Object.create({})
// Object.defineProperty(obj4, 'book', {
//     // icon: 'blue'
//     get: () => 'blue',
//     enumerable: true
// })

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

// for( k in obj4) {
    // console.log(k);  // will get keys
    // console.log(obj4[k]);  //will get value
// }

// part 5

// const obj5 = {
//     comics:'marvel',
//     pen:'',
//     printComics: function () {
//         this.pen += 'somevalue' 
//         console.log(this);
//         return this   // using for making Chaining true otherwise it will give error
//     },
    // printaComics: () => {
    //     // this.pen += 'somevalue' 
    //     console.log(this);
    // }
// }

// console.log(obj5.printComics().printComics().printComics());
// console.log(obj5.printaComics());