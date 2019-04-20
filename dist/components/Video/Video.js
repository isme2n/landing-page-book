'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          source = _props.source,
          playing = _props.playing,
          loop = _props.loop,
          controls = _props.controls,
          volume = _props.volume,
          muted = _props.muted,
          className = _props.className,
          onReady = _props.onReady,
          onStart = _props.onStart,
          onPlay = _props.onPlay,
          onProgress = _props.onProgress,
          onDuration = _props.onDuration,
          onPause = _props.onPause,
          onBuffer = _props.onBuffer,
          onSeek = _props.onSeek,
          onEnded = _props.onEnded,
          onError = _props.onError,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: 'Video ' + className, style: style },
        _react2.default.createElement(_reactPlayer2.default, {
          url: source,
          playing: playing,
          loop: loop,
          controls: controls,
          volume: volume,
          muted: muted,
          onReady: onReady,
          onStart: onStart,
          onPlay: onPlay,
          onProgress: onProgress,
          onDuration: onDuration,
          onPause: onPause,
          onBuffer: onBuffer,
          onSeek: onSeek,
          onEnded: onEnded,
          onError: onError
        })
      );
    }
  }]);

  return Video;
}(_react.Component);

Video.propTypes = {
  /**
   * Set to true or false to pause or play the media.
   */
  playing: _propTypes2.default.bool,
  /**
   * Set to true or false to loop the media.
   */
  loop: _propTypes2.default.bool,
  /**
   * Set to true or false to display native player controls. Vimeo, Twitch and Wistia player will always display controls.
   */
  controls: _propTypes2.default.bool,
  /**
   * Mutes the player.
   */
  muted: _propTypes2.default.bool,
  /**
   * Set the volume of the player, between 0 and 1.
   */
  volume: _propTypes2.default.number,
  /**
   * The url of a video or song to play.
   */
  source: _propTypes2.default.string,
  /**
   * Class to apply to button.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * Called when media is loaded and ready to play. If playing is set to true, media will play immediately
   */
  onReady: _propTypes2.default.func,
  /**
   * Called when media starts playing
   */
  onStart: _propTypes2.default.func,
  /**
   * Called when media starts or resumes playing after pausing or buffering
   */
  onPlay: _propTypes2.default.func,
  /**
   * Callback containing played and loaded progress as a fraction ('{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }')
   */
  onProgress: _propTypes2.default.func,
  /**
   * Callback containing duration of the media, in seconds
   */
  onDuration: _propTypes2.default.func,
  /**
   * Called when media is paused
   */
  onPause: _propTypes2.default.func,
  /**
   * Called when media starts buffering
   */
  onBuffer: _propTypes2.default.func,
  /**
   * Called when media seeks with seconds parameter
   */
  onSeek: _propTypes2.default.func,
  /**
   * Called when media finishes playing
   */
  onEnded: _propTypes2.default.func,
  /**
   * Called when an error occurs whilst attempting to play media
   */
  onError: _propTypes2.default.func
};
Video.defaultProps = {
  playing: false,
  loop: false,
  controls: true,
  muted: false,
  volume: 1,
  source: '',
  className: '',
  style: null,
  onReady: function onReady() {},
  onStart: function onStart() {},
  onPlay: function onPlay() {},
  onProgress: function onProgress() {},
  onDuration: function onDuration() {},
  onPause: function onPause() {},
  onBuffer: function onBuffer() {},
  onSeek: function onSeek() {},
  onEnded: function onEnded() {},
  onError: function onError() {}
};

exports.default = (0, _WithStyles2.default)(Video);