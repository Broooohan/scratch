var player1 = prompt("Name of player 1");
var player2 = prompt("Name of player 2");

var ran_num1 = Math.floor( Math.random() * 6 ) + 1;
var ran_num2 = Math.floor( Math.random() * 6 ) + 1;

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

var new1_dice = "dice" + ran_num1 + ".png";
var new2_dice = "dice" + ran_num2 + ".png";

document.querySelector(".dice img").setAttribute("src", new1_dice);
document.querySelectorAll(".dice img")[1].setAttribute("src", new2_dice);

var win;

if (ran_num1 > ran_num2) {
    document.querySelector("h1#result").textContent = player1 + " wins";
}
else if (ran_num1 < ran_num2) {
    document.querySelector("h1#result").textContent = player2 + " wins";
}
else if (ran_num1 === ran_num2) {
    document.querySelector("h1#result").textContent = "Draw";
}
