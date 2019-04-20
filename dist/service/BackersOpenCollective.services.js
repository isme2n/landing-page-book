'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

var BackersOpenCollective = function () {
  function BackersOpenCollective() {
    _classCallCheck(this, BackersOpenCollective);
  }

  _createClass(BackersOpenCollective, null, [{
    key: 'getMembers',
    value: function getMembers(_ref) {
      var collective = _ref.collective,
          filter = _ref.filter;

      return (0, _nodeFetch2.default)(proxyUrl + 'https://opencollective.com/' + collective + '/members/' + filter + '.json').then(function (blob) {
        return blob.json();
      });
    }
  }]);

  return BackersOpenCollective;
}();

exports.default = BackersOpenCollective;