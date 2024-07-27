let userStack = [];
let gameStack = [];
let started = false;
let LevelCount = 0;
let header2 = document.querySelector("#headder2");
let Color = ["orange", "blue", "red", "violet"];

// Function to flash the button for the game sequence
function flashButton(button) {
    button.classList.add("flash");
    gameStack.push(button.getAttribute("id"));
    console.log(`game stack ${gameStack}`);
    setTimeout(() => {
        button.classList.remove("flash");
    }, 400);
}

// Function to flash the button for the user interaction
function userflash(button) {
    button.classList.add("userflash");
    setTimeout(() => {
        button.classList.remove("userflash");
    }, 400);
}

// Function to handle button press events
function buttonPress() {
    if (started) {
        console.log("button pressed...");
        userflash(this);
        userStack.push(this.getAttribute("id"));
        console.log(`user stack ${userStack}`);
        if (Result()) {
            console.log("correct");
            if (userStack.length === gameStack.length) {
                setTimeout(levelUp, 1000);
            }
        } else {
            console.log("wrong");
            console.log(`game over.. Simon said ${gameStack[gameStack.length - 1]} you said ${userStack[gameStack.length - 1]}`);
            header2.innerText = "Game over. Press any key to start the game";
            userStack = [];
            gameStack = [];
            LevelCount = 0;
            started = false;
        }
    }
}

// Function to proceed to the next level
let levelUp = () => {
    header2.innerText = `Level ${++LevelCount}`;
    let index = Math.floor(Math.random() * 4);  // Fixed random index to include all colors
    let button1 = document.querySelector(`.${Color[index]}`);
    flashButton(button1);
    userStack = [];
}

// Attach click event listeners to all buttons
let allButtons = document.querySelectorAll(".btn");
for (let Btn of allButtons) {
    Btn.addEventListener("click", buttonPress);
}

// Function to check if the user's input matches the game's sequence
function Result() {
    return userStack[userStack.length - 1] === gameStack[userStack.length - 1];
}

// Event listener to start the game when the document is clicked
document.addEventListener("click", function () {
    if (!started) {
        console.log("game is on");
        started = true;
        setTimeout(levelUp, 1000);
    }
});
