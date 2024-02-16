// let names = ["Lena", "James", "Julio"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// function printArray(names) { //function name = print names; paramaters= names
//     for (let i = 0; i < names.length; i++) { //body
//         console.log(names[i]); //body
//     }
// }

// printArray(["Lena", "James", "Julio"]);
// console.log("---")
// printArray(["Orange","apple","pear"]);

// function sayHello() {
//     console.log("Hello, World!");
// }

// sayHello("" + "85")

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumToN(5));

// function countToN(n) {
//     let count = 1;
//     while (true) {
//         if (count > n) {
//             return;
//         }
//         console.log(count);
//         count++;
//     }
// }

// function plusTwo(num) {
//     return num + 2;
// }

// let a = 2;

// for (let i=0; i < 4; i++) {
//     a = plusTwo(a);
// }

// console.log(a);

// let num = 42;

// function isEven (num) {
//    return num % 2 === 0;
// }

// console.log(isEven(43));


// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }

// printMessage();
// message = "Goodbye";
// printMessage();

// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);