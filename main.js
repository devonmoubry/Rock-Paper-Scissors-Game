

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Global Config
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


var $g_p1rock = $('.player1 .btn-rock');
var $g_p1paper = $('.player1 .btn-paper');
var $g_p1scissors = $('.player1 .btn-scissors');

var $g_p1wins;
var $g_p2wins;


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Logic, handled by event handlers
+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


$g_p1rock.on('click', function(){ play('rock'); });
$g_p1paper.on('click', function(){ play('paper'); });
$g_p1scissors.on('click', function(){ play('scissors'); });



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
  $g_p1rock.prop( "disabled", state );
  $g_p1paper.prop( "disabled", state );
  $g_p1scissors.prop( "disabled", state );
}
