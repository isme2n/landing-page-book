'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Icon', function () {
  var props = void 0;
  var mounted = void 0;
  var icon = function icon() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Icon2.default, props));
    }
    return mounted;
  };
  describe('Icon', function () {
    beforeEach(function () {
      props = {
        icon: 'fa fa-home'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_Icon2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = icon().find('i');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});