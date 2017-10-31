import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Modal from './Modal';
import modalStyle from './style/index.native';

var OperationContainer = function (_React$Component) {
    _inherits(OperationContainer, _React$Component);

    function OperationContainer(props) {
        _classCallCheck(this, OperationContainer);

        var _this = _possibleConstructorReturn(this, (OperationContainer.__proto__ || Object.getPrototypeOf(OperationContainer)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true
        };
        return _this;
    }

    _createClass(OperationContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                actions = _props.actions,
                onAnimationEnd = _props.onAnimationEnd;

            var footer = actions.map(function (button) {
                var orginPress = button.onPress || function () {};
                button.onPress = function () {
                    var res = orginPress();
                    if (res && res.then) {
                        res.then(function () {
                            _this2.onClose();
                        });
                    } else {
                        _this2.onClose();
                    }
                };
                return button;
            });
            return React.createElement(Modal, { operation: true, transparent: true, maskClosable: true, visible: this.state.visible, onClose: this.onClose, onAnimationEnd: onAnimationEnd, style: modalStyle.operationContainer, bodyStyle: modalStyle.operationBody, footer: footer });
        }
    }]);

    return OperationContainer;
}(React.Component);

export default OperationContainer;