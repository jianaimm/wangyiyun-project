/**
 * Created by zmouse on 2017/8/22.
 * E-mail: zmouse@miaov.com
 * GitHub: zmouse@github.com
 */

export default function(val){
    val = Number(val);
    if(Number.isNaN(val)){
        val = 0;
    }
    return val = val < 100000 ? val : Math.floor(val/10000)+'万';
}
