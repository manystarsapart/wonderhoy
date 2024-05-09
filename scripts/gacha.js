var inventory = [];
const gachapool = ["cat","dog","sheep","bird","hamster","guinea pig","snake","gecko","chinchilla","rabbit","fish","turtle"];
var gachaLen = gachapool.length;
const limited = "qi";
const standard = "aidan";
var pulledCount = {};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gachaPull() {
    // 1% chance of getting limited
    if (getRndInteger(1,100) === 100) {
        gachaResult = limited;
        console.log("You pulled a qi!")
    }
    // else gacha result is a common pull
    else {
        gachaResult = gachapool[getRndInteger(0, gachaLen - 1)];
    }
    inventory.push(gachaResult);
}

function clearInventory() {
    inventory = [];
}

function pullForAmount(pullAmount) {
    for (let i = 0; i < pullAmount; i++) {
    gachaPull();
    }
    console.log("You pulled " + pullAmount + " times.")
    
}

function viewGachaStats() {
    inventory.forEach(element => {
        pulledCount[element] = (pulledCount[element] || 0) + 1;
    });
    console.log(pulledCount);
    pulledCount = {};
    console.log("total pulls: " + inventory.length);
    
}

// from here onwards: prompting in node.js environment
const readline = require('readline');

// Create an instance of readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question('how many times do you want to pull? ', (answer) => {
    pullForAmount(answer);
    viewGachaStats();
    rl.close(); // Close the readline interface
});



// todo: 50/50

// todo 2: currently the final inventory array is sorted in the way that the animal is
// first acquired. 