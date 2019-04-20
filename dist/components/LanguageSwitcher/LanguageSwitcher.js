'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlagsSelect = require('react-flags-select');

var _reactFlagsSelect2 = _interopRequireDefault(_reactFlagsSelect);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanguageSwitcher = function (_Component) {
  _inherits(LanguageSwitcher, _Component);

  function LanguageSwitcher(props) {
    _classCallCheck(this, LanguageSwitcher);

    var _this = _possibleConstructorReturn(this, (LanguageSwitcher.__proto__ || Object.getPrototypeOf(LanguageSwitcher)).call(this, props));

    _this.state = {};
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }

  _createClass(LanguageSwitcher, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.onUpdate(prevProps);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(prevProps) {
      var selectedLanguage = this.props.selectedLanguage;

      if (prevProps.selectedLanguage !== selectedLanguage) {
        this.refs.languageSwitcher.updateSelected(selectedLanguage); // eslint-disable-line
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(countryCode) {
      var onSelect = this.props.onSelect;

      onSelect({ language: countryCode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedLanguage = _props.selectedLanguage,
          languages = _props.languages,
          placeholder = _props.placeholder,
          showLabel = _props.showLabel,
          disabled = _props.disabled,
          customLabels = _props.customLabels,
          showOptionLabel = _props.showOptionLabel,
          showFlag = _props.showFlag,
          showArrow = _props.showArrow,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: ' ' + className + ' LanguageSwitcher ' + (!showFlag ? 'LanguageSwitcher--noflag' : '') + ' ' + (!showArrow ? 'LanguageSwitcher--noarrow' : '')
        },
        _react2.default.createElement(_reactFlagsSelect2.default, {
          ref: 'languageSwitcher' // eslint-disable-line
          , defaultCountry: selectedLanguage,
          disabled: disabled,
          countries: languages,
          customLabels: customLabels,
          placeholder: placeholder,
          showSelectedLabel: showLabel,
          showOptionLabel: showOptionLabel,
          onSelect: this.onSelect
        })
      );
    }
  }]);

  return LanguageSwitcher;
}(_react.Component);

LanguageSwitcher.propTypes = {
  /**
   * Show or hide the label of selected language.
   */
  showLabel: _propTypes2.default.bool,
  /**
   * Disable or enable the component.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Show or hide labels in option list.
   */
  showOptionLabel: _propTypes2.default.bool,
  /**
   * Show or hide flags.
   */
  showFlag: _propTypes2.default.bool,
  /**
   * Show or hide arrow expand.
   */
  showArrow: _propTypes2.default.bool,
  /**
   * Selected language.
   */
  selectedLanguage: _propTypes2.default.string,
  /**
   *  Placeholder to show when not selected language.
   */
  placeholder: _propTypes2.default.string,
  /**
   * Array of languages to show, an array with countries codes. The complete list of countries can be found https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js
   */
  languages: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Configure label of languages.
   */
  customLabels: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Class to apply.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Called when language selection change. Params `{language}`
   */
  onSelect: _propTypes2.default.func
};
LanguageSwitcher.defaultProps = {
  showLabel: false,
  disabled: false,
  showOptionLabel: true,
  showFlag: true,
  showArrow: true,
  selectedLanguage: '',
  placeholder: 'Language',
  languages: [],
  customLabels: {},
  className: '',
  style: null,
  onSelect: function onSelect() {}
};

exports.default = (0, _WithStyles2.default)(LanguageSwitcher);