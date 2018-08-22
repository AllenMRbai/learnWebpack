import './fun.js'

console.log('print方法准备就绪')
export default function print(str) {
    if(typeof str!='string'){
        throw new Error('print第一个参数必须为字符串(String)');
    }
    console.log("print: "+str);
}