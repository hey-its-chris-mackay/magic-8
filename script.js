const answers = [
  "That's not in scope.",
  "Let me check with the backend team.",
  "We’ll need to create a Jira ticket for that.",
  "That’s a feature, not a bug.",
  "It works on my machine.",
  "We can’t do that... yet.",
  "That’ll be in phase two.",
  "You're asking for AI with a to-do list UI.",
  "We need more budget for that.",
  "I’ll need at least 3 weeks and a miracle.",
  "Can’t reproduce. Closing ticket.",
  "Sounds like a product decision.",
  "We’ll need to refactor everything first.",
  "Let’s circle back on that.",
  "Sure, if we remove authentication and tests.",
  "Technically possible. Practically... no.",
  "Only if we ignore all best practices.",
  "Have you tried turning it off and on again?",
  "We’ll need a plugin... from 2008.",
  "Yes, but it’ll break everything else."
];

const ball = document.getElementById("ball");
const answer = document.getElementById("answer");
const button = document.getElementById("askBtn");

function shakeBall() {
  ball.classList.add("shake");

  setTimeout(() => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answer.textContent = randomAnswer;
    ball.classList.remove("shake");
  }, 500);
}

ball.addEventListener("click", shakeBall);
button.addEventListener("click", shakeBall);
