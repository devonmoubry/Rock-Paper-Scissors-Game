

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
  var $controlsContainer = $('<div class="player-controls">');
  $('.' + this.player).append('<p class="player-name">' + this.name + ' <span class="mood-emoji"></span></p>')
                  .append($controlsContainer);

  if(this.isHuman){
    for(var ability in this.abilities) {
      var $button = $('<button>');
      $button.html(ability);
      $button.addClass('btn');
      $button.addClass('btn-' + ability);
      $controlsContainer.append($button);
      $button.on('click', function(event){ play(event.target.innerHTML); });
    }
  } else {
    $controlsContainer.append('<p class="cpu-player">💻</p>');
  }
};

Character.prototype.disableControls = function(state) {
  if(this.isHuman) {
    for(var key in this.abilities) {
      var $currentButton = $('.' + this.player + ' .btn-' + key);
      $currentButton.prop( "disabled", state );
    }
  }
};


Character.prototype.react = function(mood) {
  var $playerContainer = $('.' + this.player);
  $playerContainer.removeClass('mood-neutral mood-round-won mood-round-lost mood-round-tied mood-match-won mood-match-won mood-match-lost')
                  .addClass(mood);
  console.log('react!', $playerContainer, $playerContainer.attr('class'));
};





















//
