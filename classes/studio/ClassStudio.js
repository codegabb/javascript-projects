const { createRequire } = require("module");

//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, score){
        this.name= name,
        this.mass = mass,
        this.score=score;
    }
    addScore(newScore){
        this.score.push(newScore);
    }
    average(){
        let total = 0
        for(let i = 0; i<this.score.length; i++){
            total+=this.score[i];
        }

        let avg = total / this.scores.length;
        return avg
    }
    status(average){

        if(average>=90){
            return "accepted";
        } else if (average>=80){
            return "reserved";
        } else if (average>=70){
            return "probationary";
        } else {
            return "rejection";
        }
    }
}


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
let bubbaBear = new CrewCandidate("Buuba Bear, 135, [88,85,90]");
let mMaltese = new CrewCandidate("Meery Maltese", 1.5, [93,88,97]);
let gGator = new CrewCandidate("Glad Gator", 225, [75,78,62]);
// console.log(gGator);
bubbaBear.addScore(83);
console.log(bubbaBear.score)
;


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.