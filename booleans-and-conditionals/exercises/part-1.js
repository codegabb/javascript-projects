let engineIndicatorLight = "red blinking"; 
let spaceSuitsOn = true; 
let shuttleCabinReady = true; 
let crewStatus = spaceSuitsOn && shuttleCabinReady; 
let computerStatusCode = 200; 
let shuttleSpeed = 15000; 

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!"); 
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!"); 
} else {
    console.log("Stable speed"); 
}