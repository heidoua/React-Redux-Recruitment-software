'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antdMobile = require('antd-mobile');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ImagePickerExample = function (_React$Component) {
    (0, _inherits3['default'])(ImagePickerExample, _React$Component);

    function ImagePickerExample(props) {
        (0, _classCallCheck3['default'])(this, ImagePickerExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImagePickerExample.__proto__ || Object.getPrototypeOf(ImagePickerExample)).call(this, props));

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

    (0, _createClass3['default'])(ImagePickerExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { marginTop: 20, marginLeft: 20 } },
                _react2['default'].createElement(_antdMobile.ImagePicker, { onChange: this.handleFileChange, files: this.state.files }),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(_antdMobile.ImagePicker, { onChange: this.handleFile2Change, files: this.state.files2 })
            );
        }
    }]);
    return ImagePickerExample;
}(_react2['default'].Component);

exports['default'] = ImagePickerExample;
module.exports = exports['default'];