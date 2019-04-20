'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Analytics = require('./Analytics');

var _Analytics2 = _interopRequireDefault(_Analytics);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Analytics', function () {
  var props = void 0;
  var mounted = void 0;
  var analytics = function analytics() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Analytics2.default, props));
    }
    return mounted;
  };
  describe('Analytics', function () {
    beforeEach(function () {
      props = {
        testMode: true,
        idTracking: "U-000000-1"
      };
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_Analytics2.default, props))).toMatchSnapshot();
    });
  });
});