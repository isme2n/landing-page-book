'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Header', function () {
  var props = void 0;
  var mounted = void 0;
  var header = function header() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    }
    return mounted;
  };
  describe('Header', function () {
    beforeEach(function () {
      props = {
        borderTop: false,
        borderBottom: false,
        textAlign: 'left',
        icon: 'fa fa-home',
        className: '',
        color: '',
        type: 'h1',
        children: null
      };
      mounted = undefined;
    });

    beforeEach(function () {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = header().find('h1');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});