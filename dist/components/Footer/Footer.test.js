'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Footer', function () {
  var props = void 0;
  var mounted = void 0;
  var footer = function footer() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_Footer2.default, props));
    }
    return mounted;
  };
  describe('footer', function () {
    beforeEach(function () {
      props = {
        sections: [{
          name: 'Features',
          sections: [{
            name: 'Cool stuff',
            url: 'https://front10.com'
          }, {
            name: 'Random feature',
            url: 'https://front10.com'
          }, {
            name: 'Team feature',
            url: 'https://front10.com'
          }, {
            name: 'Stuff for developers',
            url: 'https://front10.com'
          }, {
            name: 'Another one',
            url: 'https://front10.com'
          }, {
            name: 'Last time',
            url: 'https://front10.com'
          }]
        }]
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement('footer', props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = footer().find('footer');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('should render sections', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ul;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ul = footer().find('ul');


              expect(ul.length).toBeGreaterThan(0);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});