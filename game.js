const LetterGuess = ["a", 
"b", 
"c", 
"d", 
"e", 
"f",
 "g", 
 "h", 
 "i", 
 "j", 
 "k", 
 "l", 
 "m", 
 "n", 
 "o", 
 "p", 
 "q", 
 "r", 
 "s", 
 "t", 
 "u",
  "v", 
  "w", 
  "x", 
  "y", 
  "z"]

  let RandomLetter = LetterGuess[Math.floor(Math.random()*LetterGuess.length)];
  console.log(RandomLetter);
  let Wins = 0
  let Losses = 0
  let GuessLeft = 5

  //When a user presses a key, it will run the following function
  document.onkeypress = function(event) {
    let UserGuess = event.key;

    if (UserGuess === RandomLetter){
      Wins++ ;
      alert("That's correct!");
       document.getElementById("wins-total").innerHTML
    }else GuessLeft--;
    if (GuessLeft === 0){
      Losses++;
      alert("Try again!");
      document.getElementById("losses-total").innerHTML
    } 
    }

    console.log(Wins)
    
  
  