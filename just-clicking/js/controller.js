// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function() {
  var init = function() {
    var clickedIndex = 0;

    var onClick = function(e) {
      var $square = $(e.target);
      if ($square.hasClass('active')) {
        $square.removeClass('active');
        var index = parseInt($square.attr('data-id'));
        JC.model.processSquareClick(index);
        if (JC.model.checkDifficulty()) {
          
        }
        render();
      }
    };

    JC.view.init(onClick);

    setInterval(function() {
      JC.model.activateRandomSquare();
      render();
    }, 1000);
  };

  var render = function() {
    JC.view.updateSquares(JC.model.getSquares());
    JC.view.updateScore(JC.model.getScore());
  };

  return {
    init: init
  };
})();
