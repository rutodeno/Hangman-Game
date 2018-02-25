
// pseudo code 
// document.onkeyup





// wait until everything is setup

// user clicks a letter

// code checks if letter is in the word
    // if it is, update it
    // if its not, lower the number of guesses

// when user guesses all the letters of the word, generate an new number

// how to we make objects out of this ?

//  whats our theme ? 2018 NBA allstars ...  like durant, lebron, curry, harden, have a song too .. 


// global variable
var wins = 0;
var guessleft = 0;
var lettersGuessed = []; 
var userGuess;

// player selection
var playerSelect = ["durant", "lebron", "kyrie", "curry", "embiid"];
var selection =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];


// randomly select the players
var randomSelect = playerSelect[Math.floor(Math.random()*playerSelect.length)];

var isFound = false;

// user selection 

document.onkeyup = function (event) {

    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //userGuess = event.key;

    console.log(userGuess +" user guess");

    
    for (var i = 0; i < selection.length; i++){
       
       if(userGuess === selection[i] ) {
           isFound = true;
        console.log('break')
          break;

       } else{
           isFound=false;
       }
   }

    console.log(isFound +" isFound!!");
  

   

//    console.log(randomSelect);

//    randomSelect.split

//    for(var j =0; j < randomSelect.length; j++){

//     if (userGuess === randomSelect[j]){

//         console.log("pickedgood");
//     } else {
//         console.log ("wrongpick");
//     }

//    }
//    // game picks a word 
//    // if the letter we clicked is wrong ... lower the attempts

 
};








///