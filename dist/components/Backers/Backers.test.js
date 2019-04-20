'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Backers = require('./Backers');

var _Backers2 = _interopRequireDefault(_Backers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Backers', function () {
  var props = void 0;
  var mounted = void 0;
  var backers = function backers() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Backers2.default, props));
    }
    return mounted;
  };
  describe('Backers', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    beforeEach(function () {
      props = {
        vendor: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Backers2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = backers().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('calls componentDidMount', function () {
      var spy = jest.spyOn(_Backers2.default.prototype, 'componentDidMount');
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Backers2.default, props));

      expect(spy).toBeCalled();
      afterEach(function () {
        spy.mockClear();
      });
    });

    it('Formating data', function () {
      backers().instance().formatData({
        backers: [{
          name: 'Alberto Roman Vieito',
          profile: 'https://twitter.com/romanvieito',
          image: 'https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg',
          contributionAmount: '125'
        }]
      });

      expect(backers().state('backers')).toMatchObject([{
        image: 'https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg',
        tooltip: '$125 by Alberto Roman Vieito',
        url: 'https://twitter.com/romanvieito'
      }]);
    });
  });
});