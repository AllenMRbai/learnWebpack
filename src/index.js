// import _ from 'lodash';
import './style.css'
import myImage from './img/book.png'
import _ from 'lodash';
import $ from 'jquery';
import happy from './happy'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', 'happy', "异步加载的模块",'热更新中'], " ");
    console.log('异步加载了模块')
    element.className = "colorB";
    element.onclick=function(evt){
        import(/*webpackChunkName:"print"*/'./print').then(function (module) {
            var print=module.default;
            print('加载完了，用以下 allen')
        })
    }
    console.log('标题装载完毕')
    return element;
}

function img(url) {
    var ele = document.createElement('img');
    ele.src = url;
    ele.classList.add('pic')
    console.log('图片装载完毕')
    return ele;
}

function importJson(){
    return new Promise(function (resolve,reject) {
        var language="allen"
        import(
            /*webpackInclude:/\.json$/*/
            /*webpackExclude:/\.noimport\.json$/*/
            /*webpackChunkName:"allen"*/
            /*webpackMode:"lazy"*/
            `./locale/${language}`
            ).then(all=>{
                console.log("all",all)
                resolve(all.default);
        })
    })
}

document.body.appendChild(component());

document.body.appendChild(img(myImage));

importJson().then(function (resolve) {
    console.log(resolve)
})

var title=$('.colorB').text();

happy()

