// destructuring in objects 

const fish = {id: 58, name: 'King Hilsha' ,price: 9000 , phone: '01954785221' , address:  'Chandpur' , dress: 'silver'} ;


const {id,price,phone} = fish;


const company ={
    name:'Gp',
    ceo: { id: 1, name: 'ajmol' , food: 'fuchka'},
    web: {work: 'website development' , employee: 22, framework: 'react'}
}

const {work,framework} = company.web;
const {food}= company.ceo;
console.log(work,framework,food);


// destructing in arrays
const [name , hobby]= [85,54]
console.log(name,hobby);



// maap.js


// regular ways 
const numbers = [4,6,8,10];

// regular way
/* const output = []
for (const number of numbers){
    const result = number*2;
    output.push(result);
}
// console.log(output);
 */


// single line code magic with array map
const square = numbers.map(x=>x*3);
console.log(square);