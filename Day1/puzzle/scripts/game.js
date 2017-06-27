var passcode= ~~(Math.random()*1000);
var tries = 10;
{
    console.log("You have " +tries+ " guesses left.");
    tries = tries - 1;
    console.log("Guess a number between 0 and 999");
    var guess = prompt("Enter a number between (0-999)");
    tries = tries-1;
    if (guess == passcode)
    {
     console.log("you win");
     alert("You Win!!");
    }
    else if (tries <= 0)
    {
        console.log("you lose");
        alert("You Lose... You suck at this game. ");
    }
    else {
        giveClue();
    }
}

function giveClue()
{
    if(guess > passcode)
    {
        console.log("Guess is too high, try again.");
    }
    else
    {
        console.log("Guess is too low, try again.");
    }
    
}








