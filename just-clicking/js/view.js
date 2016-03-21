// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function() {

  var _$game = $('#game');
  var _$squares = $('.square');
  var _$score = $('#score');

  var init = function(onClick) {
    _$squares.each(function(index, element) {
      var $element = $(element);
      $element.attr('data-id', index);
    });

    _$game.click('.square', function(e) { onClick(e); } );
  };

  var updateSquares = function(dataSquares) {
    for (var i = 0; i < dataSquares.length; i++) {
      var $square = _$squares.eq(i);
      if (dataSquares[i] === 1) {
        $square.addClass('active');
      }
    }
  };

  var updateScore = function(points) {
    _$score.text(points);
  };

  var updateDifficulty = function() {
  };

  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
    updateDifficulty: updateDifficulty
  };
})();
