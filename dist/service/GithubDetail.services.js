'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GithubService = function () {
  function GithubService() {
    _classCallCheck(this, GithubService);
  }

  _createClass(GithubService, null, [{
    key: 'getRepositoriesStats',
    value: function getRepositoriesStats(username, repository) {
      return (0, _nodeFetch2.default)(_constant2.default + 'repos/' + username + '/' + repository).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'getUserFallowers',
    value: function getUserFallowers(username) {
      return (0, _nodeFetch2.default)(_constant2.default + 'users/' + username + '/followers').then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'getRepositoriesDownloads',
    value: function getRepositoriesDownloads(username, repository) {
      return (0, _nodeFetch2.default)(_constant2.default + 'repos/' + username + '/' + repository + '/downloads').then(function (response) {
        return response.json();
      });
    }
  }]);

  return GithubService;
}();

exports.default = GithubService;