let quiz_data = [
  {
    id: 1,
    category: "information technology",
    question: "What is the full form of HTML?",
    option1: "HyperText Markup Language",
    option2: "Home Tool Markup Language",
    option3: "Hyperlinks and Text Markup Language",
    option4: "Javascript",
    answer: "HyperText Markup Language",
  },
  {
    id: 2,
    category: "information technology",
    question: "Choose the correct HTML element for the largest heading:",
    option1: "head",
    option2: "heading",
    option3: "h6",
    option4: "h1",
    answer: "h1",
  },
  {
    id: 3,
    category: "information technology",
    question: "Choose the correct HTML element to define emphasized text:",
    option1: "i",
    option2: "italic",
    option3: "em",
    option4: "empy",
    answer: "em",
  },
  {
    id: 4,
    category: "information technology",
    question: "What is the correct HTML element for inserting a line break?",
    option1: "br",
    option2: "break",
    option3: "lb",
    option4: "BREAK",
    answer: "br",
  },
  {
    id: 5,
    category: "information technology",
    question: "Choose the correct HTML element to define important text:",
    option1: "strong",
    option2: "i",
    option3: "b",
    option4: "important",
    answer: "strong",
  },
  {
    id: 6,
    category: "entertainment",
    question: "Which one is the first Bollywood film of Sridevi",
    option1: "julie",
    option2: "himmatwala",
    option3: "solva sawan",
    option4: "english vinglish",
    answer: "solva sawan",
  },
  {
    id: 7,
    category: "entertainment",
    question: "Who is the famous author of the Harry Potter book series?",
    option1: "George R. R. Martin",
    option2: "N. K. Jemisin",
    option3: "J. R. R. Tolkien",
    option4: "J. K. Rowling",
    answer: "J. K. Rowling",
  },
  {
    id: 8,
    category: "general knowledge",
    question:
      "Which was the 1st non Test playing country to beat India in an international match?",
    option1: "canada",
    option2: "sri lanka",
    option3: "zimbabwe",
    option4: "east africa",
    answer: "sri lanka",
  },
  {
    id: 9,
    category: "general knowledge",
    question:
      "Who is the first Indian woman to win an Asian Games gold in 400m run?",
    option1: "M.L.Valsamma",
    option2: "P.T.Usha",
    option3: "K.Malleshwari",
    option4: "Kamaljit Sandhu",
    answer: "Kamaljit Sandhu",
  },
  {
    id: 10,
    category: "general knowledge",
    question:
      "In which year did Milkha Singh win the first National title in the 400 m race?",
    option1: "1955",
    option2: "1956",
    option3: "1957",
    option4: "1970",
    answer: "1957",
  },
  {
    id: 11,
    category: "general knowledge",
    question: "The Indian to beat the computers in mathematical wizardry is",
    option1: "Ramanujam",
    option2: "Rina Panigrahi",
    option3: "Raja Ramanna",
    option4: "Shakunthala Devi",
    answer: "Shakunthala Devi",
  },
  {
    id: 12,
    category: "general knowledge",
    question: "Which city is known as 'Electronic City of India'?",
    option1: "mumbai",
    option2: "hyderabad",
    option3: "gurgaon",
    option4: "bangalore",
    answer: "bangalore",
  },
  {
    id: 13,
    category: "entertainment",
    question: "Madhuri Dixit's name in N Chandra's 'Tezaab' was...?",
    option1: "mohini",
    option2: "rohini",
    option3: "sunandha",
    option4: "radha",
    answer: "mohini",
  },
  {
    id: 14,
    category: "entertainment",
    question: "Aishwarya Rai was crowned Miss World in which year?",
    option1: "1994",
    option2: "1995",
    option3: "1993",
    option4: "1996",
    answer: "1994",
  },
  {
    id: 15,
    category: "entertainment",
    question: " Lata Mangeshkar awarded with Bharat Ratna in the year",
    option1: "1998",
    option2: "2000",
    option3: "2001",
    option4: "2004",
    answer: "2001",
  },
  {
    id: 16,
    category: "entertainment",
    question: " Doordarshan founded in India in the year",
    option1: "1962",
    option2: "1965",
    option3: "1952",
    option4: "1959",
    answer: "1959",
  },
];

// let nextBtn = document.querySelector(".next-question");
// let scoreContainer = document.querySelector(".score-container");
// let questionNumber = document.querySelector("#question-number");
// let totalQuestion = document.querySelector("#total-question");
let playerName;
let nextSlide = document.querySelector(".next");
let quizCategory = document.querySelector(".quiz-category");
let selectQuizCategory = document.querySelectorAll(
  ".quiz-category-container li"
);

