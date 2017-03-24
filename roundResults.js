
/*
'tie'
'player2'
'player2'
*/

function roundResults(winner) {

  // is it end of match? check the score

  if(winner === 'tie') {

    // if yes, display round results and return allow to play again
    displayRoundResults(winner);
    disableControls(false);

  } else {

    // else, someone won
    if(winner === 'player1') {
      $g_p1wins++;
    } else if (winner === 'player2') {
      $g_p2wins++;
    } else {
      console.log('something not right in roundResults');
    }

    displayRoundResults(winner);
    displayScore();

    if (isEndOfMatch()) {
      displayMatchWinner();
    } else {
      disableControls(false);
    }
  }
}


function isEndOfMatch() {
  if( $g_p1wins - $g_p2wins >= 2 ||
      $g_p2wins - $g_p1wins >= 2 ||
      $g_p1wins === 3 || $g_p2wins === 3 ) {
    return true;
  } else {
    return false;
  }
}
