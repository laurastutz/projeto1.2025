const questions = [
   {
     question:"Qual é o maior animal do mundo?",
     answers :[
      {id: 1, text:"Tubarão", correct:false },
      {id: 2, text:"baleia Azul", correct:true },
      {id: 3, text:"Elefante", correct:false },
      {id: 4, text:"Girafa", correct:false },
     ],
   },

  ]
[
   { question:"Que animal é conhecido por ter três corações??",
  answer:[
      {id: 1, text:"Polvo", correct:true },
      {id: 2, text:"Baleia", correct:false },
       {id: 3, text:"Golfinho", correct:false },
      {id: 4, text:"Tubarão", correct:false },
    ],
  },

[
  {question:"Os flamingos nascem de que cor?",
  answer:[
      {id: 1, text:"Rosa", correct:false },
      {id: 2, text:"Amarelo", correct:false },
      {id: 3, text:"Laranja", correct:false },
      {id: 4, text:"Branco", correct:true },
    ],
  },


[
  { question:"Qual animal é conhecido por ser o parente vivo mais próximo do T-Rex?",
  answer:[
         {id: 1, text:"Iguana", correct:false },
         {id: 2, text:"Corvo", correct:false },
         {id: 3, text:"Galinha", correct:true },
         {id: 4, text:"Rato", correct:false },
      ],
   }, 

  ]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    socore = 0
    nextButton.innerHTML =  "Próxima";
    showQuestion();
}
  

function resetState(){
      nextButton.style.display = "none"
      while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
      }

}


function showQuestion(){
  resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let uestionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
       

    currentQuestion.answer.forEach ((answer) => {
      const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.dataset.id = answer.id;
       button.classList.add("btn");
       button.addEventListener("click",selectAnswer);
       answerButtons.appendChild(button)
    });
  }


function selectAnswer(e){
    nswers = questions [currentQuestionIndex]. answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectBtn = e.target; 
    const isCorrect =  selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect){
      selectBtn.classList.add("correct");
      score++;
    } else{
      selectedBtn.classList.add("correct")
    }

}






startQuiz();