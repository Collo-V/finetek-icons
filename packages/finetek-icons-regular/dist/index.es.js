import React from 'react';

function AngleDown(_ref) {
  var _style;
  let {
    className,
    style
  } = _ref;
  if (!className) className = '';
  const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default;
  style = (_style = style) !== null && _style !== void 0 ? _style : {};
  if (!className.includes('fill-')) {
    style = {
      ...style,
      fill: 'currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Icon, {
    className: className,
    style: style
  });
}
function AngleLeft(_ref2) {
  var _style2;
  let {
    className,
    style
  } = _ref2;
  if (!className) className = '';
  className += ' rotate-90';
  const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default;
  style = (_style2 = style) !== null && _style2 !== void 0 ? _style2 : {};
  if (!className.includes('fill-')) {
    style = {
      ...style,
      fill: 'currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Icon, {
    className: className,
    style: style
  });
}
function AngleRight(_ref3) {
  var _style3;
  let {
    className,
    style
  } = _ref3;
  if (!className) className = '';
  className += ' -rotate-90';
  const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default;
  style = (_style3 = style) !== null && _style3 !== void 0 ? _style3 : {};
  if (!className.includes('fill-')) {
    style = {
      ...style,
      fill: 'currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Icon, {
    className: className,
    style: style
  });
}
function AngleUp(_ref4) {
  var _style4;
  let {
    className,
    style
  } = _ref4;
  if (!className) className = '';
  className += ' rotate-180';
  const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default;
  style = (_style4 = style) !== null && _style4 !== void 0 ? _style4 : {};
  if (!className.includes('fill-')) {
    style = {
      ...style,
      fill: 'currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Icon, {
    className: className,
    style: style
  });
}
function Bars(_ref5) {
  var _style5;
  let {
    className,
    style
  } = _ref5;
  if (!className) className = '';
  const Icon = require('../assets/navigation-icons/bars-solid.svg').default;
  style = (_style5 = style) !== null && _style5 !== void 0 ? _style5 : {};
  if (!className.includes('fill-')) {
    style = {
      ...style,
      fill: 'currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Icon, {
    className: className,
    style: style
  });
}

export { AngleDown, AngleLeft, AngleRight, AngleUp, Bars };
//# sourceMappingURL=index.es.js.map
