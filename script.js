const questions = {
  Maths: [
    { q: "What is the value of (a+b)^2?", options: ["a^2+b^2", "a^2+2ab+b^2", "a^2-ab+b^2"], answer: "a^2+2ab+b^2" },
    { q: "The sum of angles of a triangle is?", options: ["90°", "180°", "360°"], answer: "180°" }
  ],
  Science: [
    { q: "Which gas is released during photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], answer: "Oxygen" },
    { q: "What is the SI unit of force?", options: ["Newton", "Joule", "Pascal"], answer: "Newton" }
  ],
  SocialScience: [
    { q: "Who wrote the book 'Discovery of India'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar"], answer: "Jawaharlal Nehru" },
    { q: "Which is the longest river in India?", options: ["Ganga", "Yamuna", "Brahmaputra"], answer: "Ganga" }
  ],
  English: [
    { q: "Identify the verb in: 'She runs fast.'", options: ["She", "runs", "fast"], answer: "runs" },
    { q: "Synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry"], answer: "Joyful" }
  ],
  Hindi: [
    { q: "‘भारत का संविधान’ किसने लिखा?", options: ["महात्मा गांधी", "डॉ. भीमराव अंबेडकर", "जवाहरलाल नेहरू"], answer: "डॉ. भीमराव अंबेडकर" },
    { q: "‘गोदान’ उपन्यास के लेखक कौन हैं?", options: ["मुंशी प्रेमचंद", "रामधारी सिंह दिनकर", "सूरदास"], answer: "मुंशी प्रेमचंद" }
  ]
};

let currentQuestion = 0;
let subject = new URLSearchParams(window.location.search).get("subject");
let quizBox = document.getElementById("quiz-container");
let quizTitle = document.getElementById("quiz-title");

if (subject && questions[subject]) {
  quizTitle.innerText = subject + " Quiz";
  loadQuestion();
}

function loadQuestion() {
  let q = questions[subject][currentQuestion];
  quizBox.innerHTML = `
    <p>${q.q}</p>
    ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("")}
  `;
}

function checkAnswer(selected) {
  let correct = questions[subject][currentQuestion].answer;
  alert(selected === correct ? "✅ Correct!" : "❌ Wrong!");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions[subject].length) {
    loadQuestion();
  } else {
    quizBox.innerHTML = "<p>🎉 Quiz Completed! Well done.</p>";
  }
}