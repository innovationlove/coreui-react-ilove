var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  navConfig: PropTypes.any,
  navFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isOpen: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  router: PropTypes.any
};

var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: { variant: 'info', text: 'NEW' }
    }]
  },
  isOpen: false,
  router: { RsNavLink: RsNavLink }
};

var AppSidebarNav2 = function (_Component) {
  _inherits(AppSidebarNav2, _Component);

  function AppSidebarNav2(props) {
    _classCallCheck(this, AppSidebarNav2);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }

  AppSidebarNav2.prototype.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };

  AppSidebarNav2.prototype.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  AppSidebarNav2.prototype.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  AppSidebarNav2.prototype.getAttribs = function getAttribs(attributes) {
    return JSON.parse(JSON.stringify(attributes || {}));
  };

  // nav list


  AppSidebarNav2.prototype.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  };

  // nav type


  AppSidebarNav2.prototype.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  };

  // nav list section title


  AppSidebarNav2.prototype.navTitle = function navTitle(title, key) {
    var classes = classNames('nav-title', title.class);
    return React.createElement(
      'li',
      { key: key, className: classes },
      this.navWrapper(title),
      ' '
    );
  };

  // simple wrapper for nav-title item


  AppSidebarNav2.prototype.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  };

  // nav list divider


  AppSidebarNav2.prototype.navDivider = function navDivider(divider, key) {
    var classes = classNames('divider', divider.class);
    return React.createElement('li', { key: key, className: classes });
  };

  // nav label with nav link


  AppSidebarNav2.prototype.navLabel = function navLabel(item, key) {
    var classes = {
      item: classNames('hidden-cn', item.class),
      link: classNames('nav-label', item.class ? item.class : ''),
      icon: classNames('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? 'text-' + item.label.variant : '', item.label.class ? item.label.class : '')
    };
    return this.navLink(item, key, classes);
  };

  // nav dropdown


  AppSidebarNav2.prototype.navDropdown = function navDropdown(item, key) {
    var classIcon = classNames('nav-icon', item.icon);
    var attributes = this.getAttribs(item.attributes);
    var classes = classNames('nav-link', 'nav-dropdown-toggle', item.class, attributes.class);
    delete attributes.class;
    var itemAttr = this.getAttribs(item.itemAttr);
    var liClasses = classNames(this.activeRoute(item.url, this.props), itemAttr.class);
    delete itemAttr.class;
    return React.createElement(
      'li',
      _extends({ key: key, className: liClasses }, itemAttr),
      React.createElement(
        'a',
        _extends({ className: classes, href: '#', onClick: this.handleClick }, attributes),
        React.createElement('i', { className: classIcon }),
        item.name,
        this.navBadge(item.badge)
      ),
      React.createElement(
        'ul',
        { className: 'nav-dropdown-items' },
        this.navList(item.children)
      )
    );
  };

  // nav item with nav link


  AppSidebarNav2.prototype.navItem = function navItem(item, key) {
    var classes = {
      item: classNames(item.class),
      link: classNames('nav-link', item.variant ? 'nav-link-' + item.variant : ''),
      icon: classNames('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  // nav link


  AppSidebarNav2.prototype.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = React.createElement('i', { className: classes.icon });
    var itemBadge = this.navBadge(item.badge);
    var attributes = this.getAttribs(item.attributes);
    classes.link = classNames(classes.link, attributes.class);
    delete attributes.class;
    var itemAttr = this.getAttribs(item.itemAttr);
    classes.item = classNames(classes.item, itemAttr.class);
    delete itemAttr.class;
    var NavLink = this.props.router.NavLink || RsNavLink;
    return React.createElement(
      NavItem,
      _extends({ key: key, className: classes.item }, itemAttr),
      attributes.disabled ? React.createElement(
        RsNavLink,
        _extends({ href: '', className: classes.link }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : this.isExternal(url) || NavLink === RsNavLink ? React.createElement(
        RsNavLink,
        _extends({ href: url, className: classes.link, active: true }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : React.createElement(
        NavLink,
        _extends({ to: url, className: classes.link, activeClassName: 'active', onClick: this.hideMobile }, attributes),
        itemIcon,
        item.name,
        itemBadge
      )
    );
  };

  // badge addon to NavItem


  AppSidebarNav2.prototype.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classNames(badge.class);
      return React.createElement(
        Badge,
        { className: classes, color: badge.variant },
        badge.text
      );
    }
    return null;
  };

  AppSidebarNav2.prototype.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  AppSidebarNav2.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        navConfig = _props.navConfig,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'navConfig']);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    delete attributes.router;

    var navClasses = classNames(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

    // sidebar-nav root
    return React.createElement(
      PerfectScrollbar,
      _extends({ className: navClasses }, attributes, { options: { suppressScrollX: !isRtl } }),
      React.createElement(
        Nav,
        null,
        children || this.navList(navConfig.items)
      )
    );
  };

  return AppSidebarNav2;
}(Component);

AppSidebarNav2.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarNav2.defaultProps = defaultProps;

export default AppSidebarNav2;