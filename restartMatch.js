function restartMatch($itemToRemove) {
  g_p1Score = 0;
  g_p2Score = 0;
  $g_p1ScoreDisplay.html(g_p1Score);
  $g_p2ScoreDisplay.html(g_p2Score);
  $g_roundResultWindow.html('');
  $g_matchResultsWindow.html('');
  $itemToRemove.remove();
  disableControls(false);
  player1.react('mood-neutral');
  player2.react('mood-neutral');
}
