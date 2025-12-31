// Questions Database
const questions = {
    reasoning: [
        {
            question: "If all A are B, all B are C, and some C are D, which statement must be true?",
            options: ["All A are D", "Some A are D", "All D are A", "None of these must be true"],
            correct: 3
        },
        {
            question: "In a certain code, GREAT is written as 97512. What would TIGER be written as?",
            options: ["28597", "52897", "58927", "29857"],
            correct: 1
        },
        {
            question: "If the day before yesterday was Thursday, what day will be the day after tomorrow?",
            options: ["Monday", "Tuesday", "Wednesday", "Sunday"],
            correct: 0
        },
        {
            question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
            options: ["0°", "7.5°", "15°", "22.5°"],
            correct: 1
        },
        {
            question: "If PAINT is coded as 74128 and EXCEL is coded as 93596, how is ACCEPT coded?",
            options: ["455978", "466978", "755948", "Cannot determine"],
            correct: 3
        },
        {
            question: "Five friends are sitting in a row. A is to the left of B but right of C. D is to the right of B but left of E. Who is in the middle?",
            options: ["A", "B", "C", "D"],
            correct: 1
        },
        {
            question: "Find the next number: 2, 6, 12, 20, 30, ?",
            options: ["40", "42", "44", "46"],
            correct: 1
        },
        {
            question: "If some Zips are Zaps, and all Zaps are Zops, which conclusion is valid?",
            options: ["All Zips are Zops", "Some Zips are Zops", "No Zips are Zops", "Cannot determine"],
            correct: 3
        },
        {
            question: "A father is 3 times as old as his son. In 15 years, he will be twice as old. How old is the son now?",
            options: ["10", "15", "20", "25"],
            correct: 1
        },
        {
            question: "What comes next in the sequence: J, F, M, A, M, J, ?",
            options: ["J", "A", "S", "O"],
            correct: 0
        },
        {
            question: "Find the missing number: 3, 7, 15, 31, 63, ?",
            options: ["127", "125", "128", "126"],
            correct: 0
        },
        {
            question: "Which number does NOT belong: 2, 5, 10, 17, 26, 37, 49",
            options: ["10", "17", "26", "49"],
            correct: 3
        },
        {
            question: "If LOGIC = 12, BRAIN = 10, what is THINK?",
            options: ["10", "11", "12", "13"],
            correct: 0
        },
        {
            question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
            options: ["Grandmother", "Granddaughter", "Daughter", "Great-granddaughter"],
            correct: 3
        },
        {
            question: "Complete: AZ, BY, CX, DW, ?",
            options: ["EV", "EW", "FV", "FW"],
            correct: 0
        },
        {
            question: "In a family of 6, M is the son of Q, but Q is not the mother of M. E is the daughter of Q. F is the spouse of Q. G is the brother of M. H is the son of F. How many children does Q have?",
            options: ["2", "3", "4", "Cannot determine"],
            correct: 1
        },
        {
            question: "If 'PEN' is coded as 35 and 'PENCIL' is coded as 62, what is 'PAPER' coded as?",
            options: ["50", "52", "54", "56"],
            correct: 1
        },
        {
            question: "Find the wrong number: 7, 14, 21, 35, 49, 63",
            options: ["14", "21", "35", "49"],
            correct: 2
        },
        {
            question: "If North becomes South-West, South becomes ?, East becomes North-West, what does West become?",
            options: ["North-East", "South-East", "North", "South"],
            correct: 1
        },
        {
            question: "Complete the series: 1, 4, 9, 16, 25, 36, ?, 64",
            options: ["42", "45", "49", "52"],
            correct: 2
        }
    ],
    arithmetic: [
        {
            question: "What is 127 × 8?",
            options: ["1016", "1024", "1032", "1008"],
            correct: 0
        },
        {
            question: "What is 2304 ÷ 48?",
            options: ["46", "48", "50", "52"],
            correct: 1
        },
        {
            question: "What is 17² - 13²?",
            options: ["100", "110", "120", "130"],
            correct: 2
        },
        {
            question: "What is 456 + 789 - 234?",
            options: ["1001", "1011", "1021", "1031"],
            correct: 1
        },
        {
            question: "What is 35% of 840?",
            options: ["284", "294", "304", "314"],
            correct: 1
        },
        {
            question: "What is the cube root of 3375?",
            options: ["13", "15", "17", "19"],
            correct: 1
        },
        {
            question: "What is the average of 23, 47, 56, 82, 91?",
            options: ["58.8", "59.0", "59.8", "60.2"],
            correct: 2
        },
        {
            question: "A product costs $1250. After a 15% increase and then 12% discount, what is the final price?",
            options: ["$1265", "$1276", "$1287", "$1298"],
            correct: 1
        },
        {
            question: "What is (23 × 16) - (18 × 19)?",
            options: ["26", "28", "30", "32"],
            correct: 0
        },
        {
            question: "What is 7/12 + 5/16?",
            options: ["99/96", "109/96", "119/96", "129/96"],
            correct: 1
        },
        {
            question: "What is 23 × 47?",
            options: ["1071", "1081", "1091", "1101"],
            correct: 1
        },
        {
            question: "What is 1728 ÷ 64?",
            options: ["25", "27", "29", "31"],
            correct: 1
        },
        {
            question: "What is 237 + 468 + 192?",
            options: ["887", "897", "907", "917"],
            correct: 1
        },
        {
            question: "If 12 items cost $156, how much do 17 items cost?",
            options: ["$221", "$224", "$227", "$230"],
            correct: 0
        },
        {
            question: "What is 45% of 680?",
            options: ["296", "302", "306", "312"],
            correct: 2
        },
        {
            question: "What is 19 × 23?",
            options: ["427", "437", "447", "457"],
            correct: 1
        },
        {
            question: "What is 3456 - 1789?",
            options: ["1657", "1667", "1677", "1687"],
            correct: 1
        },
        {
            question: "What is the sum of all prime numbers between 20 and 30?",
            options: ["99", "101", "103", "105"],
            correct: 0
        },
        {
            question: "A train travels 180 km at 60 km/h, then 240 km at 80 km/h. What is the average speed?",
            options: ["68 km/h", "70 km/h", "72 km/h", "74 km/h"],
            correct: 1
        },
        {
            question: "What is (15² + 12²) ÷ 3?",
            options: ["117", "123", "129", "135"],
            correct: 1
        }
    ]
};

