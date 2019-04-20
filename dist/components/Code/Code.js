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

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Navbar = require('../Navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavbarNav = require('../NavbarNav/NavbarNav');

var _NavbarNav2 = _interopRequireDefault(_NavbarNav);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Container = require('../Container/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var CodeMirror = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/sass/sass');
}
/* eslint-enable */

var Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code(props) {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

    var _this$props = _this.props,
        code = _this$props.code,
        readOnly = _this$props.readOnly,
        languageCode = _this$props.languageCode,
        lineNumbers = _this$props.lineNumbers,
        showheader = _this$props.showheader,
        collapsed = _this$props.collapsed;

    _this.state = {
      scode: code,
      sreadOnly: readOnly,
      slanguageCode: languageCode,
      slineNumbers: lineNumbers,
      sshowheader: showheader,
      collapsed: collapsed,
      hideMessages: collapsed ? 'Show code' : 'Hide code'
    };
    _this.updateCode = _this.updateCode.bind(_this);
    _this.toggleReadOnly = _this.toggleReadOnly.bind(_this);
    _this.copyToClipboard = _this.copyToClipboard.bind(_this);
    _this.clearCode = _this.clearCode.bind(_this);
    _this.onUpdate = _this.onUpdate.bind(_this);
    _this.toggleCollapse = _this.toggleCollapse.bind(_this);
    return _this;
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /* eslint-disable react/no-string-refs */
      if (this.refs.editor) this.refs.editor.getCodeMirror().refresh();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var _this2 = this;

      var _props = this.props,
          readOnly = _props.readOnly,
          lineNumbers = _props.lineNumbers,
          languageCode = _props.languageCode,
          code = _props.code,
          showheader = _props.showheader,
          collapsed = _props.collapsed;


      if (prevProps.readOnly !== readOnly) {
        this.setState({
          sreadOnly: readOnly
        });
      }
      if (prevProps.lineNumbers !== lineNumbers) {
        this.setState({
          slineNumbers: lineNumbers
        });
      }
      if (prevProps.languageCode !== languageCode) {
        this.setState({ slanguageCode: languageCode });
      }
      if (prevProps.code !== code) {
        this.setState({ scode: code }, function () {
          _this2.refs.editor.getCodeMirror().setValue(code);
        });
      }

      if (prevProps.collapsed !== collapsed) {
        this.setState({ collapsed: collapsed });
      }

      if (prevProps.showheader !== showheader) {
        this.setState({ sshowheader: showheader });
      }
    }
  }, {
    key: 'updateCode',
    value: function updateCode(newCode) {
      var _this3 = this;

      this.setState({ scode: newCode, scopied: false }, function () {
        var updateCode = _this3.props.updateCode;

        updateCode(newCode);
      });
    }
  }, {
    key: 'clearCode',
    value: function clearCode() {
      var _this4 = this;

      this.setState({ scode: '', scopied: false }, function () {
        var updateCode = _this4.props.updateCode;

        updateCode('');
        _this4.refs.editor.getCodeMirror().setValue('');
      });
    }
  }, {
    key: 'toggleReadOnly',
    value: function toggleReadOnly() {
      var _this5 = this;

      var sreadOnly = this.state.sreadOnly;

      this.setState({
        sreadOnly: !sreadOnly
      }, function () {
        return _this5.refs.editor.focus();
      });
    }
  }, {
    key: 'copyToClipboard',
    value: function copyToClipboard() {
      this.setState({ scopied: true });
    }
  }, {
    key: 'toggleCollapse',
    value: function toggleCollapse() {
      var collapsed = this.state.collapsed;

      this.setState({ collapsed: !collapsed, hideMessages: !collapsed ? 'Show code' : 'Hide code' });
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint no-script-url: "error" */
      var _state = this.state,
          sreadOnly = _state.sreadOnly,
          slanguageCode = _state.slanguageCode,
          slineNumbers = _state.slineNumbers,
          sshowheader = _state.sshowheader,
          scode = _state.scode,
          scopied = _state.scopied,
          collapsed = _state.collapsed,
          hideMessages = _state.hideMessages;
      var _props2 = this.props,
          theme = _props2.theme,
          codeLink = _props2.codeLink,
          children = _props2.children,
          collapsible = _props2.collapsible,
          showDeleteButton = _props2.showDeleteButton,
          showCopyButton = _props2.showCopyButton,
          buttonTextColor = _props2.buttonTextColor;

      var options = {
        lineNumbers: slineNumbers,
        readOnly: sreadOnly,
        mode: slanguageCode,
        theme: theme
      };
      return _react2.default.createElement(
        'div',
        { className: 'CodeMirror__Container' },
        children && _react2.default.createElement(
          'div',
          { className: 'p-2' },
          children
        ),
        !collapsed && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          sshowheader && _react2.default.createElement(
            _Navbar2.default,
            _extends({ className: 'CodeMirror__header' }, (0, _ExtractProps2.default)('header', this.props)),
            _react2.default.createElement(
              _NavbarNav2.default,
              { alignItems: 'right' },
              codeLink && _react2.default.createElement(
                _Button2.default,
                _extends({ className: 'CodeMirror_btn' }, (0, _ExtractProps2.default)('button', this.props)),
                _react2.default.createElement(
                  _Link2.default,
                  { href: codeLink, target: '_blank', tooltip: 'Test code' },
                  _react2.default.createElement(_Icon2.default, { icon: 'fa fa-codepen', role: 'link', textColor: buttonTextColor })
                )
              ),
              showCopyButton && _react2.default.createElement(
                _reactCopyToClipboard.CopyToClipboard,
                { text: scode, onCopy: this.copyToClipboard },
                _react2.default.createElement(
                  _Button2.default,
                  _extends({
                    onClick: this.copyToClipboard,
                    className: 'btn ' + (scopied ? 'disabled' : '') + ' CodeMirror_btn',
                    tooltip: 'Copy'
                  }, (0, _ExtractProps2.default)('button', this.props)),
                  _react2.default.createElement(_Icon2.default, { icon: 'fa fa-clone', role: 'link' })
                )
              ),
              showDeleteButton && _react2.default.createElement(
                _Button2.default,
                _extends({
                  onClick: this.clearCode,
                  className: 'btn ' + (sreadOnly ? 'disabled' : '') + ' CodeMirror_btn',
                  tooltip: 'Clear'
                }, (0, _ExtractProps2.default)('button', this.props)),
                _react2.default.createElement(_Icon2.default, { icon: 'fa fa-trash-o' })
              )
            )
          ),
          CodeMirror && _react2.default.createElement(CodeMirror, {
            ref: 'editor',
            value: scode,
            onChange: this.updateCode,
            options: options,
            autoFocus: true
          })
        ),
        collapsible && _react2.default.createElement(
          _Navbar2.default,
          _extends({ className: 'CodeMirror__footer' }, (0, _ExtractProps2.default)('footer', this.props)),
          _react2.default.createElement(
            _Container2.default,
            { className: 'text-center' },
            _react2.default.createElement(
              _Button2.default,
              _extends({
                onClick: this.toggleCollapse,
                className: 'btn CodeMirror_btn'
              }, (0, _ExtractProps2.default)('button', this.props)),
              _react2.default.createElement(_Icon2.default, { icon: 'fa fa-code' }),
              _react2.default.createElement(
                'span',
                { className: 'ml-2' },
                hideMessages
              )
            )
          )
        )
      );
    }
  }]);

  return Code;
}(_react2.default.Component);

