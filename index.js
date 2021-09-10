// Quiz on web development
var readLine = require("readline-sync");
var userName = readLine.question("What's your name ? \n");
console.log("Welcome "+userName+", let's see how much do you know about Web development ");

var newRun =[{
  question : "1) Which language do we use to build client side logic ? \n",
  answer : "Javascript",
},
{
  question : "2) Which framework of javascript do we use in server side ? \n",
  answer : "Nodejs",
},
{
  question: "3) Why photoshop is used ? \n",
  answer: "Photo editing",
},
{
  question: "4) Can we use other languages other than nodejs on server ? \n",
  answer: "Yes",
},
{
  question: "5) What powers the Chrome browser to run javascript ? \n",
  answer: "V8 engine",
},
{
  question: "6) Javascripted is a compiled language ? \n",
  answer: "No"
}
]

var pointsTable = 0; 
var checkPoint = 0;
var highest = [{name: "Chirag",
score:5,},
{name : "Kunal",
score: 3},];



function quiz(question, answer){
  var userAnswer = readLine.question(question + "-First letter of your answer should be capital \n-Please enter 'Restart' if you want to restart the game \n" );
  
  if(userAnswer === answer){ 
    console.log("You have Won!!");
    pointsTable ++
    }
  else if(userAnswer === "Restart"){
    pointsTable = 0;
    checkPoint = 1;
    for(i=0; i<newRun.length ;i++){
      console.log("\n")
    quiz( newRun[i].question , newRun[i].answer);
     }
     
  }
  else{
    console.log("You've lost sorry")
    if(pointsTable > 0 ){
    }
  }
  console.log("Your point is: "+pointsTable); 
}
for(i=0; i<newRun.length ;i++){
  if(checkPoint===1) break;
  console.log("\n")
  quiz( newRun[i].question , newRun[i].answer);
  
}

console.log("Your final score is :- " + pointsTable + "\n");

for(i=0; i<highest.length; i++){
  if(highest[i].score < pointsTable){
     highest.push({ name : userName, score : pointsTable  })
     break;
  }

}

for(i=0;i<highest.length;i++){
  console.log("Highscores are:- "+highest[i].name+" : "+highest[i].score);
}



