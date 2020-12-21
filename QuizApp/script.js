const quizData = [{
    question: 'Что такое Samehada?',
    a: 'Большой посох',
    b: 'Разговаривающая шляпа',
    c: 'Мистический мечь',
    d: "Отец наруто",
    correct: 'c'
  }, {
    question: "Как зовут маму Наруто?",
    a: 'Kushina',
    b: "Kurama",
    c: 'Haruno',
    d: "Cacol",
    correct: 'a',
  }, {
    question: 'Сколько хвостов у хвостатого Курамы?',
    a: "3",
    b: "7",
    c: '9',
    d: 'Зависит от настроения',
    correct: 'c',
  },
  {
    question: "Какой самый популярный опенинг Наруто?",
    a: "Blood Circulator (19 opening)",
    b: "Silhouette (16 opening)",
    c: "Sign (6 opening)",
    d: "Hero's come back (7 opening)",
    correct: "b"
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const result = document.createElement('div');
const reset = document.createElement('button');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deletectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll('.answer');

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deletectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Ты ответил(ла) правильно на ${score}/${quizData.length} вопросов`;
      reset.innerText = `Пройти заново`;
      reset.classList.add('reset__styles');
      result.innerText = `Общий рельльтат - ${score / quizData.length * 100}%`;
      result.classList.add('result__styles');
      quiz.prepend(reset);
      quiz.append(result);
    }
  }
});

reset.addEventListener('click', () => {

  loadQuiz();
});