// paper > rock
// rock > scissors
// scissors > paper
//



function determineRoundWinner() {
    var winner = "";
    if (g_p1Choice === g_p2Choice) {
        winner = "tie";
    } else if (g_p1Choice === 'rock' && g_p2Choice === 'paper') {
        winner = 'player2';
    } else if (g_p1Choice === 'rock' && g_p2Choice === 'scissors') {
        winner = 'player1';
    } else if (g_p1Choice === 'scissors' && g_p2Choice === 'rock') {
        winner = 'player2';
    } else if (g_p1Choice === 'scissors' && g_p2Choice === 'paper') {
        winner = 'player1';
    } else if (g_p1Choice === 'paper' && g_p2Choice === 'scissors') {
        winner = 'player2';
    } else if (g_p1Choice === 'paper' && g_p2Choice === 'rock') {
        winner = 'player1';
    } else {
        console.log('no winner! (ERROR???)');
        winner = undefined;
    }
    roundResults(winner);
}

// call displayResults and pass in result
// displayResults(result);




function displayRoundResults(winner) {
    console.log('\n::: Round Results :::');

    var $roundResultsAlert = $('<p class="round-results">');

    if (winner === 'tie') {
        console.log('TIE, Try to Win!!!');
        $roundResultsAlert.html('Tie, Try to Win!!!');
        player1.react('mood-round-tied');
        player2.react('mood-round-tied');
    } else if (winner === 'player1') {
        console.log('Player 1 wins round');
        $roundResultsAlert.html('Player 1 Wins round');
        player1.react('mood-match-won');
        player2.react('mood-match-lost');
    } else if (winner === 'player2') {
        console.log('Player 2 wins round');
        $roundResultsAlert.html('Player 2 wins round');
        player1.react('mood-match-lost');
        player2.react('mood-match-won');
    } else {
        console.log('ERROR');
        $roundResultsAlert.html('ERROR');
    }
    $roundResultsAlert.append('<div class="round-choices">' +
                                '<span class="choice-p1 ' + g_p1Choice + '"></span>' +
                                '<span class="choice-p2 ' + g_p2Choice + '"></span>' +
                              '</div>');
    $g_roundResultWindow.html($roundResultsAlert);

}
