class Student {
    school = 'Nam Na jana School'
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    greeting() {
        console.log(`Hello Mr ${this.name}`);
    }
}

const student1 = new Student(1,'rupom');
const student2 = new Student(2, 'rakib');
const student3 = new Student(4, 'mithu');

console.log(student1);
console.log(student2);
console.log(student3.school);

student1.greeting();
