'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Code', function () {
  var props = void 0;
  var mounted = void 0;
  var code = function code() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Code2.default, props));
    }
    return mounted;
  };

  describe('Code', function () {
    beforeEach(function () {
      props = {
        languageCode: 'javascript',
        collapsible: true,
        collapsed: false,
        theme: 'monokai',
        codeLink: '',
        readOnly: false,
        lineNumbers: true,
        showheader: true,
        showDeleteButton: true,
        showCopyButton: true,
        children: null,
        code: '<h1>Title</h1>',
        updateCode: function updateCode() {}
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Code2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = code().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('copy to clipboard', function () {
      code().instance().copyToClipboard();

      expect(code().state('scopied')).toBeTruthy();
    });

    it('Should Collapse', function () {
      code().instance().toggleCollapse();

      expect(code().state('collapsed')).toBeTruthy();
      expect(code().state('hideMessages')).toMatch(/Show code/);
    });
  });
});