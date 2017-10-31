/// <reference types="react" />
import { ModalProps as BasePropsType, ModalComponent } from './PropsType';
export interface ModalProps extends BasePropsType {
    prefixCls?: string;
    transitionName?: string;
    maskTransitionName?: string;
    className?: string;
    wrapClassName?: string;
    wrapProps?: {};
    platform?: string;
}
export default class Modal extends ModalComponent<ModalProps, any> {
    static defaultProps: {
        prefixCls: string;
        transparent: boolean;
        popup: boolean;
        animationType: string;
        animated: boolean;
        style: {};
        onShow(): void;
        footer: never[];
        closable: boolean;
        operation: boolean;
        platform: string;
    };
    renderFooterButton(button: any, prefixCls: any, i: any): JSX.Element;
    render(): JSX.Element;
}
