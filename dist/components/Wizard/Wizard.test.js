'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Wizard = require('./Wizard');

var _Wizard2 = _interopRequireDefault(_Wizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Wizard', function () {
  var props = void 0;
  var mounted = void 0;
  var wizard = function wizard() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Wizard2.default, props));
    }
    return mounted;
  };
  describe('Wizard', function () {
    beforeEach(function () {
      props = {
        steps: [{
          name: 'Step 1',
          component: _react2.default.createElement(
            'div',
            null,
            'Hello'
          )
        }]
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Wizard2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = wizard().find('button');

      expect(divs.length).toBe(0);
    });
  });
});