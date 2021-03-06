'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Link', function () {
  var props = void 0;
  var mounted = void 0;
  var link = function link() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Link2.default, props));
    }
    return mounted;
  };
  describe('Link', function () {
    beforeEach(function () {
      props = {
        href: "https://front10.com"
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_Link2.default, props))).toMatchSnapshot();
    });
    it('always renders a a', function () {
      var divs = link().find('a');
      expect(divs.length).toBeGreaterThan(0);
    });
  });
});