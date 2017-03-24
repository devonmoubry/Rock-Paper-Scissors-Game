function restartMatch($itemToRemove) {
  g_p1Score = 0;
  g_p2Score = 0;
  console.log(' * * * You may begin a new match!');
  $itemToRemove.remove();
  disableControls(false);
}
