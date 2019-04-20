'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    var value = _this.props.value;

    _this.state = { value: value };
    _this.onChange = _this.onChange.bind(_this);
    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var value = this.props.value;

      if (prevProps.value !== value) this.setState({ value: value });
    }
  }, {
    key: 'onChange',
    value: function onChange($event) {
      var onChange = this.props.onChange;

      this.setState({ value: $event.target.value });
      onChange({ value: $event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          type = _props.type,
          id = _props.id,
          name = _props.name,
          placeholder = _props.placeholder,
          label = _props.label,
          icon = _props.icon,
          iconAlign = _props.iconAlign,
          size = _props.size,
          style = _props.style;

      var inputcls = className;
      if (size) inputcls += ' form-control-' + size;
      var value = this.state.value;

      var props = {
        className: 'form-control ' + inputcls + ' ' + (icon ? 'Input__Container__Conponent--' + iconAlign : ''),
        type: type,
        name: name,
        id: id,
        value: value,
        placeholder: placeholder,
        onChange: this.onChange
      };

      return _react2.default.createElement(
        'div',
        { style: style },
        label && _react2.default.createElement(_Label2.default, { content: label, htmlFor: id }),
        _react2.default.createElement(
          'div',
          { className: 'Input__Container' },
          type !== 'textarea' && _react2.default.createElement('input', props),
          type === 'textarea' && _react2.default.createElement('textarea', props),
          icon && _react2.default.createElement(_Icon2.default, {
            icon: icon,
            className: 'Input__Container__Icon Input__Container__Icon--' + iconAlign
          })
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  /**
   *  CSS Class to apply to input.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   *  Input type. Can be <code>'text'</code>, <code>'number'</code>, <code>'email'</code> and <code>'textarea'</code>
   */
  type: _propTypes2.default.string,
  /**
   * Input id.
   */
  id: _propTypes2.default.string,
  /**
   * Input name.
   */
  name: _propTypes2.default.string,
  /**
   * Input value.
   */
  value: _propTypes2.default.string,
  /**
   * Input placeholder.
   */
  placeholder: _propTypes2.default.string,
  /**
   *  Icon to show with input.
   */
  icon: _propTypes2.default.string,
  /**
   * Align of icon. Can be <code>'left'</code> and <code>'right'</code>
   */
  iconAlign: _propTypes2.default.string,
  /**
   * Label to show on input top.
   */
  label: _propTypes2.default.string,
  /**
   * Size of input. Can be <code>'lg'</code> or <code>'sm'</code>.
   */
  size: _propTypes2.default.string,
  /**
   * Called when input change. Params `{value}`
   */
  onChange: _propTypes2.default.func
};
Input.defaultProps = {
  className: '',
  style: null,
  type: 'text',
  id: '',
  name: '',
  value: '',
  placeholder: '',
  label: '',
  size: '',
  icon: '',
  iconAlign: 'left',
  onChange: function onChange() {}
};

exports.default = (0, _WithStyles2.default)(Input);