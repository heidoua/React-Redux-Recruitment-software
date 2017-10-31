export default function alert(title: any, message: any, actions?: {
    text: string;
}[], platform?: string): {
    close: () => void;
};