Code.propTypes = {
  /**
   * No allow to change the code
   */
  readOnly: _propTypes2.default.bool,
  /**
   * Define if component is collapsible
   */
  collapsible: _propTypes2.default.bool,
  /**
   * Define if component is collapsed
   */
  collapsed: _propTypes2.default.bool,
  /**
   * Shows line numbers
   */
  lineNumbers: _propTypes2.default.bool,
  /**
   * Shows header bar
   */
  showheader: _propTypes2.default.bool,
  /**
   * Show or hide delete button
   */
  showDeleteButton: _propTypes2.default.bool,
  /**
   * Show or hide copy button
   */
  showCopyButton: _propTypes2.default.bool,
  /**
   * Code to show on component
   */
  code: _propTypes2.default.string.isRequired,
  /**
   * language in which the code is written to embellish the syntax
   */
  languageCode: _propTypes2.default.string,
  /**
   * Theme of code
   */
  theme: _propTypes2.default.string,
  /**
   * Link to code, ex: CodeSandbox, CodePen
   */
  codeLink: _propTypes2.default.string,
  /**
   * Background color of the buttons in the header
   */
  buttonBgColor: _propTypes2.default.string,
  /**
   * Hide or show buttons border
   */
  buttonBorderNone: _propTypes2.default.bool,
  /**
   * Color of the buttons in the header
   */
  buttonTextColor: _propTypes2.default.string,
  /**
   * Paddin top of the buttons in the header
   */
  buttonPaddingTop: _propTypes2.default.string,
  /**
   * Paddin bottom of the buttons in the header
   */
  buttonPaddingBottom: _propTypes2.default.string,
  /**
   * Function to handle the change made in the code.
   */
  updateCode: _propTypes2.default.func,
  /**
   * Array of element to show inside Code
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

Code.defaultProps = {
  languageCode: 'javascript',
  collapsible: false,
  collapsed: false,
  theme: 'monokai',
  codeLink: '',
  readOnly: false,
  lineNumbers: true,
  showheader: true,
  showDeleteButton: true,
  showCopyButton: true,
  children: null,
  buttonBgColor: 'dark',
  buttonTextColor: 'warning',
  buttonBorderNone: true,
  buttonPaddingTop: '0',
  buttonPaddingBottom: '0',
  updateCode: function updateCode() {}
};

exports.default = Code;