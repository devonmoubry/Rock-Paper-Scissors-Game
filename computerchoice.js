function computerChoice(){
  var actionArray= ['paper', 'rock', 'scissors'];
  var randomChoice = Math.floor(Math.random() * actionArray.length);
  var randomSelect = actionArray[randomChoice];

  return randomSelect;
}
