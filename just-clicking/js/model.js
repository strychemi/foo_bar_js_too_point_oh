// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function() {

  var _dataSquares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];
  var _score = 0;
  var _difficult = false;

  var getScore = function() {
    return _score;
  };

  var getSquares = function() {
    return _dataSquares;
  };

  var activateRandomSquare = function() {
    var indexes = _.times(_dataSquares.length, function(index) {
      return index;
    });
    indexes = _.shuffle(indexes);

    for (var i = 0; i < indexes.length; i++) {
      var index = indexes[i];
      var dataSquare = _dataSquares[index];
      if (dataSquare === 0) {
        _dataSquares[index] = 1;
        break;
      }
    }
  };

  var processSquareClick = function(index) {
    if (_dataSquares[index] === 1) {
      _dataSquares[index] = 0;
      _score += 10;
      if (_score === 100 && _difficult === false) {
        _dataSquares.push([0,0,0,0,0,0,0]);
        _difficult = true;
      }
    }
  };

  var checkDifficulty = function() {
    return _difficult;
  };

  return {
    getScore: getScore,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick,
    checkDifficulty: checkDifficulty
  };

})();
