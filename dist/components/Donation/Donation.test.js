'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Donation = require('./Donation');

var _Donation2 = _interopRequireDefault(_Donation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Donation', function () {
  var props = void 0;
  var mounted = void 0;
  var donation = function donation() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Donation2.default, props));
    }
    return mounted;
  };
  describe('Donation', function () {
    beforeEach(function () {
      props = {
        url: 'https://front10.com'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Donation2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = donation().find('img');

      expect(divs.length).toBe(0);
    });
  });
});