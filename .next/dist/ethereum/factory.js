'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BallotFactory = require('./build/BallotFactory.json');

var _BallotFactory2 = _interopRequireDefault(_BallotFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_BallotFactory2.default.interface), '0xaBcCE15B37577664c24472A3240E65dC9E81F215');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHdCQUFjQyxTQUF6QixDQUF0QixFQUEyRCw0Q0FBM0QsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5pbXBvcnQgQmFsbG90RmFjdG9yeSBmcm9tICcuL2J1aWxkL0JhbGxvdEZhY3RvcnkuanNvbic7XG5cbnZhciBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKEJhbGxvdEZhY3RvcnkuaW50ZXJmYWNlKSwgJzB4YUJjQ0UxNUIzNzU3NzY2NGMyNDQ3MkEzMjQwRTY1ZEM5RTgxRjIxNScpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHdCQUFjQyxTQUF6QixDQUF0QixFQUEyRCw0Q0FBM0QsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biJ9