"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("../components/styles/main.css");
var Modal = function Modal(_ref) {
  var title = _ref.title,
    image = _ref.image,
    text = _ref.text,
    show = _ref.show;
  var _useState = (0, _react.useState)(show),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container",
    style: {
      display: !showModal ? "none" : "flex"
    }
  }, image ? /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "icon of modal",
    className: "image-modal"
  }) : null, title ? /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal-title"
  }, title) : null, text ? /*#__PURE__*/_react.default.createElement("p", null, text) : null, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-button",
    onClick: function onClick() {
      return setShowModal(false);
    }
  }, "OK"));
};
var _default = Modal;
exports.default = _default;