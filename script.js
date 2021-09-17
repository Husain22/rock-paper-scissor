const userChoices = Array.from(document.querySelectorAll(".choices button"))
const userScore = document.querySelector(".human-result .score")
const userOption = document.querySelector("#user-option")
const computerScore = document.querySelector(".computer-result .score")
const computerOption = document.querySelector("#computer-option")
const msg = document.querySelector(".msg")
let cs = 0
let hs = 0

userChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const chosen = choice.innerText
    if (chosen === "Paper") {
      userOption.innerText = "🖐️"
    }

    if (chosen === "Scissor") {
      userOption.innerText = "✌️"
    }

    if (chosen === "Rock") {
      userOption.innerText = "✊"
    }
    play(chosen)
  })
})

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"]
  const random = Math.floor(Math.random() * 3)
  if (choices[random] === "Paper") {
    computerOption.innerText = "🖐️"
  }

  if (choices[random] === "Scissors") {
    computerOption.innerText = "✌️"
  }

  if (choices[random] === "Rock") {
    computerOption.innerText = "✊"
  }
  return choices[random]
}

function play(chosen) {
  const cChoice = computerChoice()
  if (chosen === "Paper" && cChoice === "Scissors") {
    cs++
    computerScore.innerText = cs
    msg.innerText = "You lost 😭"
    msg.style.opacity = "1"
  } else if (chosen === "Rock" && cChoice === "Scissors") {
    hs++
    userScore.innerText = hs
    msg.innerText = "You Win 😀"
    msg.style.opacity = "1"
  } else if (chosen === "Rock" && cChoice === "Paper") {
    cs++
    computerScore.innerText = cs
    msg.innerText = "You lost 😭"
    msg.style.opacity = "1"
  } else if (chosen === "Scissor" && cChoice === "Paper") {
    hs++
    userScore.innerText = hs
    msg.innerText = "You Win 😀"
    msg.style.opacity = "1"
  } else if (chosen === "Scissor" && cChoice === "Rock") {
    cs++
    computerScore.innerText = cs
    msg.innerText = "You lost 😭"
    msg.style.opacity = "1"
  } else if (chosen === "Paper" && cChoice === "Rock") {
    hs++
    userScore.innerText = hs
    msg.innerText = "You Win 😀"
    msg.style.opacity = "1"
  } else {
    msg.innerText = "It's a tie 🤝"
    msg.style.opacity = "1"
  }
}
