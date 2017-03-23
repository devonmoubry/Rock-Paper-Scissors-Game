function computerChoice(){
  var actionArray= ['Paper', 'Rock', 'Scissors'];
  var randomChoice = Math.floor(Math.random() * actionArray.length);
  var randomSelect = actionArray[randomChoice];
  console.log('The computer chose ' + randomSelect);

  return randomSelect;
}
