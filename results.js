function displayMatchWinner(winner) {
  console.log('\n✋ ::: Displaying Winner ::: 🤚');

  var $matchResultsAlert = $('<p class="match-results">');

  if (winner === 'tie') {
    console.log('It’s a tie! Everybody is a winner!');

  } else if (winner === 'player1') {
    console.log( 'Player1 wins! You da bomb!');
    $matchResultsAlert.html('Player1 wins! You da bomb!');
  } else if (winner === 'player2') {
    console.log('Player 2 wins! All you do is win! win! win!');
    $matchResultsAlert.html('Player 2 wins! All you do is win! win! win!');
  } else {
    console.log('Why can’t you be a team player? Try playing again.');
    $matchResultsAlert.html('Why can’t you be a team player? Try playing again.');
  }
  console.log('\n 🔄 Play another match?? \n ');

  $g_matchResultsWindow.append($matchResultsAlert);
  // $g_matchResultsWindow.append('<p class="play-again-prompt">🔄 Play another match???</p>');
  var $btnRestart = $('<button class="btn btn-play-again">Play Again</button>');
  $g_statusDisplay.append($btnRestart);
  $btnRestart.on('click', function(){ restartMatch($btnRestart); });
}
