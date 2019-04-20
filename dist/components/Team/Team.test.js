'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Team = require('./Team');

var _Team2 = _interopRequireDefault(_Team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Team', function () {
  var props = void 0;
  var mounted = void 0;
  var team = function team() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Team2.default, props));
    }
    return mounted;
  };
  describe('Team', function () {
    beforeEach(function () {
      props = {
        showBorder: true,
        showImage: true,
        showName: true,
        showJob: true,
        showSummary: true,
        imageCircle: true,
        imageBorder: false,
        socialGray: false,
        shadow: false,
        imageShadow: false,
        topColor: 'transparent',
        contentAlign: 'center',
        members: [{
          image: '/images/team/ninja.svg',
          job: 'Ninja',
          name: 'Leonardo',
          profile: [{
            social: 'facebook',
            url: 'https://www.facebook.com/JavaScriptTeam/'
          }, {
            social: 'twitter',
            url: 'https://twitter.com/front10hello?lang=es'
          }],
          summary: 'Leonardo, nickname Leo, is a fictional character and one of the four main characters in the Teenage Mutant Ninja Turtles comics and related media.'
        }, {
          image: '/images/team/bohemian.svg',
          job: 'Painter',
          name: 'Van Gogh',
          profile: [{
            social: 'facebook',
            url: 'https://www.facebook.com/JavaScriptTeam/'
          }, {
            social: 'email',
            url: 'https://front10.com'
          }]
        }]
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Team2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = team().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});