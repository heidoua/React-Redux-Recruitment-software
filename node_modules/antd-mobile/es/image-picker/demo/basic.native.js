import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { ImagePicker, WhiteSpace } from 'antd-mobile';
import { View } from 'react-native';

var ImagePickerExample = function (_React$Component) {
    _inherits(ImagePickerExample, _React$Component);

    function ImagePickerExample(props) {
        _classCallCheck(this, ImagePickerExample);

        var _this = _possibleConstructorReturn(this, (ImagePickerExample.__proto__ || Object.getPrototypeOf(ImagePickerExample)).call(this, props));

        _this.handleFileChange = function (files) {
            _this.setState({
                files: files
            });
        };
        _this.handleFile2Change = function (files2) {
            _this.setState({
                files2: files2
            });
        };
        _this.state = {
            files: [{
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2121'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2122'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2123'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2124'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2125'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2126'
            }],
            files2: []
        };
        return _this;
    }

    _createClass(ImagePickerExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                { style: { marginTop: 20, marginLeft: 20 } },
                React.createElement(ImagePicker, { onChange: this.handleFileChange, files: this.state.files }),
                React.createElement(WhiteSpace, null),
                React.createElement(ImagePicker, { onChange: this.handleFile2Change, files: this.state.files2 })
            );
        }
    }]);

    return ImagePickerExample;
}(React.Component);

export default ImagePickerExample;