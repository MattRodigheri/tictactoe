const readline = require('readline');
const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/tictactoe');

const gameSchema = mongoose.Schema({
  1: { type: String },
  2: { type: String },
  3: { type: String },
  4: { type: String },
  5: { type: String },
  6: { type: String },
  7: { type: String },
  8: { type: String },
  9: { type: String }
});

const Game = mongoose.model('Game', gameSchema);

const addMove = (move) => {
  Game.create(move, (err) => {
    assert.equal(null, err);
    console.log(move);
    db.disconnect();
  });
};

const getBoard = (board) => {
  Game.find()
  .exec((err, board) => {
    assert.equal(null, err);
    console.info(board);
    db.disconnect();
  });
}

module.exports = { addMove, getBoard };
