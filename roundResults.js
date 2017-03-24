
/*
'tie'
'player1'
'player2'
*/

function roundResults(winner) {

  // is it end of match? check the score

  if(winner === 'tie') {
    console.log(':: Round Result: It\'s a tie!');
    // if yes, display round results and return allow to play again
    // displayRoundResults(winner);
    disableControls(false);

  } else {

    // else, someone won
    if(winner === 'player1') {
      g_p1Score++;
    } else if (winner === 'player2') {
      g_p2Score++;
    } else {
      console.log('something not right in roundResults');
    }

    // displayRoundResults(winner);
    // displayScore();

    if (isEndOfMatch()) {
      displayMatchWinner(winner);
    } else {
      disableControls(false);
    }
  }
}


function isEndOfMatch() {
  if( g_p1Score - g_p2Score >= 2 ||
      g_p2Score - g_p1Score >= 2 ||
      g_p1Score === 3 || g_p2Score === 3 ) {
    return true;
  } else {
    return false;
  }
}
