const quizData = [
    {
        question: 'What is the best programming Language',
        a: 'HTML',
        b: 'CSS',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'HTML means',
        a: 'Hypertext Manage Language',
        b: 'Cascading style sheet',
        c: 'Hypertext Markup Language',
        d: 'Javascript',
        correct: 'c'
    },{
        question: 'Who is the US President',
        a: 'Donald Trump',
        b: 'Biden',
        c: 'Kamala Harris',
        d: 'Lincoln',
        correct: 'b'
    },{
        question: 'When did Javascript start',
        a: '1997',
        b: '1995',
        c: '2000',
        d: 'none',
        correct: 'b'
    },{
        question: 'What is the age of Biden',
        a: '70',
        b: '76',
        c: '80',
        d: '78',
        correct: 'c'
    }
]
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselected();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;  
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }        
    });
    return answer;
}

function deselected() {
    answerEls.forEach((answerEl) => {
         answerEl.checked = false;  
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else { 
            quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>
            <button onclick= "location.reload()">Reload</button>`
        }
    }

    
}) 