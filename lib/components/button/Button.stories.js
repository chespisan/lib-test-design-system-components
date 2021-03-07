var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from '.';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';
export default {
    title: 'Components/Button',
    component: Button,
};
var Template = function (args) { return _jsx(Button, __assign({}, args), void 0); };
export var Default = Template.bind({});
Default.args = {
    children: 'Default Button'
};
export var DangerButton = Template.bind({});
DangerButton.args = {
    children: 'Danger Button',
    type: 'danger',
};
export var Ghost = Template.bind({});
Ghost.args = {
    children: 'Ghost Button',
    type: 'ghost',
};
export var Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    type: 'secondary',
};
export var Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled Button',
    disabled: true
};
export var Loading = Template.bind({});
Loading.args = {
    children: 'Button',
    loading: true,
};
export var WithIcon = Template.bind({});
WithIcon.args = {
    icon: DownloadIcon,
    children: 'Download',
};
var ButtonRow = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  & > * {\n    margin-right: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  & > * {\n    margin-right: 10px;\n  }\n"])));
export var Sizes = function () {
    return (_jsxs(_Fragment, { children: [_jsxs(ButtonRow, { children: [_jsx(Button, __assign({ size: 'large' }, { children: "Large" }), void 0),
                    _jsx(Button, __assign({ size: 'default' }, { children: "Default" }), void 0),
                    _jsx(Button, __assign({ size: 'small' }, { children: "Small" }), void 0)] }, void 0),
            _jsxs(ButtonRow, { children: [_jsx(Button, __assign({ type: 'danger', size: 'large' }, { children: "Large" }), void 0),
                    _jsx(Button, __assign({ type: 'danger', size: 'default' }, { children: "Default" }), void 0),
                    _jsx(Button, __assign({ type: 'danger', size: 'small' }, { children: "Small" }), void 0)] }, void 0),
            _jsxs(ButtonRow, { children: [_jsx(Button, __assign({ type: 'ghost', size: 'large' }, { children: "Large" }), void 0),
                    _jsx(Button, __assign({ type: 'ghost', size: 'default' }, { children: "Default" }), void 0),
                    _jsx(Button, __assign({ type: 'ghost', size: 'small' }, { children: "Small" }), void 0)] }, void 0),
            _jsxs(ButtonRow, { children: [_jsx(Button, __assign({ type: 'secondary', size: 'large' }, { children: "Large" }), void 0),
                    _jsx(Button, __assign({ type: 'secondary', size: 'default' }, { children: "Default" }), void 0),
                    _jsx(Button, __assign({ type: 'secondary', size: 'small' }, { children: "Small" }), void 0)] }, void 0),
            _jsxs(ButtonRow, { children: [_jsx(Button, __assign({ loading: true, disabled: true, size: 'large' }, { children: "Large" }), void 0),
                    _jsx(Button, __assign({ loading: true, disabled: true, size: 'default' }, { children: "Default" }), void 0),
                    _jsx(Button, __assign({ loading: true, disabled: true, size: 'small' }, { children: "Small" }), void 0)] }, void 0)] }, void 0));
};
var templateObject_1;
//# sourceMappingURL=Button.stories.js.map