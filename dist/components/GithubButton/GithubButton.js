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

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _GithubDetail = require('../../service/GithubDetail.services');

var _GithubDetail2 = _interopRequireDefault(_GithubDetail);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GithubButton = function (_React$Component) {
  _inherits(GithubButton, _React$Component);

  function GithubButton(props) {
    _classCallCheck(this, GithubButton);

    var _this = _possibleConstructorReturn(this, (GithubButton.__proto__ || Object.getPrototypeOf(GithubButton)).call(this, props));

    _this.state = {
      counter: null,
      showCounter: false,
      showBtnText: false,
      showGithubIcon: false
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.getRepositoryStats = _this.getRepositoryStats.bind(_this);
    _this.getUserFallowers = _this.getUserFallowers.bind(_this);
    _this.openUrl = _this.openUrl.bind(_this);
    return _this;
  }

  _createClass(GithubButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          type = _props.type,
          showCounter = _props.showCounter,
          showBtnText = _props.showBtnText,
          showGithubIcon = _props.showGithubIcon,
          repository = _props.repository,
          username = _props.username;

      this.setState({
        showCounter: showCounter,
        showBtnText: showBtnText,
        showGithubIcon: showGithubIcon
      });
      if (type === 'fork' || type === 'star' || type === 'watch' || type === 'issue') {
        this.getRepositoryStats(username, repository, type);
      }
      if (type === 'follow') {
        this.getUserFallowers(username);
      }

      if (type === 'download') {
        this.setState({
          counter: null,
          showCounter: false,
          iconClass: 'fa fa-cloud-download',
          linkUrl: 'https://api.github.com/repos/' + username + '/' + repository + '/archive/master.zip'
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onChange(prevProps);
    }
  }, {
    key: 'onChange',
    value: function onChange(prevProps) {
      var _this2 = this;

      var _props2 = this.props,
          username = _props2.username,
          repository = _props2.repository,
          showCounter = _props2.showCounter,
          showGithubIcon = _props2.showGithubIcon,
          showBtnText = _props2.showBtnText,
          btnType = _props2.btnType;

      if (prevProps.showCounter !== showCounter) {
        this.setState({ showCounter: showCounter });
      }
      if (prevProps.showGithubIcon !== showGithubIcon) {
        this.setState({ showGithubIcon: showGithubIcon });
      }

      if (prevProps.showBtnText !== showBtnText) {
        this.setState({ showBtnText: showBtnText });
      }

      if (prevProps.btnType !== btnType) {
        this.setState({
          showCounter: showCounter,
          counter: null,
          showBtnText: showBtnText
        });

        if (btnType === 'fork' || btnType === 'star' || btnType === 'watch' || btnType === 'issue') {
          _GithubDetail2.default.getRepositoriesStats(username, repository).then(function (res) {
            if (btnType === 'fork') _this2.setState({
              counter: res.forks_count,
              iconClass: 'fa fa-code-fork',
              linkUrl: 'https://github.com/' + username + '/' + repository + '/fork'
            });
            if (btnType === 'star') _this2.setState({
              counter: res.stargazers_count,
              iconClass: 'fa fa-star',
              linkUrl: 'https://github.com/' + username + '/' + repository
            });
            if (btnType === 'watch') _this2.setState({
              counter: res.watchers_count,
              iconClass: 'fa fa-eye',
              linkUrl: 'https://github.com/' + username + '/' + repository + '/subscription'
            });
            if (btnType === 'issue') _this2.setState({
              counter: res.open_issues_count,
              iconClass: 'fa fa-exclamation-circle',
              linkUrl: 'https://github.com/' + username + '/' + repository + '/issues'
            });
          }).catch(function (err) {
            return err;
          });
        }
        if (btnType === 'follow') {
          _GithubDetail2.default.getUserFallowers(username).then(function (res) {
            _this2.setState({
              counter: res.length,
              iconClass: 'fa fa-github',
              linkUrl: 'https://github.com/' + username
            });
          }).catch(function (err) {
            return err;
          });
        }

        if (btnType === 'download') {
          this.setState({
            counter: null,
            showCounter: false,
            iconClass: 'fa fa-cloud-download',
            linkUrl: 'https://api.github.com/repos/' + username + '/' + repository + '/archive/master.zip'
          });
        }
      }
    }
  }, {
    key: 'getRepositoryStats',
    value: function getRepositoryStats(username, repository, btnType) {
      var _this3 = this;

      _GithubDetail2.default.getRepositoriesStats(username, repository).then(function (res) {
        if (btnType === 'fork') _this3.setState({
          counter: res.forks_count,
          iconClass: 'fa fa-code-fork',
          linkUrl: 'https://github.com/' + username + '/' + repository + '/fork'
        });
        if (btnType === 'star') _this3.setState({
          counter: res.stargazers_count,
          iconClass: 'fa fa-star',
          linkUrl: 'https://github.com/' + username + '/' + repository
        });
        if (btnType === 'watch') _this3.setState({
          counter: res.watchers_count,
          iconClass: 'fa fa-eye',
          linkUrl: 'https://github.com/' + username + '/' + repository + '/subscription'
        });
        if (btnType === 'issue') _this3.setState({
          counter: res.open_issues_count,
          iconClass: 'fa fa-exclamation-circle',
          linkUrl: 'https://github.com/' + username + '/' + repository + '/issues'
        });
      }).catch(function (err) {
        return err;
      });
    }
  }, {
    key: 'getUserFallowers',
    value: function getUserFallowers(username) {
      var _this4 = this;

      _GithubDetail2.default.getUserFallowers(username).then(function (res) {
        _this4.setState({
          counter: res.length,
          iconClass: 'fa fa-github',
          linkUrl: 'https://github.com/' + username
        });
      }).catch(function (err) {
        return err;
      });
    }
  }, {
    key: 'openUrl',
    value: function openUrl() {
      var linkUrl = this.state.linkUrl;

      if (typeof window !== 'undefined') window.open(linkUrl);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          showGithubIcon = _state.showGithubIcon,
          iconClass = _state.iconClass,
          showBtnText = _state.showBtnText,
          showCounter = _state.showCounter,
          counter = _state.counter;
      var _props3 = this.props,
          text = _props3.text,
          loadingClass = _props3.loadingClass,
          disabled = _props3.disabled,
          color = _props3.color,
          className = _props3.className;

      return _react2.default.createElement(
        'div',
        { className: className + ' GithubDetail_btn_container d-inline' },
        _react2.default.createElement(
          _Button2.default,
          _extends({
            circle: false,
            disabled: disabled,
            color: color
          }, (0, _ExtractProps2.default)('button', this.props)),
          _react2.default.createElement('i', { className: showGithubIcon ? 'fa fa-github' : iconClass, 'aria-hidden': 'true' }),
          ' ',
          showBtnText && _react2.default.createElement(
            'span',
            { className: 'buttonText' },
            text
          )
        ),
        showCounter && _react2.default.createElement(
          _Button2.default,
          _extends({
            className: 'speech-bubble',
            disabled: disabled,
            color: color,
            onClick: this.openUrl
          }, (0, _ExtractProps2.default)('counter', this.props)),
          counter != null ? counter : _react2.default.createElement(_Icon2.default, { icon: loadingClass })
        )
      );
    }
  }]);

  return GithubButton;
}(_react2.default.Component);

GithubButton.propTypes = {
  /**
   * Shows the total next to the button.
   */
  showCounter: _propTypes2.default.bool,
  /**
   * Shows the text inside the button.
   */
  showBtnText: _propTypes2.default.bool,
  /**
   * Shows github icon on the button.
   */
  showGithubIcon: _propTypes2.default.bool,
  /**
   * Shows github button disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Class to loading indicator.
   */
  loadingClass: _propTypes2.default.string,
  /**
   * Github username.
   */
  username: _propTypes2.default.string,
  /**
   * Github repository.
   */
  repository: _propTypes2.default.string,
  /**
   * What button show. Can be: <code>fork</code>,<code>follow</code>,<code>star</code>,<code>download</code>,<code>watch</code>,<code>issue</code>`
   */
  type: _propTypes2.default.string,
  /**
   * text to show inside the button
   */
  text: _propTypes2.default.string,
  /**
   * Color of button.
   */
  color: _propTypes2.default.string,
  /**
   * CSS class name selector to customs styles
   */
  className: _propTypes2.default.string
};

GithubButton.defaultProps = {
  showCounter: true,
  showBtnText: true,
  showGithubIcon: false,
  disabled: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  username: 'front10',
  repository: 'landing-page-book',
  type: 'fork',
  text: 'Fork',
  color: 'light',
  className: ''
};

exports.default = GithubButton;