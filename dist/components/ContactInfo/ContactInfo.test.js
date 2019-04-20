'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _ContactInfo = require('./ContactInfo');

var _ContactInfo2 = _interopRequireDefault(_ContactInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('ContactInfo', function () {
  var props = void 0;
  var mounted = void 0;
  var contactInfo = function contactInfo() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_ContactInfo2.default, props));
    }
    return mounted;
  };
  describe('ContactInfo', function () {
    beforeEach(function () {
      props = {
        showBorder: true,
        showIcons: true,
        lng: 0,
        lat: 0,
        locationApiKey: '',
        address: 'Front10 address',
        email: 'hello@front10.com',
        phone: '55555555',
        mobile: '5555555',
        fax: '6554 6546 4664 655546',
        website: 'www.front10.com',
        contentAlign: 'left'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_ContactInfo2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = contactInfo().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});