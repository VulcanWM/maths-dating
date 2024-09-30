const questions = [
    {
        question: "What do you look for in a first date?",
        options: [
            { text: "Fun activities and games that keep things lively.", value: "Sparx" },
            { text: "Deep conversations about interesting topics.", value: "Corbett" },
            { text: "Structured plans with a clear agenda.", value: "Sparx" },
            { text: "A mix of fun and learning, with challenges along the way.", value: "Sparx" }
        ]
    },
    {
        question: "Where would you prefer to study together?",
        options: [
            { text: "A lively café with lots of interaction.", value: "Sparx" },
            { text: "A library with plenty of resources.", value: "Corbett" },
            { text: "An online platform with engaging lessons.", value: "Sparx" },
            { text: "A group study session with friends.", value: "Sparx" }
        ]
    },
    {
        question: "What’s your preferred way to tackle new material?",
        options: [
            { text: "Engaging with games and quizzes.", value: "Sparx" },
            { text: "Watching detailed video tutorials.", value: "Corbett" },
            { text: "Reading and taking notes from textbooks.", value: "Sparx" },
            { text: "Discussing concepts with a study partner.", value: "Sparx" }
        ]
    },
    {
        question: "How do you want to feel after a learning session?",
        options: [
            { text: "Excited and motivated to do more!", value: "Sparx" },
            { text: "Empowered with a deeper understanding of concepts.", value: "Corbett" },
            { text: "Accomplished after completing challenging problems.", value: "Sparx" },
            { text: "Ready to apply what you've learned in real life.", value: "Sparx" }
        ]
    },
    {
        question: "What makes you want to return to a learning platform?",
        options: [
            { text: "Frequent updates and new interactive content.", value: "Sparx" },
            { text: "Consistent quality and depth of knowledge.", value: "Corbett" },
            { text: "Engaging community and support.", value: "Sparx" },
            { text: "Creative approaches to problem-solving.", value: "Sparx" }
        ]
    },
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    shuffle(questions).forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<strong>${index + 1}. ${question.question}</strong>`;

        shuffle(question.options).forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerHTML = `
                <input type="radio" name="question${index}" value="${option.value}" id="q${index}o${option.text}">
                <label for="q${index}o${option.text}">${option.text}</label>
            `;
            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.getElementById('submit');
    submitButton.style.display = 'block';
}

function calculateResult() {
    let sparxScore = 0;
    let corbettScore = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === "Sparx") {
                sparxScore++;
            } else {
                corbettScore++;
            }
        }
    });

    const resultDiv = document.getElementById('result');
    if (corbettScore > sparxScore) {
        resultDiv.innerHTML = "<h2>You should date Corbett Maths!</h2>";
    } else {
        resultDiv.innerHTML = "<h2>You should date Sparx Maths!</h2>";
    }
}

document.getElementById('submit').addEventListener('click', calculateResult);
displayQuiz();
