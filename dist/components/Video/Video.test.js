'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Video', function () {
  var props = void 0;
  var mounted = void 0;
  var video = function video() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Video2.default, props));
    }
    return mounted;
  };
  describe('Video', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Video2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = video().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});