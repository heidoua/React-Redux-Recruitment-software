export function getRedirectPath({ type, avatar }){

    // 根据用户信息返回跳转地址
    let url = (type === 'boss') ? '/boss' : '/genius';

    if (!avatar){
        url += 'info';
    }
    
    return url;
} 