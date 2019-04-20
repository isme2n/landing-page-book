'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Sponsors = require('./Sponsors');

var _Sponsors2 = _interopRequireDefault(_Sponsors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Sponsors', function () {
  var props = void 0;
  var mounted = void 0;
  var sponsors = function sponsors() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Sponsors2.default, props));
    }
    return mounted;
  };
  describe('Sponsors', function () {
    beforeEach(function () {
      props = {
        gray: false,
        sponsors: []
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_Sponsors2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = sponsors().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});