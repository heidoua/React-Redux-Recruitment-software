import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import { formatDate as _formatDate } from '../util';

var ConfirmPanel = function (_React$PureComponent) {
    _inherits(ConfirmPanel, _React$PureComponent);

    function ConfirmPanel() {
        _classCallCheck(this, ConfirmPanel);

        var _this = _possibleConstructorReturn(this, (ConfirmPanel.__proto__ || Object.getPrototypeOf(ConfirmPanel)).apply(this, arguments));

        _this.onConfirm = function () {
            var _this$props = _this.props,
                onConfirm = _this$props.onConfirm,
                disableBtn = _this$props.disableBtn;

            !disableBtn && onConfirm();
        };
        return _this;
    }

    _createClass(ConfirmPanel, [{
        key: 'formatDate',
        value: function formatDate(date) {
            var _props = this.props,
                _props$formatStr = _props.formatStr,
                formatStr = _props$formatStr === undefined ? '' : _props$formatStr,
                locale = _props.locale;

            return _formatDate(date, formatStr, locale);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                type = _props2.type,
                locale = _props2.locale,
                disableBtn = _props2.disableBtn;
            var _props3 = this.props,
                startDateTime = _props3.startDateTime,
                endDateTime = _props3.endDateTime;

            if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
                var tmp = startDateTime;
                startDateTime = endDateTime;
                endDateTime = tmp;
            }
            var startTimeStr = startDateTime ? this.formatDate(startDateTime) : locale.noChoose;
            var endTimeStr = endDateTime ? this.formatDate(endDateTime) : locale.noChoose;
            var btnCls = disableBtn ? 'button button-disable' : 'button';
            if (type === 'one') {
                btnCls += ' button-full';
            }
            return React.createElement(
                'div',
                { className: 'confirm-panel' },
                type === 'range' && React.createElement(
                    'div',
                    { className: 'info' },
                    React.createElement(
                        'p',
                        null,
                        locale.start,
                        ': ',
                        React.createElement(
                            'span',
                            { className: !startDateTime ? 'grey' : '' },
                            startTimeStr
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        locale.end,
                        ': ',
                        React.createElement(
                            'span',
                            { className: !endDateTime ? 'grey' : '' },
                            endTimeStr
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: btnCls, onClick: this.onConfirm },
                    locale.confirm
                )
            );
        }
    }]);

    return ConfirmPanel;
}(React.PureComponent);

export default ConfirmPanel;

ConfirmPanel.defaultProps = {
    formatStr: 'yyyy-MM-dd hh:mm'
};