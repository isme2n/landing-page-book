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

var _emailValidator = require('email-validator');

var _emailValidator2 = _interopRequireDefault(_emailValidator);

var _ContactUs = require('../../service/ContactUs.services');

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('../FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_Component) {
  _inherits(ContactUs, _Component);

  function ContactUs(props) {
    _classCallCheck(this, ContactUs);

    var _this = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));

    var _this$props = _this.props,
        name = _this$props.name,
        mail = _this$props.mail,
        phone = _this$props.phone,
        message = _this$props.message,
        loading = _this$props.loading;

    _this.state = {
      name: name,
      mail: mail,
      phone: phone,
      message: message,
      loading: loading
    };
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChangeName = _this.onChangeName.bind(_this);
    _this.onChangeMail = _this.onChangeMail.bind(_this);
    _this.onChangePhone = _this.onChangePhone.bind(_this);
    _this.onChangeMessage = _this.onChangeMessage.bind(_this);
    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }

  _createClass(ContactUs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var _props = this.props,
          name = _props.name,
          mail = _props.mail,
          phone = _props.phone,
          message = _props.message,
          loading = _props.loading;

      if (prevProps.name !== name) this.setState({ name: name });
      if (prevProps.mail !== mail) this.setState({ mail: mail });
      if (prevProps.phone !== phone) this.setState({ phone: phone });
      if (prevProps.message !== message) this.setState({ message: message });
      if (prevProps.loading !== loading) this.setState({ loading: loading });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var _this2 = this;

      var _props2 = this.props,
          onSubmit = _props2.onSubmit,
          apiUrl = _props2.apiUrl,
          onApiSuccess = _props2.onApiSuccess,
          onApiFail = _props2.onApiFail;

      onSubmit(this.state);
      if (apiUrl) {
        this.setState({ loading: true }, function () {
          var _state = _this2.state,
              name = _state.name,
              mail = _state.mail,
              phone = _state.phone,
              message = _state.message;

          _ContactUs2.default.send(apiUrl, name, mail, phone, message).then(function () {
            onApiSuccess();
            _this2.setState({ loading: false });
          }).catch(function () {
            onApiFail();
            _this2.setState({ loading: false });
          });
        });
      }
    }
  }, {
    key: 'onChangeName',
    value: function onChangeName(_ref) {
      var value = _ref.value;

      this.setState({ name: value });
    }
  }, {
    key: 'onChangeMail',
    value: function onChangeMail(_ref2) {
      var value = _ref2.value;

      this.setState({ mail: value });
    }
  }, {
    key: 'onChangePhone',
    value: function onChangePhone(_ref3) {
      var value = _ref3.value;

      this.setState({ phone: value });
    }
  }, {
    key: 'onChangeMessage',
    value: function onChangeMessage(_ref4) {
      var value = _ref4.value;

      this.setState({ message: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          nameText = _props3.nameText,
          mailText = _props3.mailText,
          phoneText = _props3.phoneText,
          messageText = _props3.messageText,
          showText = _props3.showText,
          showPlaceholder = _props3.showPlaceholder,
          submitButtonText = _props3.submitButtonText,
          submitButtonAlign = _props3.submitButtonAlign,
          submitButtonColor = _props3.submitButtonColor,
          className = _props3.className;
      var _state2 = this.state,
          name = _state2.name,
          mail = _state2.mail,
          phone = _state2.phone,
          message = _state2.message,
          loading = _state2.loading;

      return _react2.default.createElement(
        'div',
        { className: 'ContactUs ' + className },
        _react2.default.createElement(
          _FormGroup2.default,
          null,
          _react2.default.createElement(_Input2.default, _extends({
            label: showText ? nameText : '',
            id: 'contactNameTextLabel',
            placeholder: showPlaceholder ? nameText : '',
            value: name,
            onChange: this.onChangeName
          }, (0, _ExtractProps2.default)('input', this.props)))
        ),
        _react2.default.createElement(
          _FormGroup2.default,
          null,
          _react2.default.createElement(_Input2.default, _extends({
            label: showText ? mailText : '',
            type: 'email',
            id: 'contactEmailTextLabel',
            placeholder: showPlaceholder ? mailText : '',
            value: mail,
            onChange: this.onChangeMail
          }, (0, _ExtractProps2.default)('input', this.props)))
        ),
        _react2.default.createElement(
          _FormGroup2.default,
          null,
          _react2.default.createElement(_Input2.default, _extends({
            label: showText ? phoneText : '',
            id: 'contactPhoneTextLabel',
            placeholder: showPlaceholder ? phoneText : '',
            value: phone,
            onChange: this.onChangePhone
          }, (0, _ExtractProps2.default)('input', this.props)))
        ),
        _react2.default.createElement(
          _FormGroup2.default,
          null,
          _react2.default.createElement(_Input2.default, _extends({
            label: showText ? messageText : '',
            type: 'textarea',
            id: 'contactMessageTextLabel',
            placeholder: showPlaceholder ? messageText : '',
            value: message,
            onChange: this.onChangeMessage
          }, (0, _ExtractProps2.default)('input', this.props)))
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-' + submitButtonAlign },
          _react2.default.createElement(
            _Button2.default,
            _extends({
              loading: loading,
              disabled: !name || !message || !_emailValidator2.default.validate(mail) || loading,
              onClick: this.onSubmit,
              color: submitButtonColor
            }, (0, _ExtractProps2.default)('button', this.props)),
            submitButtonText
          )
        )
      );
    }
  }]);

  return ContactUs;
}(_react.Component);

