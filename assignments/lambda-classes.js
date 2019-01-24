// CODE here for your Lambda Classes
/*
Lambda personnel can be broken down into three different types of people.

    Instructors - extensions of Person
    Students - extensions of Person
    Project Managers - extensions of Instructors


*/

class Person {
    constructor(args) {
        const { name, age, location, gender } = args;
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
// test examples:
const joePerson = new Person({
    name: 'Joe',
    location: 'Earth',
    age: 152000,
    gender: 'universal',
});

const alicePerson = new Person({
    name: 'Alice',
    location: 'Earth',
    age: 2,
    gender: 'female',
});
// console.log(alicePerson.age);
// console.log(alicePerson.gender);
// console.log(joePerson.speak());


class Instructor extends Person {
    constructor(args) {
        super(args);
        const { specialty, favLanguage, catchPhrase } = args;
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`;
    }
    gradingAssignments(studentObj, result) {
        return result === true ? studentObj.grade += Math.random()*10 : studentObj.grade -= Math.random()*5;        
    }
}
// test examples:
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Don\'t forget the homies'
});

const suzy = new Instructor({
    name: 'Suzy',
    location: 'Mars',
    age: 37,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: 'Javaaaaa'
});
// console.log(fred.name);
// console.log(suzy.age);
// console.log(fred.location);
// console.log(fred.gender);
// console.log(suzy.speak());
// console.log(fred.specialty);
// console.log(suzy.favLanguage);
// console.log(fred.catchPhrase);
// console.log(suzy.demo('Javascript'));
// console.log(fred.grade('Pavol', 'Python'));


class Student extends Person {
    constructor(args) {
        super(args);
        const { previousBackground, className, favSubjects } = args;
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = 20;
    }

    listsSubjects() {
        return this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        return this.grade > 70 ? `HOOORAY! ${this.name} succesfully graduated Lambda School!` : `No worries ${this.name}, time to study some more!`
    }
}
// test examples:
const pavol = new Student({
    name: 'Pavol',
    location: 'Slovakia',
    age: 30,
    gender: 'male',
    previousBackground: 'Chemical engineering',
    className: 'WebEU1',
    favSubjects: ['Node', 'Express', 'Javascript']
});

const george = new Student({
    name: 'George',
    location: 'Georgia',
    age: 12,
    gender: 'male',
    previousBackground: 'Gambling',
    className: 'BTC-maximalist',
    favSubjects: ['BTC', 'FOMO', 'FUD'],
});
// console.log(pavol.className);
// console.log(george.previousBackground);
// console.log(pavol.location);
// console.log(pavol.gender);
// console.log(george.speak());
// console.log(pavol.listsSubjects(this.favSubjects));
// console.log(george.PRAssignment('Javascript'));
// console.log(pavol.sprintChallenge('Python'));


class ProjectManager extends Instructor {
    constructor(args) {
        super(args);
        const { gradClassName, favInstructor } = args;
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}.`;
    }
}
// test examples:
const dude = new ProjectManager({
    name: 'Johnie',
    location: 'Jamaica',
    age: 25,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: 'Hoooks',
    gradClassName: 'WEBEU1',
    favInstructor: 'Gabe',
});

const girl = new ProjectManager({
    name: 'Amy',
    location: 'Alaska',
    age: 19,
    gender: 'female',
    favLanguage: 'Chineese',
    specialty: 'Noodles',
    catchPhrase: 'Spice it up!',
    gradClassName: 'PT12',
    favInstructor: 'Gabe',
});
// console.log(dude.name);
// console.log(girl.age);
// console.log(dude.location);
// console.log(dude.gender);
// console.log(girl.speak());
// console.log(dude.specialty);
// console.log(girl.favLanguage);
// console.log(dude.catchPhrase);
// console.log(girl.demo('Javascript'));
// console.log(dude.grade('Pavol', 'Python'));
// console.log(girl.gradClassName);
// console.log(dude.favInstructor);
// console.log(girl.standUp('#webeu1'));
// console.log(dude.debugsCode(pavol, 'callbacks'));


const gradeStudentTillGraduation = (student, pm) => {
    while (student.grade < 70) {
        let passFail = true;
        Math.random() > 0.3 ? passFail = true : passFail = false;
        pm.gradingAssignments(student, passFail);        
        console.log(student.grade, student.graduate());
    }
}