import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var ListView = function (_React$Component) {
    _inherits(ListView, _React$Component);

    function ListView() {
        _classCallCheck(this, ListView);

        return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));
    }

    _createClass(ListView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.warn('React Native ListView has been officially marked as `DEPRECATED`,' + ' see https://facebook.github.io/react-native/docs/listview.html for details.');
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return ListView;
}(React.Component);

export default ListView;