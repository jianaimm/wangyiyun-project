/**
 * Created by yingyingguo on 17/8/30.
 */

export default function(val,f){
    let date = new Date(val);
    let str = f || 'm:s';

    str = str.replace('m',addZero(date.getMinutes()))
    str = str.replace('s',addZero(date.getSeconds()))

    return str;
}
function addZero(n){
    return n < 10 ? '0'+ n : ''+ n;
}
