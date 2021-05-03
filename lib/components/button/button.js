var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { StyledButton } from "./styles/button.styled";
var Button = function (props, ref) {
    var as = props.as, children = props.children, className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, href = props.href, icon = props.icon, loading = props.loading, onClick = props.onClick, _b = props.round, round = _b === void 0 ? false : _b, _c = props.size, size = _c === void 0 ? "default" : _c, _d = props.type, type = _d === void 0 ? "basic" : _d, to = props.to;
    var styles = {
        innerType: type,
        size: size,
        disabled: disabled,
        withText: children !== null,
        round: round,
    };
    return (_jsx(StyledButton, __assign({ as: "button", type: "button", onClick: onClick, ref: ref, className: className }, styles, { children: children }), void 0));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map