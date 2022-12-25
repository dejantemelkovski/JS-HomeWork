let dogAge = prompt("Convert dogs years to human years. Enter your dog age:");
let humanAge = prompt("Convert humans years to dogs years. Enter your age:");
let input = 7
function calculateDogAge(humanAge, input) {
    let dogAge = humanAge * input;
    console.log(`Your dogs years is ${dogAge} years`);
}

function calculateHumanAge(dogAge, input) {
    let humanAge = dogAge/input
    console.log(`Your human years is ${humanAge} years`);
}


    
calculateDogAge(humanAge, 7) 
calculateHumanAge(dogAge, 7)   



