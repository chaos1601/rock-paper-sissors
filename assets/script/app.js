'use strict';

const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
  const computer = computerChoice();

  if (playerChoice === computer) {
    result.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "paper" && computer === "rock") ||
    (playerChoice === "scissors" && computer === "paper")
  ) {
    result.textContent = `You win! Computer chose ${computer}.`;
  } else {
    result.textContent = `Computer wins! Computer chose ${computer}.`;
  }
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));