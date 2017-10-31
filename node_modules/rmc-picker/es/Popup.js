import React from 'react';
import Modal from 'rmc-dialog';
import PopupMixin from './PopupMixin';
import Touchable from 'rmc-feedback';
var getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;

  if (!visible) {
    return null;
  }
  var prefixCls = props.prefixCls;

  return React.createElement(
    Modal,
    { prefixCls: '' + prefixCls, className: props.className || '', visible: true, closable: false, transitionName: props.transitionName || props.popupTransitionName, maskTransitionName: props.maskTransitionName, onClose: hide, style: props.style },
    React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: prefixCls + '-header' },
        React.createElement(
          Touchable,
          { activeClassName: prefixCls + '-item-active' },
          React.createElement(
            'div',
            { className: prefixCls + '-item ' + prefixCls + '-header-left', onClick: onDismiss },
            props.dismissText
          )
        ),
        React.createElement(
          'div',
          { className: prefixCls + '-item ' + prefixCls + '-title' },
          props.title
        ),
        React.createElement(
          Touchable,
          { activeClassName: prefixCls + '-item-active' },
          React.createElement(
            'div',
            { className: prefixCls + '-item ' + prefixCls + '-header-right', onClick: onOk },
            props.okText
          )
        )
      ),
      getContent()
    )
  );
};
export default PopupMixin(getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange'
});