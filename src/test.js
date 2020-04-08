import string from './css.js'
let n = 1
let demo=document.querySelector('#demo')
let demo2=document.querySelector('#demo2')
demo2.innerText=string.substr(0,n)
demo.innerHTML=string.substr(0,n)

let time=100;
const run=()=>{
    n=n+1;
    demo.innerHTML=string.substr(0,n)
    demo2.innerText=string.substr(0,n)
    demo2.scrollTop=demo2.scrollHeight
    if(n>string.length){
        clearInterval(intervalID)
    }
}

let play=()=>{
   return setInterval(run,time)
}
let intervalID=play();
let stop=()=>{
    window.clearInterval(intervalID)
}
let slow=()=>{
    stop();
    time=300;
    intervalID=play();
}
let normal=()=>{
    stop();
    time=100;
    intervalID=play();
}
let fast=()=>{
    stop();
    time=10;
    intervalID=play();
}
// //暂停
// document.querySelector('.btnStop').onclick=stop
// //播放
// document.querySelector('.btnPlay').onclick=play
//慢速
document.querySelector('.btnSlow').onclick=slow
//中速
document.querySelector('.btnNormal').onclick=normal
//快速
document.querySelector('.btnFast').onclick=fast