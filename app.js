const questions = [
    {
        image: 'pic/js.png',
        options: ['JTML', 'Java', 'JavaScript', 'Jython'],
        answer: 'JavaScript'
    },
    {
        image: 'pic/Java.png',
        options: ['Java', 'J#', 'Jwift', 'Juby'],
        answer: 'Java'
    },
    {
        image: 'pic/Rust.png',
        options: ['RHP', 'Rerl', 'Ro', 'Rust'],
        answer: 'Rust'
    },
    {
        image: 'pic/react.png',
        options: ['React', 'Rue', 'Rngular', 'Rvelte'],
        answer: 'React'
    },
    {
        image: 'pic/Django.png',
        options: ['Django', 'Dlask', 'Duby on Rails', 'Dxpress'],
        answer: 'Django'
    },
    {
        image: 'pic/mongodb.png',
        options: ['MongoDB', 'MySQL', 'MostgreSQL', 'MQLite'],
        answer: 'MongoDB'
    },
    {
        image: 'pic/Nodejs.png',
        options: ['Node.js', 'Nava', 'N++', 'NHP'],
        answer: 'Node.js'
    },
    {
        image: 'pic/Sass.png',
        options: ['SSS', 'Sass', 'SESS', 'Stylus'],
        answer: 'Sass'
    },
    {
        image: 'pic/json.png',
        options: ['JTML', 'JML', 'JSON', 'JAML'],
        answer: 'JSON'
    },
    {
        image: 'pic/Bootstrap.png',
        options: ['Bootstrap', 'Boundation', 'Bulma', 'Baterialize'],
        answer: 'Bootstrap'
    },
    {
        image: 'pic/C++.png',
        options: ['C', 'C++', 'C#', 'Cplus'],
        answer: 'C++'
    },
    {
        image: 'pic/Swift.png',
        options: ['Swift', 'Sava', 'Sotlin', 'SObjective-C'],
        answer: 'Swift'
    },
    {
        image: 'pic/Ruby.png',
        options: ['Ruby', 'RHP', 'Rava', 'RavaScript'],
        answer: 'Ruby'
    },
    {
        image: 'pic/Firebase.png',
        options: ['Firebase', 'FynamoDB', 'Fassandra', 'FouchDB'],
        answer: 'Firebase'
    },
    {
        image: 'pic/GraphQL.png',
        options: ['GraphQL', 'GEST', 'GOAP', 'GRPC'],
        answer: 'GraphQL'
    },
    {
        image: 'pic/Kubernetes.png',
        options: ['Kubernetes', 'Gocker', 'Gagrant', 'Gnsible'],
        answer: 'Kubernetes'
    },
    {
        image: 'pic/git.png',
        options: ['Git', 'GVN', 'Gercurial', 'Gerforce'],
        answer: 'Git'
    },
    {
        image: 'pic/Unit_Test.png',
        options: ['Unit Test', 'Untegration Test', 'Uunctional Test', 'Uerformance Test'],
        answer: 'Unit Test'
    },
    {
        image: 'pic/PotgressSQL.png',
        options: ['Pgile', 'Paterfall', 'PotgressSQL', 'Panban'],
        answer: 'PotgressSQL'
    },
    {
        image: 'pic/Lua.png',
        options: ['LEO', 'LEM', 'Lua', 'LPC'],
        answer: 'Lua'
    },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <img src="${question.image}" alt="Programming Image" class="mx-auto">
        <div class="flex justify-center space-x-4 mt-4">
            ${question.options.map(option => `<button class="answer-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${option}</button>`).join('')}
        </div>
    `;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer-btn')) {
        const selectedAnswer = event.target.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;
        
        if (selectedAnswer === correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
});

function showScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `
        <div class="score-box bg-white shadow-lg rounded-lg p-4 text-center animate-firework">
            <h2 class="text-2xl font-bold text-green-600 mb-2">สรุปคะแนน</h2>
            <p class="text-xl">คุณได้ <span class="font-bold text-blue-500">${score}</span> คะแนน</p>
            <button id="restart-button" class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                เริ่มใหม่
            </button>
        </div>
    `;
    scoreContainer.classList.remove('hidden');
    
    document.getElementById('restart-button').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        scoreContainer.classList.add('hidden');
        showQuestion();
    });
}


showQuestion();