let quizContainer = document.querySelector(".quiz-container");

let question = document.querySelector(".question");
let option = document.querySelectorAll(".option");

let nextQuestion = document.querySelector(".next-question");

let quizQuestionByCategory = [];
let count = 0;
let rightAnswer = 0;
let skipQuestions = 0;

let scoreContainer = document.querySelector(".score-container");
let score = document.querySelector(".score");

nextSlide.addEventListener("click", function () {
  if (document.querySelector(".enter-your-name input").value != "") {
    playerName = document.querySelector(".enter-your-name input").value;
    document.querySelector(".enter-your-name").style.display = "none";
    quizCategory.style.display = "block";
  } else {
    document.querySelector(".enter-your-name input").focus();
  }
});

selectQuizCategory.forEach((category) => {
  category.addEventListener("click", function (e) {
    for (i = 0; i < quiz_data.length; i++) {
      if (this.textContent == quiz_data[i].category) {
        quizQuestionByCategory.push(quiz_data[i]);
      }
    }
    document.getElementById("category-name").textContent = this.textContent;
    quizCategory.style.display = "none";
    quizContainer.style.display = "block";
    document.getElementById("total-question").textContent =
      quizQuestionByCategory.length;

    startQuiz();
  });
});

function startQuiz() {
  question.textContent =
    count + 1 + "." + " " + quizQuestionByCategory[count].question;
  option.forEach((option) => {
    if (option.classList.contains("option-1")) {
      option.textContent = quizQuestionByCategory[count].option1;
    } else if (option.classList.contains("option-2")) {
      option.textContent = quizQuestionByCategory[count].option2;
    } else if (option.classList.contains("option-3")) {
      option.textContent = quizQuestionByCategory[count].option3;
    } else if (option.classList.contains("option-4")) {
      option.textContent = quizQuestionByCategory[count].option4;
    }
  });
  document.getElementById("question-number").textContent = count + 1;
}

function selectOption() {
  option.forEach((opt) => {
    opt.addEventListener("click", function () {
      option.forEach((options) => {
        options.classList.remove("active");
        opt.classList.add("active");
      });
    });
  });
}

selectOption();

function checkAnswer() {
  option.forEach((option) => {
    if (
      option.classList.contains("active") &&
      option.textContent == quizQuestionByCategory[count].answer
    ) {
      rightAnswer++;
      option.classList.remove("active");
    } else if (
      option.classList.contains("active") &&
      option.textContent != quizQuestionByCategory[count].answer
    ) {
      option.classList.remove("active");
    } else {
      skipQuestions++;
    }
  });
  skipQuestions -= 3;
}

function moveToNextQuestion() {
  if (count >= quizQuestionByCategory.length - 1) {
    checkAnswer();
    scoreContainer.style.display = "block";
    if (rightAnswer == 0 && skipQuestions == 0) {
      scoreContainer.innerHTML = `
    <div class="score">
    <h2>${playerName} your all answers are wrong.</h2>
    <button onclick="playAgain()">Play Again</button>
    </div>
    `;
    } else if (rightAnswer == 0 && skipQuestions > 0) {
      scoreContainer.innerHTML = `
    <div class="score">
    <h2>${playerName} your ${rightAnswer} Answers are right out of ${quizQuestionByCategory.length} and you skip ${skipQuestions} question</h2>
    <button onclick="playAgain()">Play Again</button>
    </div>
    `;
    } else if (rightAnswer == 1) {
      scoreContainer.innerHTML = `
    <div class="score">
    <h2>${playerName} your ${rightAnswer} Answer is right out of ${quizQuestionByCategory.length} and you skip ${skipQuestions} question</h2>
    <button onclick="playAgain()">Play Again</button>
    </div>
    `;
    } else if (rightAnswer > 1) {
      scoreContainer.innerHTML = `
    <div class="score">
    <h2>${playerName} your ${rightAnswer} Answers are right out of ${quizQuestionByCategory.length} and you skip ${skipQuestions} question</h2>
    <button onclick="playAgain()">Play Again</button>
    </div>
    `;
    }
  } else {
    checkAnswer();
    count++;
    startQuiz();
  }
}

nextQuestion.addEventListener("click", moveToNextQuestion);

function playAgain() {
  location.reload();
}
