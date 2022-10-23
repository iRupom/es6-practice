class Parent {
    constructor() {
        this.fatherName = 'Rakib Talukder Rupom';
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.childName = name;
    }

    getChildName() {
        return this.childName;
    }

    getFatherName() {
        return this.fatherName;
    }
}

const baby = new Child('Umor');
const baby2 = new Child('Hamza');

console.log(baby);
console.log(baby2);
console.log(baby.getChildName());
console.log(baby.getFatherName());