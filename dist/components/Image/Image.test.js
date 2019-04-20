'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Image', function () {
  var props = void 0;
  var mounted = void 0;
  var image = function image() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Image2.default, props));
    }
    return mounted;
  };
  describe('Image', function () {
    beforeEach(function () {
      props = {
        alt: 'This is an image',
        src: 'logo.png'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Image2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = image().find('img');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});