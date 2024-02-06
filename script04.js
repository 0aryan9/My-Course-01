let myHeros = ['thor', 'spiderman']
let dcHeros = ['batman', 'black adam', 'superman']


let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aryan = function () {
    console.log('aryan is everywhere');
}

Array.prototype.heyAryan = function () {
    console.log("Aryan says hello")
}

myHeros.aryan()


const User = {
    name: "top name",
    email: "123@gamil.com"
}

const Teacher = {
    makeVideos: false
}

const TeachingSupport = {
    isAvailable: false
}
const TSAssistance = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.getPrototypeOf(Teacher, User)


// Goal: get true length of string

String.prototype.truelength = function () {
    console.log(`true length is:" ${this.trim().length}`);
}

let myName = "Aryan    "