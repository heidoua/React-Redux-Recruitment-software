import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Icon, Grid } from 'antd-mobile';
var list = ['check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis'];

var IConDemo = function (_React$Component) {
    _inherits(IConDemo, _React$Component);

    function IConDemo() {
        _classCallCheck(this, IConDemo);

        return _possibleConstructorReturn(this, (IConDemo.__proto__ || Object.getPrototypeOf(IConDemo)).apply(this, arguments));
    }

    _createClass(IConDemo, [{
        key: 'render',
        value: function render() {
            var data = list.map(function (item) {
                return {
                    icon: React.createElement(Icon, { type: item }),
                    text: item
                };
            }).concat([{
                icon: React.createElement(Icon, { type: '\uE601', size: 55, color: 'red' }),
                text: 'Customized'
            }]);
            return React.createElement(Grid, { data: data, columnNum: 3, hasLine: false });
        }
    }]);

    return IConDemo;
}(React.Component);

export default IConDemo;

export var title = 'Icon';
export var description = 'Icon Example';