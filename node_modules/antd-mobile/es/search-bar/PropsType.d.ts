export interface SearchBarProps {
    style?: any;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    onSubmit?: Function;
    onChange?: Function;
    onFocus?: () => void;
    onBlur?: () => void;
    onCancel?: Function;
    showCancelButton?: boolean;
    cancelText?: string;
    disabled?: boolean;
    styles?: any;
    autoFocus?: boolean;
    focused?: boolean;
    onClear?: Function;
    maxLength?: number;
}
export interface SearchBarState {
    value?: string;
    focus?: boolean;
    focused?: boolean;
}
export declare const defaultProps: {
    prefixCls: string;
    placeholder: string;
    onSubmit: () => void;
    onChange: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onClear: () => void;
    showCancelButton: boolean;
    disabled: boolean;
};
