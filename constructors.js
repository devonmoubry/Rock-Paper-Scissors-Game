

function Character(player, isHuman, name) {
  this.player = player;
  this.isHuman = isHuman;
  this.name = name;
  this.abilities = {
    rock: 1,
    paper: 1,
    scissors: 1
  };
}


Character.prototype.renderPlayer  = function(){
  var $controlsContainer = $('<div>');
  $('.' + this.player)
    .append('<p>' + this.name + '</p>')
    .append($controlsContainer);

  for(var key in this.abilities) {
    var $button = $('<button>');
    $button.html(key);
    $button.addClass('btn');
    $button.addClass('btn-' + key);
    $controlsContainer.append($button);
    $button.on('click', function(){ play(key); });
  }
};

Character.prototype.disableControls = function(state) {
  for(var key in this.abilities) {
    var $currentButton = $('.' + this.player + ' .btn-' + key);
    $currentButton.prop( "disabled", state );
  }
};
