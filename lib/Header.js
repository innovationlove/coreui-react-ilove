'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  fixed: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

var defaultProps = {
  tag: 'header',
  fixed: false
};

var AppHeader = function (_Component) {
  _inherits(AppHeader, _Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppHeader.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  AppHeader.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  };

  // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }

  AppHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.fixed;

    var classes = (0, _classnames2.default)(className, 'app-header', 'navbar');

    return _react2.default.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppHeader;
}(_react.Component);

AppHeader.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppHeader.defaultProps = defaultProps;

exports.default = AppHeader;
module.exports = exports['default'];