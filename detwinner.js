// paper > rock
// rock > scissors
// scissors > paper
//



function determineWinner(p1choice,p2choice) {
  var winner = "";
  if (p1choice === p2choice) {
    winner = "tie";
  }
  else if (p1choice === 'rock' && p2choice === 'paper') {
    winner = 'player2' }
  else if (p1choice === 'rock' && p2choice === 'scissors') {
    winner =  'player1'  }
  else if (p1choice === 'scissors' && p2choice === 'rock') {
    winner =  'player2' }
  else if (p1choice === 'scissors' && p2choice === 'paper') {
    winner = 'player1' }
  else if (p1choice === 'paper' && p2choice === 'scissors') {
    winner = 'player2' }
  else if (p1choice === 'paper' && p2choice === 'rock') {
    winner = 'player1' }
  console.log(winner);
  displayWinner(winner);

}

// call displayResults and pass in result
// displayResults(result);
