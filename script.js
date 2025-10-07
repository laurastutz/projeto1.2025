const questions = [
   {
     questions:"Qual é o maior animal do mundo?",
     answers :[
      {id: 1, text:"Tubarão", correct:false },
      {id: 2, text:"baleia Azul", correct:true },
      {id: 3, text:"Elefante", correct:false },
      {id: 4, text:"Girafa", correct:false },
     ],
   },

  ]
[
   { questions:"Que animal é conhecido por ter três corações??",
  answer:[
      {id: 1, text:"Polvo", correct:true },
      {id: 2, text:"Baleia", correct:false },
       {id: 3, text:"Golfinho", correct:false },
      {id: 4, text:"Tubarão", correct:false },
    ],
  },

[
  {questions:"Os flamingos nascem de que cor?",
  answer:[
      {id: 1, text:"Rosa", correct:false },
      {id: 2, text:"Amarelo", correct:false },
      {id: 3, text:"Laranja", correct:false },
      {id: 4, text:"Branco", correct:true },
    ],
  },


[
  { questions:"Qual animal é conhecido por ser o parente vivo mais próximo do T-Rex?",
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