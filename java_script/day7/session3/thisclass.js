class Student {
    //constructor to initialize properties
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    //method using 'this'
    showDetailWithThis() {
        console.log(`${this.name} has roll number ${this.rollNo}.`);
    }

    //Method with parameters both own (passed) and constructor values
    showDetailWithoutThis(name, rollNo) {
        return `${name} has this roll number from constructor: ${this.rollNo} and passed roll number: ${rollNo}`;
    }
}

//creating objects
let student1 = new Student("Afsarudeen", 1089);
let student2 = new Student("kumar", 2090);

//using method with 'this'
student1.showDetailWithThis();

//Using method with arguments and this
console.log(student2.showDetailWithoutThis("nalan", 3056));

