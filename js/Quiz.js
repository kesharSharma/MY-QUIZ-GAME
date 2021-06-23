class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    

    
      tittle.hide();
      input1.hide();
      input2.hide();
      button.hide();
      question.hide();
      background("YELLOW");
      fill("black");
      textSize(30);
      text("Result of the Quiz",340,50);
      text("------------------------------------",320,65)

    
    getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
     fill("blue");
    textSize(20);
    text("*NOTE: Constant who answered correct are highlighted in green color!",130,230);
    }
    
    for(var prl in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[prl].answer)
        fill("green");
      else
      fill("red");
      
      display_answer +=30;
      textSize(20);
      Text("allConstestants[prl].name + =: = +allContestants[prl].answer,250,display_answer")

    }
    
  }

}
