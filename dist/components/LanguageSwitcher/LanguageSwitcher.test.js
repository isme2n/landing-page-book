'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _LanguageSwitcher = require('./LanguageSwitcher');

var _LanguageSwitcher2 = _interopRequireDefault(_LanguageSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('LanguageSwitcher', function () {
  var props = void 0;
  var mounted = void 0;
  var lang = '';
  var languageSwitcher = function languageSwitcher() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_LanguageSwitcher2.default, props));
    }
    return mounted;
  };
  function changeLanguage(langu) {
    lang = langu;
  }
  describe('LanguageSwitcher', function () {
    beforeEach(function () {
      props = {
        showLabel: false,
        disabled: false,
        showOptionLabel: true,
        showFlag: true,
        showArrow: true,
        selectedLanguage: '',
        placeholder: 'Language',
        languages: ['US', 'ES', 'UK', 'JP'],
        customLabels: {},
        onSelect: function onSelect(l) {
          return changeLanguage(l);
        }
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_LanguageSwitcher2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = languageSwitcher().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('OnSelect', function () {
      languageSwitcher().instance().onSelect('US');

      expect(lang).toMatchObject({ language: 'US' });
    });
  });
});