// inheritance


// make a common class

class TeamMember{
    name;
    address = 'Bangladesh'
    designation = 'Support Web Dev'
    age;
    constructor(name,age){
        this.name = name
        this.age = age
    } 
}



// class -1
class Support extends TeamMember{
    groupSupportTime;
    constructor(name,age,time){
        super(name,age)
        this.groupSupportTime = time
    }
    startSession(){
    console.log(this.name, 'Start support session');
    }
}
const aamir = new Support('Aamir Khan',42 , 9);
const shah = new Support('Shah Alam',35 , 5)
const salman = new Support('Salman Khan',53 , 3)

console.log(salman);





// class 2

class Studentcare extends TeamMember{
    student;
    constructor(name , age , student){
        super(name,age)
        this.student = student;
    }
    buildARoutine(student){
        console.log(this.name ,'Build a routine for',student);
    }
}

// const alia = new Studentcare('Alia Bhatt','India')
// alia.buildARoutine('Alia Bhatt')
// console.log(alia);





// another class

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name,address,editor){
        super(name,address)
        this.codeEditor = editor
    }
    releaseApp(version){
        console.log(this.name ,'Release app version',version);
    }
}

const moin = new NeptuneDev('Moin Ali','India','Android Studio' )
// console.log(alia);
moin.releaseApp('4.2.3')
// console.log(moin);