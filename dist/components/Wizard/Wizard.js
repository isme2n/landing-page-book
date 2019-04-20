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

var _main = require('react-stepzilla/dist/main');

var _main2 = _interopRequireDefault(_main);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wizard = function (_Component) {
  _inherits(Wizard, _Component);

  function Wizard(props) {
    _classCallCheck(this, Wizard);

    var _this = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, props));

    var _this$props = _this.props,
        startAtStep = _this$props.startAtStep,
        steps = _this$props.steps;

    _this.state = { currentItem: steps[startAtStep].name };
    _this.onStepChange = _this.onStepChange.bind(_this);
    return _this;
  }

  _createClass(Wizard, [{
    key: 'onStepChange',
    value: function onStepChange(step) {
      var _props = this.props,
          steps = _props.steps,
          onStepChange = _props.onStepChange;

      this.setState({ currentItem: steps[step].name });
      onStepChange({ step: step });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          showNavigation = _props2.showNavigation,
          showHeaderBorder = _props2.showHeaderBorder,
          prevBtnOnLastStep = _props2.prevBtnOnLastStep,
          dontValidate = _props2.dontValidate,
          preventEnterSubmission = _props2.preventEnterSubmission,
          startAtStep = _props2.startAtStep,
          nextButtonText = _props2.nextButtonText,
          backButtonText = _props2.backButtonText,
          nextButtonCls = _props2.nextButtonCls,
          backButtonCls = _props2.backButtonCls,
          nextTextOnFinalActionStep = _props2.nextTextOnFinalActionStep,
          hocValidationAppliedTo = _props2.hocValidationAppliedTo,
          contentAlign = _props2.contentAlign,
          showHeader = _props2.showHeader,
          steps = _props2.steps,
          className = _props2.className,
          style = _props2.style;
      var currentItem = this.state.currentItem;

      return _react2.default.createElement(
        'div',
        { className: 'Wizard' },
        _react2.default.createElement(
          _Card2.default,
          { contentAlign: contentAlign, className: className, style: style },
          showHeader && _react2.default.createElement(
            _Header2.default,
            _extends({
              type: 'h5',
              className: 'pb-3',
              borderBottom: showHeaderBorder
            }, (0, _ExtractProps2.default)('header', this.props)),
            currentItem
          ),
          _react2.default.createElement(_main2.default, {
            showNavigation: showNavigation,
            showSteps: false,
            stepsNavigation: false,
            prevBtnOnLastStep: prevBtnOnLastStep,
            dontValidate: dontValidate,
            preventEnterSubmission: preventEnterSubmission,
            startAtStep: startAtStep,
            nextButtonText: nextButtonText,
            backButtonText: backButtonText,
            nextButtonCls: nextButtonCls,
            backButtonCls: backButtonCls,
            nextTextOnFinalActionStep: nextTextOnFinalActionStep,
            hocValidationAppliedTo: hocValidationAppliedTo,
            steps: steps,
            onStepChange: this.onStepChange
          })
        )
      );
    }
  }]);

  return Wizard;
}(_react.Component);

Wizard.propTypes = {
  /**
   * Class name of header.
   */
  className: _propTypes2.default.string,
  /**
   * Show or hide the header with steps.
   */
  showHeader: _propTypes2.default.bool,
  /**
   * Show or hide the header bottom border.
   */
  showHeaderBorder: _propTypes2.default.bool,
  /**
   * Hide or show Next and Previous Buttons at the bottom.
   */
  showNavigation: _propTypes2.default.bool,
  /**
   * Show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back).
   */
  prevBtnOnLastStep: _propTypes2.default.bool,
  /**
   * Dev control to disable validation rules called in step components.
   */
  dontValidate: _propTypes2.default.bool,
  /**
   * By default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour.
   */
  preventEnterSubmission: _propTypes2.default.bool,
  /**
   * Specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially).
   */
  startAtStep: _propTypes2.default.number,
  /**
   * Specify the next button text.
   */
  nextButtonText: _propTypes2.default.string,
  /**
   * Specify the back button text.
   */
  backButtonText: _propTypes2.default.string,
  /**
   * Specify the next button class.
   */
  nextButtonCls: _propTypes2.default.string,
  /**
   * Specify the back button class.
   */
  backButtonCls: _propTypes2.default.string,
  /**
   * Specify what the next button text should be in the step before the last.
   */
  nextTextOnFinalActionStep: _propTypes2.default.string,
  /**
   * Specify the align of wizard components. Can be <code>'left'</code>, <code>'right'</code> and <code>'center'</code>
   */
  contentAlign: _propTypes2.default.string,
  /**
   * Its recommended that you use basic javascript validation.
   */
  hocValidationAppliedTo: _propTypes2.default.arrayOf(_propTypes2.default.number),
  /**
   * List of steps.
   */
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.element.isRequired
  })).isRequired,
  /**
   * Called when 'Back' or 'Next' button is clicked.
   */
  onStepChange: _propTypes2.default.func,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Wizard.defaultProps = {
  className: '',
  showHeader: true,
  showHeaderBorder: true,
  showNavigation: true,
  prevBtnOnLastStep: true,
  dontValidate: true,
  preventEnterSubmission: true,
  startAtStep: 0,
  nextButtonText: 'Next',
  backButtonText: 'Back',
  nextButtonCls: 'btn btn-primary pull-right',
  backButtonCls: 'btn btn-primary pull-left',
  nextTextOnFinalActionStep: 'Next',
  contentAlign: 'left',
  hocValidationAppliedTo: [],
  style: null,
  onStepChange: function onStepChange() {}
};

exports.default = (0, _WithStyles2.default)(Wizard);