'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _BackersOpenCollective = require('./BackersOpenCollective');

var _BackersOpenCollective2 = _interopRequireDefault(_BackersOpenCollective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Backers', function () {
  var props = void 0;
  var mounted = void 0;
  var backersOpenCollective = function backersOpenCollective() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_BackersOpenCollective2.default, props));
    }
    return mounted;
  };
  describe('BackersOpenCollective', function () {
    beforeEach(function () {
      props = {
        collective: 'webpack'
      };
      mounted = undefined;
    });

    beforeEach(function () {
      props = {
        collective: 'chrome'
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_BackersOpenCollective2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = backersOpenCollective().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('sort function', function () {
      var backers = [{ contributionAmount: 1, name: 'Nick', image: 'image.jpg' }, { contributionAmount: 23, name: 'John', image: 'image.jpg' }];
      backersOpenCollective().instance().sort(backers, 'asc');

      expect(backersOpenCollective().state('backersOrdered')[0].name).toEqual('Nick');
    });
  });
});