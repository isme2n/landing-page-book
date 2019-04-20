'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Paragraph = require('./Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Paragraph', function () {
  var props = void 0;
  var mounted = void 0;
  var Paragraph = function Paragraph() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(Paragraph, props));
    }
    return mounted;
  };
  describe('Paragraph', function () {
    beforeEach(function () {
      props = { text: "Testing Paragraph" };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(Paragraph, props))).toMatchSnapshot();
    });

    it('always renders a Paragraph', function () {
      var div = Paragraph().find('p');
      expect(div.length).toBeGreaterThan(0);
    });
  });
});