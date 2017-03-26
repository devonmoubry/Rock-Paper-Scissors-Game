// paper > rock
// rock > scissors
// scissors > paper
//



function determineRoundWinner(p1choice,p2choice) {
  var winner = "";
  if (p1choice === p2choice) {
    winner = "tie";
  }
  else if (p1choice === 'rock' && p2choice === 'paper') {
    winner = 'player2'; }
  else if (p1choice === 'rock' && p2choice === 'scissors') {
    winner =  'player1';  }
  else if (p1choice === 'scissors' && p2choice === 'rock') {
    winner =  'player2'; }
  else if (p1choice === 'scissors' && p2choice === 'paper') {
    winner = 'player1'; }
  else if (p1choice === 'paper' && p2choice === 'scissors') {
    winner = 'player2'; }
  else if (p1choice === 'paper' && p2choice === 'rock') {
    winner = 'player1'; }
  else {
    console.log('no winner! (ERROR???)');
    winner = undefined;
  }
  roundResults(winner);

}

// call displayResults and pass in result
// displayResults(result);




function displayRoundResults(winner){
  console.log('\n::: Round Results :::');

  var $roundResultsAlert = $('<p class="round-results">');

  if (winner === 'tie') {
  console.log('TIE, Try to Win!!!');
  $roundResultsAlert.html('Tie, Try to Win!!!');
  }
  else if (winner === 'player1'){
    console.log('Player 1 wins round');
    $roundResultsAlert.html('Player 1 Wins round');
  }
  else if (winner === 'player2'){
    console.log('Player 2 wins round');
    $roundResultsAlert.html('Player 2 wins round');
  }
  else {
    console.log('ERROR');
    $roundResultsAlert.html('ERROR');
  }

  $g_roundResultWindow.html($roundResultsAlert);

}
