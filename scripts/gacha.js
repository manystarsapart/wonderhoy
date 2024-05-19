var inventory = [];
const gachapool = ["cat","dog","sheep","bird","hamster","guinea pig","snake","gecko","chinchilla","rabbit","fish","turtle"];
var gachaLen = gachapool.length;
const limited = "qi";
const trueLimited = "weiyi";
// const truestLimited = "skibidirizzler";
var pulledCount = {};
var pity = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gachaPull() {
    // checking for true limited
    if (getRndInteger(1,1000000) === 1000000) {
        gachaResult = trueLimited;
        console.log("YOU PULLED WEIYI WOAHHHHHHHHHHHH \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n ");
    }
    // max pity
    else if (pity === 70) {
        console.log("You pulled a qi from max pity!");
        gachaResult = limited;
        pity = 0;
    }
    // soft pity
    else if (pity > 59 && getRndInteger(1,5) === 5) {
        pity += 1;
        console.log("You pulled a qi from soft pity at " + String(pity) + " pity!")
        gachaResult = limited;
        pity = 0;
    }
    // normal qi pull
    else if (getRndInteger(1,100) > 99) {
        gachaResult = limited;
        pity += 1;
        console.log("You pulled a qi at " + String(pity) + " pity!");
        pity = 0;
    }
    // else gacha result is a common pull
    else {
        gachaResult = gachapool[getRndInteger(0, gachaLen - 1)];
        pity += 1;
    }
    inventory.push(gachaResult);
}

function clearInventory() {
    inventory = [];
    pity = 0;
}

function pullForAmount(pullAmount) {
    for (let i = 0; i < pullAmount; i++) {
    gachaPull();
    }
    console.log("You pulled " + pullAmount + " times.");
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


function askForPull() {
    rl.question('how many times do you want to pull? (type "exit" to exit) \n', (answer) => {
        if (answer == "exit") {
            rl.close();
        } else {
            pullForAmount(answer);
            viewGachaStats();
            askForPull();
        }
    });
}

askForPull();

// todo: 50/50

// todo 2: currently the final inventory array is sorted in the way that the animal is
// first acquired. 

