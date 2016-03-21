// ----------------------------------------
// Main
// ----------------------------------------

var JC = JC || {};  // <<<< NOTE: not used yet
                    // See app.js, model.js, view.js, and controller.js
                    // in this same directory
                    // Refactory this code to use MVC and the module pattern
                    // in those files
                    // Start up your app in app.js


$(document).ready(function() {
  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];


  var $game = $('#game');
  var $squares = $('.square');
  var $score = $('#score');


  $squares.each(function(index, element) {
    var $element = $(element);
    $element.attr('data-id', index);
  });


  setInterval(function() {
    var indexes = _.times(_dataSquares.length, function(index) {
      return index;
    });
    indexes = _.shuffle(indexes);

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var $square = $squares.eq(index);
      var dataSquare = _dataSquares[index];
      if (dataSquare === 0) {
        $square.addClass('active');
        _dataSquares[index] = 1;
        break;
      }
    }
  }, 1000);


  $game.click('.square', function(e) {
    var $square = $(e.target);
    if ($square.hasClass('active')) {
      $square.removeClass('active');
      var index = parseInt($square.attr('data-id'));
      _dataSquares[index] = 0;
      var score = $score.text();
      score = parseInt(score);
      $score.text(score + 10);
    }
  });
});






