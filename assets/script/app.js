'use strict';

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");


const choices = ["rock", "paper", "scissors"];

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

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));