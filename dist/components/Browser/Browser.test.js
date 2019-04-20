'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Browser = require('./Browser');

var _Browser2 = _interopRequireDefault(_Browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Browser', function () {
  var props = void 0;
  var mounted = void 0;
  var browser = function browser() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Browser2.default, props));
    }
    return mounted;
  };
  describe('Browser', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    beforeEach(function () {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Browser2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = browser().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});