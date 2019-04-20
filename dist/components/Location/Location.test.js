'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Location', function () {
  var props = void 0;
  var mounted = void 0;
  var location = function location() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Location2.default, props));
    }
    return mounted;
  };
  describe('Location', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Location2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = location().find('div');

      expect(divs.length).toBe(0);
    });
  });
});