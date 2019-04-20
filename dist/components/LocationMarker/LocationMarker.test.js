'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _LocationMarker = require('./LocationMarker');

var _LocationMarker2 = _interopRequireDefault(_LocationMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('LocationMarker', function () {
  var props = void 0;
  var mounted = void 0;
  var locationMarker = function locationMarker() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_LocationMarker2.default, props));
    }
    return mounted;
  };
  describe('LocationMarker', function () {
    beforeEach(function () {
      props = {
        lat: 82,
        lng: 20
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_LocationMarker2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = locationMarker().find('i');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});