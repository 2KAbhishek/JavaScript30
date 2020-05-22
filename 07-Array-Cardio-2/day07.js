// ## Array Cardio Day 2
const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

console.table(people);

// Some and Every Checks
const anyAdult = people.some(
    (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ anyAdult });

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(
    (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ allAdults });

const childIndex = people.findIndex(
    (person) => new Date().getFullYear() - person.year <= 19
);
people.splice(childIndex, 1);

console.table(people);

// Array.prototype.find()
console.table(comments);
const comment = comments.find((comment) => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
const commentIndex = comments.findIndex((comment) => comment.id === 823423);
console.log({ commentIndex });
comments.splice(commentIndex, 1);
console.table(comments);
