'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactUsService = function () {
  function ContactUsService() {
    _classCallCheck(this, ContactUsService);
  }

  _createClass(ContactUsService, null, [{
    key: 'send',
    value: function send(url, name, email, phone, message) {
      return (0, _nodeFetch2.default)(url, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      }).then(function (response) {
        return response;
      });
    }
  }]);

  return ContactUsService;
}();

exports.default = ContactUsService;