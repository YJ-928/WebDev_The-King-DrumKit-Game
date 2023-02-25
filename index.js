// Start of the JS code 

// variable to get total number of drum buttons 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop for changing the 'i' Value, ie responsible for selecting all the avaliable buttons using below code.
for (var i = 0; i < numberOfDrumButtons; i++) { 

// This code selects all the buttons, whenever user clicks on them, it detects and calls our function.
// Note: here the function is created is an Anonyms function and is the general and best way to do it.


// Detecting Click & Linking the Clicks to Resp. Drum sounds
document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
    //   What do to when clicked detected

    // To detect and store the button pressed in the variable buttonInnerHTML 
    var clickedButton = this.innerHTML;

    // Calling our buttonSound function here: 
    buttonSound(clickedButton);

    // Calling our buttonAnimation function here: 
    buttonAnimation(clickedButton);
    
});

}


// Detecting Keyboard Key Press & Linking the Key press to Resp. Drum sounds 
document.addEventListener("keydown", function(keyPressed) {
    
    // Calling makeSound function & Linking it with above detected Key Presses 
    buttonSound(keyPressed.key);

    // Calling our buttonAnimation function here: 
    buttonAnimation(keyPressed.key);
});


// Creating a New Common Function to Link our Keys to respective Drum-Sounds 
function buttonSound(key) {

    switch (key) { 
        // When Key = 'W' is pressed: 
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        // When Key = 'A' is pressed: 
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        // When Key = 'S' is pressed: 
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        // When Key = 'D' is pressed: 
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        // When Key = 'J' is pressed: 
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        // When Key = 'K' is pressed: 
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        // When Key = 'L' is pressed: 
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

        // default case 
        default: console.log(buttonInnerHTML);
    } 
}

// Creating a New function to Generate Animation on Response. Button Clicked / Pressed on KeyBoard 

function buttonAnimation(currentKey) {

    // var to detect and get the activeButton in the form === ".w or .a so on.." 
    var activeButton = document.querySelector("." + currentKey);

    // Adding the attribute of Class .pressed to our activeButton when key is pressed 
    activeButton.classList.add("pressed");

    // Removing the attribute of Class .pressed to our activeButton when key is pressed 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}