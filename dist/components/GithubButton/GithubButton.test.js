'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _GithubButton = require('./GithubButton');

var _GithubButton2 = _interopRequireDefault(_GithubButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('GithubButton', function () {
  var props = void 0;
  var mounted = void 0;

  var githubButton = function githubButton() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_GithubButton2.default, props));
    }
    return mounted;
  };

  describe('GithubButton', function () {
    beforeEach(function () {
      props = {
        btnType: 'fork',
        btnText: 'Forks',
        username: 'front10',
        repository: 'landing-page-book'
      };
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_GithubButton2.default, props))).toMatchSnapshot();
    });

    it('always renders a span', function () {
      var span = githubButton().find('span');

      expect(span.length).toBeGreaterThan(0);
    });

    it('onchange', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var prevProps;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              prevProps = {
                btnType: 'star',
                btnText: 'Stars',
                username: 'front10',
                repository: 'landing-page-book'
              };
              _context.next = 3;
              return githubButton().instance().onChange(prevProps);

            case 3:

              expect(githubButton().state()).toEqual({
                counter: null,
                showBtnText: true,
                showCounter: true,
                showGithubIcon: false
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});