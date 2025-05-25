const Person = require('./Person');
const Teacher = require('./Teacher');
const Student = require('./Student');

const p = new Person('Hasan Habib','hasan@gmail.com');
const t = new Teacher('Mofazzol Hossain','mfzhossain@gmail.com','Computer Science', 40000);
const s = new Student(['Computer 101','Physics 101','Math'], 400000);

console.log(p);
console.log(t);
console.log(s);