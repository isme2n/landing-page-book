'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Backers = require('../Backers');

var _Backers2 = _interopRequireDefault(_Backers);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _BackersOpenCollective = require('../../service/BackersOpenCollective.services');

var _BackersOpenCollective2 = _interopRequireDefault(_BackersOpenCollective);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackersOpenCollective = function (_Component) {
  _inherits(BackersOpenCollective, _Component);

  function BackersOpenCollective(props) {
    _classCallCheck(this, BackersOpenCollective);

    var _this = _possibleConstructorReturn(this, (BackersOpenCollective.__proto__ || Object.getPrototypeOf(BackersOpenCollective)).call(this, props));

    _this.state = {
      backers: [],
      backersOrdered: [],
      loading: false
    };
    _this.getMembers = _this.getMembers.bind(_this);
    _this.sort = _this.sort.bind(_this);
    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }

  _createClass(BackersOpenCollective, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        backers: [],
        backersOrdered: [],
        loading: true
      }, function () {
        _this2.getMembers();
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var sortDirection = this.props.sortDirection;
      var backers = this.state.backers;

      if (prevProps.sortDirection !== sortDirection) this.sort(backers, sortDirection);
    }
  }, {
    key: 'getMembers',
    value: function getMembers() {
      var _this3 = this;

      var _props = this.props,
          collective = _props.collective,
          sortDirection = _props.sortDirection;

      _BackersOpenCollective2.default.getMembers({ collective: collective, filter: 'all' }).then(function (response) {
        var backers = response.filter(function (backer) {
          return backer.role === 'BACKER';
        }).map(function (backer) {
          return {
            name: backer.name,
            image: backer.image,
            profile: backer.profile,
            contributionAmount: backer.totalAmountDonated
          };
        });
        _this3.setState({ backers: backers, loading: false }, function () {
          _this3.sort(backers, sortDirection);
        });
      });
    }
  }, {
    key: 'sort',
    value: function sort(backers, sortDirection) {
      if (sortDirection !== 'none') {
        var back = backers.sort(function (a, b) {
          if (sortDirection === 'asc') {
            if (a.contributionAmount > b.contributionAmount) return 1;
            if (a.contributionAmount < b.contributionAmount) return -1;
          } else {
            if (a.contributionAmount < b.contributionAmount) return 1;
            if (a.contributionAmount > b.contributionAmount) return -1;
          }
          return 0;
        });
        this.setState({ backersOrdered: back });
      } else this.setState({ backersOrdered: backers });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          backersOrdered = _state.backersOrdered,
          loading = _state.loading;
      var _props2 = this.props,
          imageRounded = _props2.imageRounded,
          imageBordered = _props2.imageBordered,
          imageGray = _props2.imageGray,
          loadingClass = _props2.loadingClass,
          loadingText = _props2.loadingText,
          className = _props2.className,
          style = _props2.style;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        loading && _react2.default.createElement(
          'div',
          { className: 'text-center' },
          _react2.default.createElement(_Icon2.default, _extends({ icon: loadingClass }, (0, _ExtractProps2.default)('icon', this.props))),
          loadingText && _react2.default.createElement(
            'p',
            null,
            loadingText
          )
        ),
        !loading && _react2.default.createElement(_Backers2.default, _extends({
          backers: backersOrdered,
          imageRounded: imageRounded,
          imageBordered: imageBordered,
          imageGray: imageGray,
          className: className,
          style: style
        }, this.props))
      );
    }
  }]);

  return BackersOpenCollective;
}(_react.Component);

BackersOpenCollective.propTypes = {
  /**
   * Class name applied of the container
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * If true the image will be rounded as a circle
   */
  imageRounded: _propTypes2.default.bool,
  /**
   * If true the image will have a solid border
   */
  imageBordered: _propTypes2.default.bool,
  /**
   * If true the image doesn't show colors
   */
  imageGray: _propTypes2.default.bool,
  /**
   * Name of collective in opencollective.
   */
  collective: _propTypes2.default.string.isRequired,
  /**
   * Sort direction to show the list of backers
   */
  sortDirection: _propTypes2.default.string,
  /**
   * CSS class for loading animation
   */
  loadingClass: _propTypes2.default.string,
  /**
   * Loading text to show
   */
  loadingText: _propTypes2.default.string
};
BackersOpenCollective.defaultProps = {
  className: '',
  style: {},
  imageRounded: true,
  imageBordered: true,
  imageGray: false,
  sortDirection: 'desc',
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  loadingText: 'Loading...'
};

exports.default = (0, _WithStyles2.default)(BackersOpenCollective);