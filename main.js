

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Global Config
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

var player1 = new Character('player1', true, 'Un0');
// var player2 = new Character('player2', true, 'd0s');

var $g_p1ScoreDisplay = $('.playeronescore');
var $g_p2ScoreDisplay = $('.playertwoscore');
var $g_statusDisplay = $('.status');
var $g_roundResultWindow = $('.roundresultswindow');
var $g_matchResultsWindow = $('.matchresultswindow');


var g_p1Score = 0;
var g_p2Score = 0;







/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Functions
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */




function play(p1choice) {
  disableControls(true);

  console.log('\n::: Round GO! :::');
  console.log('Player 1 chose: ' + p1choice);

  var p2choice = computerChoice();
  console.log('Player 2 chose: ' + p2choice);

  determineRoundWinner(p1choice, p2choice);
}


function disableControls(state) {
  player1.disableControls(state);
  // player2.disableControls(state);
}



console.log(player1);
player1.renderPlayer();
// player2.renderPlayer();
