// Declare and assign the variables below
let nameOfTheSpaceShuttle = 'determination'; 
let shuttleSpeed = 17500; 
let distanceToMars = 225000000; 
let distanceToTheMoon = 3844000; 
const milesPerKilometer = 0.621; 

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof 'determination')
console.log (typeof 17500)
console.log (typeof 225000000)
console.log (typeof 3844000)
console.log (typeof 0.621)

// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed; 
let daysToMars = hoursToMars / 24; 

// Print the results of the space mission calculations below
console.log (nameOfTheSpaceShuttle," will take ",daysToMars, " days to reach mars.");

// Calculate a trip to the moon below

let milesToMoon = distanceToTheMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed; 
let daysToMoon = hoursToMoon / 24; 

// Print the results of the trip to the moon below
console.log (nameOfTheSpaceShuttle," will take ",daysToMoon, " days to reach the moon.");
