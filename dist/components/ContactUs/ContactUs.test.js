'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _ContactUs = require('./ContactUs');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('ContactUs', function () {
  var props = void 0;
  var mounted = void 0;
  var contactUs = function contactUs() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_ContactUs2.default, props));
    }
    return mounted;
  };
  describe('ContactUs', function () {
    beforeEach(function () {
      props = {
        name: 'name',
        mail: 'mail@gmail.com',
        phone: '5476',
        message: 'This is a new message'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_ContactUs2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = contactUs().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('on change message', function () {
      var $event = { value: 'abc' };
      contactUs().instance().onChangeMessage($event);

      expect(contactUs().state('message')).toEqual('abc');
    });

    it('on change phone', function () {
      var $event = { value: '5476' };
      contactUs().instance().onChangePhone($event);

      expect(contactUs().state('phone')).toEqual('5476');
    });

    it('on change email', function () {
      var $event = { value: 'abc@gmail.com' };
      contactUs().instance().onChangeMail($event);

      expect(contactUs().state('mail')).toEqual('abc@gmail.com');
    });

    it('on change message', function () {
      var $event = { value: 'my name' };
      contactUs().instance().onChangeName($event);

      expect(contactUs().state('name')).toEqual('my name');
    });
  });
});