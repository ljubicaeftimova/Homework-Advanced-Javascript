//Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has

function digit(x) {
    let counter = 0;
    while (x > 0) {
        x = parseInt(x / 10);
        counter = counter + 1;
    }
    console.log(counter);
}

// digit(50505055566);

// 2. Function that takes a number through a parameter and returns if its even or odd

function oddOrEven(n) {
    if (n % 2 == 0) {
        console.log("The number is even");
    }

    else {
        console.log("The number is odd");
    }
}

// oddOrEven(10);
// oddOrEven(111);

// 3. Function that takes a number through a parameter and returns if its positive or negative

function positiveOrNegative(n) {
    if (n > 0) {
        console.log("positive")
    }
    else if (n < 0) {
        console.log("negative")
    }
    else {
        console.log("0")
    }
}

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
function callFunction(y) {
    digit(y);
    oddOrEven(y);
    positiveOrNegative(y);
}

callFunction(5);

// It should show the results in the console.




//1. First arrow function will accept two parameters, one for element and one for color.
//The function should change the given element text color with the color given from the  second color parameter.If no parameter is passed for color, the default value is *black*.


let colorChange = (element, colorInput) => {
    if (colorInput !== "") {
        element.style.color = `${colorInput}`;
    }
    else {
        element.style.color = "black";
    }
}


// 2. Second arrow function will accept two parameters, one for element and one for textSize.
// The function should change the given element text size to the number given from the second  textSize parameter.
// If no parameter is passed for textSize, the default value is 24.



let fontSizeChange = (element, fontSize) => {
    if (fontSize !== "") {
        element.style.fontSize = `${fontSize}px`;
    }
    else {
        element.style.fontSize = "25px";
    }
}

//Create an HTML document with two inputs, a button and an h1 header with some text.
// The first input should be for text size and the second for color.When the button is clicked the h1 header should change according to the input values 
// ( change size as the first input value and color as the second input value ).
// Use the functions that we declared earlier and use arrow function for the event listener of the button.

let button = document.getElementById("submitBtn");
let colorUser = document.getElementById("colorInput");
let fontUser = document.getElementById("fontSize");
let headerText = document.getElementById("header");

button.addEventListener("click", () => {
    colorChange(headerText, colorUser.value);
    fontSizeChange(headerText, fontUser.value);
    colorUser.value="";
    fontUser.value="";
}
)