'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Section', function () {
  var props = void 0;
  var mounted = void 0;
  var section = function section() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Section2.default, props));
    }
    return mounted;
  };
  describe('Section', function () {
    beforeEach(function () {
      props = {
        gray: false,
        title: 'Front10',
        subTitle: 'Awesome team',
        className: '',
        contentClassName: '',
        children: null
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Section2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = section().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});