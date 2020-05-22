const dogs = [
    { name: "Doug", age: 2 },
    { name: "Hugo", age: 8 },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.innerHTML = "I'm Fixed Now!";
}

// Interpolated
console.log("I am a %s stirng", "💩");

// Styled
console.log("%cI am a stylish string", "font-size:30px; background:#2040ee");

// warning!
console.warn("Warning!");

// Error :|
console.error("Error!");

// Info
console.info("Info!");

// Testing
console.assert(1 > 2, "That is wrong");

// Clear
// console.clear();

// Viewing DOM Elements
p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// Counting
console.count("Dog");
console.count("Dog");
console.count("Cat");
console.count("Cat");
console.count("Dog");
console.count("Dog");

// Timing
console.time("Fetching data...");
fetch("https://api.github.com/users/2kabhishek")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("Fetching data...");
        console.table(data);
    });