// Application State
let currentSection = 'reasoning';
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = 0;
let timerInterval = null;
let questionTimerInterval = null;
let questionTimeLeft = 30;
const TIME_PER_QUESTION = 30;

// Initialize all questions array
let allQuestions = [];

// DOM Elements
let startScreen, examScreen, resultScreen, quitScreen;
let startBtn, prevBtn, nextBtn, submitBtn, quitBtn, restartBtn, tryAgainBtn;

// Initialize DOM elements when page loads
function initDOMElements() {
    startScreen = document.getElementById('start-screen');
    examScreen = document.getElementById('exam-screen');
    resultScreen = document.getElementById('result-screen');
    quitScreen = document.getElementById('quit-screen');
    startBtn = document.getElementById('start-btn');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-btn');
    quitBtn = document.getElementById('quit-btn');
    restartBtn = document.getElementById('restart-btn');
    tryAgainBtn = document.getElementById('try-again-btn');
    
    // Event Listeners
    if (startBtn) startBtn.addEventListener('click', startExam);
    if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitExam);
    if (quitBtn) quitBtn.addEventListener('click', quitExam);
    if (restartBtn) restartBtn.addEventListener('click', restartExam);
    if (tryAgainBtn) tryAgainBtn.addEventListener('click', restartExam);
}

// Initialize
function init() {
    allQuestions = [
        ...questions.reasoning.map(q => ({...q, section: 'Reasoning'})),
        ...questions.arithmetic.map(q => ({...q, section: 'Arithmetic'}))
    ];
    userAnswers = new Array(allQuestions.length).fill(null);
}

