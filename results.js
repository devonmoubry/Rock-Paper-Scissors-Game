function displayWinner(winner) {
  if (winner === 'tie') {
    console.log('It’s a tie! Everybody is a winner!');
  } else if (winner === 'player1') {
    console.log( 'Player1 wins! You da bomb!');
  } else if (winner === 'player2') {
    console.log('Player 2 wins! All you do is win! win! win!');
  } else {
    console.log('Why can’t you be a team player? Try playing again.');
  }
}
