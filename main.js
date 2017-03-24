

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Global Config
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


var $g_p1Rock = $('.player1 .btn-rock');
var $g_p1Paper = $('.player1 .btn-paper');
var $g_p1Scissors = $('.player1 .btn-scissors');

var $g_p1Score = $('.playeronescore');
var $g_p2Score = $('.playertwoscore');

var g_p1score = 0;
var g_p2score = 0;


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Logic, handled by event handlers
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


$g_p1Rock.on('click', function(){ play('rock'); });
$g_p1Paper.on('click', function(){ play('paper'); });
$g_p1Scissors.on('click', function(){ play('scissors'); });



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Functions
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



function play(p1choice) {
  console.log('\n::: start play! :::');
  console.log('Player 1 chose: ' + p1choice);

  var p2choice = computerChoice();
  console.log('Player 2 chose: ' + p2choice);

  determineWinner(p1choice, p2choice);
}


function disableControls(state) {
  $g_p1Rock.prop( "disabled", state );
  $g_p1Paper.prop( "disabled", state );
  $g_p1Scissors.prop( "disabled", state );
}