ContactUs.propTypes = {
  /**
   * Class to apply to icon
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Show or hide labels to inputs
   */
  showText: _propTypes2.default.bool,
  /**
   * Show or hide placeholders to inputs
   */
  showPlaceholder: _propTypes2.default.bool,
  /**
   * Define if component is loading
   */
  loading: _propTypes2.default.bool,
  /**
   * Label and placeholder of name input
   */
  nameText: _propTypes2.default.string,
  /**
   *  Label and placeholder of email input
   */
  mailText: _propTypes2.default.string,
  /**
   *  Label and placeholder of phone input
   */
  phoneText: _propTypes2.default.string,
  /**
   * Label and placeholder of message input
   */
  messageText: _propTypes2.default.string,
  /**
   * Value of name input
   */
  name: _propTypes2.default.string,
  /**
   *  Value of mail input
   */
  mail: _propTypes2.default.string,
  /**
   * Value of phone input
   */
  phone: _propTypes2.default.string,
  /**
   * Value of message input
   */
  message: _propTypes2.default.string,
  /**
   * Label of submit button
   */
  submitButtonText: _propTypes2.default.string,
  /**
   * Align of Submit button
   */
  submitButtonAlign: _propTypes2.default.string,
  /**
   * Color of Submit button
   */
  submitButtonColor: _propTypes2.default.string,
  /**
   * Url to send contact data, component make a request via post method and send <code>name</code>, <code>email</code>, <code>phone</code> and <code>message</code> params
   */
  apiUrl: _propTypes2.default.string,
  /**
   * Function called when Submit button has clicked. Params <code>{name, mail, phone, message}</code>
   */
  onSubmit: _propTypes2.default.func,
  /**
   * Function called when <code>apiUrl</code> is defined and request was executed successfully
   */
  onApiSuccess: _propTypes2.default.func,
  /**
   * Function called when <code>apiUrl</code> is defined and request was error
   */
  onApiFail: _propTypes2.default.func
};
ContactUs.defaultProps = {
  className: '',
  style: null,
  showText: false,
  showPlaceholder: true,
  loading: false,
  nameText: 'Your Name',
  mailText: 'Your Email',
  phoneText: 'Your Phone',
  messageText: 'Your Message',
  name: '',
  mail: '',
  phone: '',
  message: '',
  submitButtonText: 'Submit',
  submitButtonAlign: 'center',
  submitButtonColor: 'default',
  apiUrl: '',
  onSubmit: function onSubmit() {},
  onApiSuccess: function onApiSuccess() {},
  onApiFail: function onApiFail() {}
};

exports.default = (0, _WithStyles2.default)(ContactUs);