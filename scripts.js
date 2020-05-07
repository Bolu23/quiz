const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {

 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
    
})
}

function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Submit'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who wrote the book titled "Arrow of God"?',
        answers: [
            {text: 'Buchi Emecheta', correct: false},
            {text: 'Chinua Achebe', correct: true},
            {text: 'Wole Soyinka', correct: false},
        ]
    },
    {
        question: 'Who wrote the book titled "Half of a yellow Sun"?',
        answers: [
            {text: 'Chimamanda Adichie', correct: true},
            {text: 'Chief Obafemi Awolowo', correct: false},
            {text: 'Ajayi Luvie', correct: false},
        ]
    },
    {
        question: 'British author J K Rowling wrote:',
        answers: [
            {text: 'Midnight Sun', correct: false},
            {text: 'Harry Potter', correct: true},
            {text: 'Oliver twist', correct: false},
        ]
    },
    {
        question: 'Who wrote the book titled "Think Big"?',
        answers: [
            {text: 'Ben Carson', correct: true},
            {text: 'Charles Dickens', correct: false},
            {text: 'Olivander Mckinney', correct: false},
        ]
    },
    {
        question: 'The Book title "Rich Dad, Poor Dad" was written by:',
        answers: [
            {text: 'Robert Kiyosaki', correct: true},
            {text: 'John Maxwell', correct: false},
            {text: 'Brain Tracy', correct: false},
        ]
    },
]

var score = 0;
for(var i=0; i < questions.length; i++){
    if(response == questions[i].answer){
        score++;
        alert(score);
    }else{
        alert("0")
    }
}