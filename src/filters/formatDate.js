/**
 * Created by zmouse on 2017/8/22.
 * E-mail: zmouse@miaov.com
 * GitHub: zmouse@github.com
 */

export default function (value,f) {
    let str = f ? f : 'y-m-d h:i:s';
    let date = new Date(value);
// console.log(value)
    str = str.replace('y',date.getFullYear());
    str = str.replace('m',addZero(date.getMonth()));
    str = str.replace('d',addZero(date.getDate()));
    str = str.replace('h',addZero(date.getHours()));
    str = str.replace('i',addZero(date.getMinutes()));
    str = str.replace('s',addZero(date.getSeconds()));
    return str;
}

function addZero(n){
    return n < 10 ? '0'+ n : ''+ n;
}
