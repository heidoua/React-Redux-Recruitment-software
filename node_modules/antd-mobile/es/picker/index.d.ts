import AbstractPicker from './AbstractPicker';
export default class Picker extends AbstractPicker {
    static defaultProps: {
        triggerType: string;
        prefixCls: string;
        pickerPrefixCls: string;
        popupPrefixCls: string;
        format: (values: any) => any;
        cols: number;
        cascade: boolean;
        title: string;
    };
    protected popupProps: {
        WrapComponent: string;
        transitionName: string;
        maskTransitionName: string;
    };
}
