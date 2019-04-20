'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Copyright = require('./Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Copyright', function () {
  var props = void 0;
  var mounted = void 0;
  var copyright = function copyright() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Copyright2.default, props));
    }
    return mounted;
  };
  describe('Copyright', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_Copyright2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = copyright().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});