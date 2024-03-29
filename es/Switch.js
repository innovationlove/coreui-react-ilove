var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var propTypes = {
  color: PropTypes.string,
  label: PropTypes.bool,
  outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.oneOf(['', 'alt'])]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['', '3d', 'pill']),
  className: PropTypes.string,
  dataOn: PropTypes.string,
  dataOff: PropTypes.string
};

var defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off'
};

var AppSwitch = function (_Component) {
  _inherits(AppSwitch, _Component);

  function AppSwitch(props) {
    _classCallCheck(this, AppSwitch);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.state = {
      uncontrolled: !!_this.props.defaultChecked,
      checked: _this.props.defaultChecked || _this.props.checked,
      selected: []
    };
    return _this;
  }

  AppSwitch.prototype.toggleState = function toggleState(check) {
    this.setState({
      checked: check
    });
  };

  AppSwitch.prototype.handleChange = function handleChange(event) {
    var target = event.target;
    this.toggleState(target.checked);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  AppSwitch.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  AppSwitch.prototype.handleKeyUp = function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleState(!this.state.checked);
    }
  };

  AppSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!this.state.uncontrolled && this.props.checked !== prevState.checked) {
      this.toggleState(this.props.checked);
    }
  };

  AppSwitch.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        disabled = _props.disabled,
        color = _props.color,
        name = _props.name,
        label = _props.label,
        outline = _props.outline,
        size = _props.size,
        required = _props.required,
        type = _props.type,
        value = _props.value,
        dataOn = _props.dataOn,
        dataOff = _props.dataOff,
        variant = _props.variant,
        attributes = _objectWithoutProperties(_props, ['className', 'disabled', 'color', 'name', 'label', 'outline', 'size', 'required', 'type', 'value', 'dataOn', 'dataOff', 'variant']);

    var tabindex = attributes.tabIndex;
    delete attributes.tabIndex;
    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;

    var classes = classNames(className, 'switch', label ? 'switch-label' : false, size ? 'switch-' + size : false, variant ? 'switch-' + variant : false, 'switch' + (outline ? '-outline' : '') + '-' + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');

    var inputClasses = classNames('switch-input', 'form-check-input');

    var sliderClasses = classNames('switch-slider');

    return React.createElement(
      'label',
      { className: classes, tabIndex: tabindex, onKeyUp: this.handleKeyUp, onKeyDown: this.handleKeyDown },
      React.createElement('input', _extends({ type: type,
        className: inputClasses,
        onChange: this.handleChange,
        checked: this.state.checked,
        name: name,
        required: required,
        disabled: disabled,
        value: value,
        'aria-checked': this.state.checked,
        'aria-disabled': disabled,
        'aria-readonly': disabled
      }, attributes)),
      React.createElement('span', { className: sliderClasses, 'data-checked': dataOn, 'data-unchecked': dataOff })
    );
  };

  return AppSwitch;
}(Component);

AppSwitch.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSwitch.defaultProps = defaultProps;

export default AppSwitch;