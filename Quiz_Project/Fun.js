const questions = [
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        correctAnswer: "Alan Turing"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Venus"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron", "Silver"],
        correctAnswer: "Oxygen"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of Brazil?",
        options: ["Peso", "Real", "Dollar", "Euro"],
        correctAnswer: "Real"
    },
    {
        question: "Which is the largest mammal on land?",
        options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
        correctAnswer: "Elephant"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1931"],
        correctAnswer: "1912"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
        correctAnswer: "Pretoria"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who is the CEO of SpaceX?",
        options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
        correctAnswer: "Elon Musk"
    },
    {
        question: "What is the purpose of the CSS property 'flexbox'?",
        options: ["To style text content", "To create flexible box layouts", "To define font styles", "To apply animations"],
        correctAnswer: "To create flexible box layouts"
    },
    {
        question: "Which programming language is commonly used for machine learning and data science?",
        options: ["Java", "Python", "C++", "Ruby"],
        correctAnswer: "Python"
    },
    {
        question: "What is the main function of a firewall in computer networks?",
        options: ["To protect against viruses", "To regulate internet speed", "To filter network traffic", "To manage file storage"],
        correctAnswer: "To filter network traffic"
    },
    {
        question: "In web development, what does 'SPA' stand for?",
        options: ["Single Page Application", "Server-side Page Application", "Simple Page Animation", "Structured Page Architecture"],
        correctAnswer: "Single Page Application"
    },
    {
        question: "What is the purpose of the 'SQL JOIN' statement in database queries?",
        options: ["To create a new table", "To combine rows from two or more tables", "To delete data from a table", "To sort data in ascending order"],
        correctAnswer: "To combine rows from two or more tables"
    },
    {
        question: "Which version control system is widely used for open-source projects and is hosted on platforms like GitHub?",
        options: ["SVN", "Mercurial", "Git", "Perforce"],
        correctAnswer: "Git"
    },
    {
        question: "What does the acronym 'API' stand for in the context of web development?",
        options: ["Advanced Protocol Interface", "Application Programming Interface", "Automated Program Integration", "Advanced Programming Integration"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "Which company developed the programming language 'JavaScript'?",
        options: ["Microsoft", "Sun Microsystems", "Netscape", "IBM"],
        correctAnswer: "Netscape"
    },
    {
        question: "What is the purpose of the HTML 'canvas' element?",
        options: ["To draw graphics and animations", "To embed external media files", "To define document structure", "To create hyperlinks"],
        correctAnswer: "To draw graphics and animations"
    },
    {
        question: "Which cloud computing service provides on-demand computing resources over the internet?",
        options: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure", "IBM Cloud"],
        correctAnswer: "Amazon Web Services (AWS)"
    },
    {
        question: "What is the role of the 'DOCTYPE' declaration in HTML documents?",
        options: ["To specify the document type and version of HTML", "To create links between pages", "To define document styles", "To handle form submissions"],
        correctAnswer: "To specify the document type and version of HTML"
    },
    {
        question: "Which programming language is commonly used for front-end web development?",
        options: ["Java", "Python", "HTML", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the purpose of the 'npm' tool in JavaScript development?",
        options: ["To manage database connections", "To handle asynchronous operations", "To install and manage packages", "To create server-side applications"],
        correctAnswer: "To install and manage packages"
    },
    {
        question: "In the context of databases, what does 'ACID' stand for?",
        options: ["All Components Integrated Design", "Atomicity, Consistency, Isolation, Durability", "Advanced Content Isolation Design", "Automatic Control of Integrated Data"],
        correctAnswer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        question: "Which type of programming language is 'Python'?",
        options: ["Compiled language", "Interpreted language", "Assembly language", "Machine language"],
        correctAnswer: "Interpreted language"
    },
    {
        question: "What is the purpose of the 'alt' attribute in HTML 'img' tags?",
        options: ["To define alternative text for the image", "To set the image source", "To add a link to the image", "To specify image dimensions"],
        correctAnswer: "To define alternative text for the image"
    },
    {
        question: "Which protocol is used for secure data transmission over the internet?",
        options: ["HTTP", "FTP", "SMTP", "HTTPS"],
        correctAnswer: "HTTPS"
    },
    {
        question: "What is the purpose of the 'box-sizing' CSS property?",
        options: ["To control the display order of elements", "To adjust the size of text boxes", "To define the size of images", "To include or exclude padding and border in an element's total width and height"],
        correctAnswer: "To include or exclude padding and border in an element's total width and height"
    },
    {
        question: "Which database management system is based on a document-oriented data model?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"],
        correctAnswer: "MongoDB"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language", "Highly Textured Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["C", "Java", "Python", "Assembly"],
        correctAnswer: "C"
    },
    {
        question: "What is the primary purpose of CSS?",
        options: ["To provide styling for HTML elements", "To create interactive web pages", "To handle server-side logic", "To define database schema"],
        correctAnswer: "To provide styling for HTML elements"
    },
    {
        question: "Which company developed the first graphical web browser?",
        options: ["Microsoft", "Netscape", "Google", "Mozilla"],
        correctAnswer: "Netscape"
    },
    {
        question: "In computer science, what does 'API' stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Interface"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "What is the purpose of JavaScript?",
        options: ["To style web pages", "To create database tables", "To add interactivity to web pages", "To define page structure"],
        correctAnswer: "To add interactivity to web pages"
    },
    {
        question: "Which of the following is a version control system?",
        options: ["FTP", "Git", "HTTP", "SSH"],
        correctAnswer: "Git"
    },
    {
        question: "What is the full form of URL?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"],
        correctAnswer: "Uniform Resource Locator"
    },
    {
        question: "What does the acronym SQL stand for?",
        options: ["Structured Query Language", "Simple Question Language", "Sequential Query Language", "Structured Question Language"],
        correctAnswer: "Structured Query Language"
    },
    {
        question: "Which programming language is used for building Android apps?",
        options: ["Java", "Swift", "C#", "Python"],
        correctAnswer: "Java"
    },
];


let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];

        questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

        optionsContainer.innerHTML = currentQuestion.options.map((option, index) => {
            return `<button class="option-btn" onclick="checkAnswer(${index})">${option}</button>`;
        }).join('');

        nextBtn.disabled = true;
    } else {
        questionContainer.innerHTML = "<p>Quiz Completed!</p>";
        optionsContainer.innerHTML = "";
        nextBtn.disabled = true;
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");

    optionsContainer.childNodes.forEach((btn, index) => {
        if (index === selectedIndex) {
            btn.classList.add(currentQuestion.correctAnswer === currentQuestion.options[index] ? "correct" : "incorrect");
        } else {
            btn.disabled = true;
        }
    });

    nextBtn.disabled = false;

    if (currentQuestion.correctAnswer === currentQuestion.options[selectedIndex]) {
        score++;
    }

    document.getElementById("score").innerText = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