function startExam() {
    init();
    startScreen.classList.remove('active');
    examScreen.classList.add('active');
    startTime = Date.now();
    startTimer();
    startQuestionTimer();
    displayQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('timer').textContent = 
            `Total Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function startQuestionTimer() {
    questionTimeLeft = TIME_PER_QUESTION;
    updateQuestionTimerDisplay();
    
    if (questionTimerInterval) {
        clearInterval(questionTimerInterval);
    }
    
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            if (currentQuestionIndex < allQuestions.length - 1) {
                nextQuestion();
            } else {
                submitExam();
            }
        }
    }, 1000);
}

function updateQuestionTimerDisplay() {
    const timerElement = document.getElementById('question-timer');
    timerElement.textContent = `Question Time: ${questionTimeLeft}s`;
    
    if (questionTimeLeft <= 10) {
        timerElement.style.color = '#dc3545';
        timerElement.style.fontWeight = 'bold';
    } else if (questionTimeLeft <= 20) {
        timerElement.style.color = '#ffc107';
    } else {
        timerElement.style.color = '#28a745';
    }
}

function displayQuestion() {
    const question = allQuestions[currentQuestionIndex];
    
    startQuestionTimer();
    
    document.getElementById('section-name').textContent = question.section;
    document.getElementById('question-counter').textContent = 
        `Question ${currentQuestionIndex + 1} of ${allQuestions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    question.options.forEach((option, index) => {
        document.getElementById(`option-${index}`).textContent = option;
    });
    
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    if (userAnswers[currentQuestionIndex] !== null) {
        radioButtons[userAnswers[currentQuestionIndex]].checked = true;
    }
    
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentQuestionIndex === allQuestions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentQuestionIndex === allQuestions.length - 1 ? 'block' : 'none';
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
}

function previousQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < allQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitExam() {
    if (confirm('Are you sure you want to submit the exam?')) {
        saveAnswer();
        clearInterval(timerInterval);
        clearInterval(questionTimerInterval);
        calculateResults();
        showResults();
    }
}

function quitExam() {
    if (confirm('Are you sure you want to quit the exam? Your progress will not be saved.')) {
        saveAnswer();
        clearInterval(timerInterval);
        clearInterval(questionTimerInterval);
        showQuitScreen();
    }
}

function showQuitScreen() {
    const attempted = userAnswers.filter(answer => answer !== null).length;
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const timeSpent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    document.getElementById('quit-attempted').textContent = attempted;
    document.getElementById('quit-time').textContent = timeSpent;
    
    examScreen.classList.remove('active');
    quitScreen.classList.add('active');
}

function calculateResults() {
    let totalCorrect = 0;
    let reasoningCorrect = 0;
    let arithmeticCorrect = 0;
    let wrongAnswers = 0;
    let unanswered = 0;
    
    allQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        
        if (userAnswer === null) {
            unanswered++;
        } else if (userAnswer === question.correct) {
            totalCorrect++;
            if (question.section === 'Reasoning') {
                reasoningCorrect++;
            } else {
                arithmeticCorrect++;
            }
        } else {
            wrongAnswers++;
        }
    });
    
    const percentage = Math.round((totalCorrect / allQuestions.length) * 100);
    
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('correct-answers').textContent = totalCorrect;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('unanswered').textContent = unanswered;
    document.getElementById('reasoning-score').textContent = reasoningCorrect;
    document.getElementById('arithmetic-score').textContent = arithmeticCorrect;
}

function showResults() {
    examScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

function restartExam() {
    currentQuestionIndex = 0;
    clearInterval(timerInterval);
    clearInterval(questionTimerInterval);
    resultScreen.classList.remove('active');
    quitScreen.classList.remove('active');
    startScreen.classList.add('active');
    document.getElementById('timer').textContent = 'Total Time: 00:00';
    document.getElementById('question-timer').textContent = 'Question Time: 30s';
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded - Initializing app');
    initDOMElements();
    init();
    console.log('App initialized successfully');
});
