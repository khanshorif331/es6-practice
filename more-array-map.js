// array map

const friends =['Tom Sulaiman', 'Tom Hanks' , 'Tom Btaddy' , 'Tom Sahalam']

const fLength = friends.map(friend => friend.length)
// console.log(fLength);


// filter

const numbers = [31,50,24,12,16,2,54,16,45,63];

const bigNumbers = numbers.filter(number => number>20);
console.log(bigNumbers);



// object class creation

// class Support {
//     name;
//     designation = 'Support Web Developer';
//     address = 'BD';
//     constructor(name){
//         this.name=name;
//     }
//     startSession(){
//         console.log('Start support session');
//     }
// } 

// const aamir = new Support();
// console.log(aamir);






/* c lass Support{
    name ;
    designation = 'Support Web Instructor'
    address = 'BD'
    constructor(name){
        this.name = name;
    }
    startSupport(){
        console.log('This is very ridiculous');
    }

}
const aamir = new Support('Aamir Khan');
const salman = new Support('Solaiman Khan')
console.log(aamir,salman); */

class Support{
    name;
    address = 'Bangladesh'
    designation = 'Support Web Dev'
    age;
    constructor(name,age){
        this.name = name
        this.age = age
    }
    startSession(){
        console.log(this.name, 'Start support session');
    }
}
const aamir = new Support('Aamir Khan',42);
const shah = new Support('Shah Alam',35)
const salman = new Support('Salman Khan',53)

aamir.startSession();

// console.log(aamir,shah,salman);
