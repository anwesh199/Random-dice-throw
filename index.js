var randomNUmber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "dice" + randomNUmber1 + ".png";
var randomImageSource = "images/" +randomDiceImage;//Images/dice1.png - images/dice6.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player1 wins
if (randomNUmber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins !";
}
else if(randomNumber2>randomNUmber1){
    document.querySelector("h1").innerHTML="Player 2 Wins !🚩";
}
else{
    document.querySelector("h1").innerHTML= "Draw !";
}