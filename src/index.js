import _ from 'lodash';
import './style.css'
import myImage from './img/book.png'
import print from './print'

function component() {
    var element=document.createElement('div');
    element.innerHTML=_.join(['Hello','webpack','happy','黄引齐招牌体']," ");
    element.className="colorB";
    print('标题装载完毕')
    return element;
}

function img(url){
    var ele=document.createElement('img');
    ele.src=url;
    ele.classList.add('pic')
    print('图片装载完毕')
    return ele;
}

document.body.appendChild(component());
document.body.appendChild(img(myImage));
