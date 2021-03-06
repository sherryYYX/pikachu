const string = `.skin *{box-sizing: border-box; margin:0;padding: 0;}
.shin *::after,.skin *::before{box-sizing: border-box;} 
.skin{
    position:relative; 
     min-height: 56vh;
    background: #ffe600;
}
.nose{
    border: 10px solid black;
    border-color: black transparent blue transparent;
    border-bottom: none;
    position:relative;
    width:0px;
    height:0px;
    left:50%;
    top:110px;
    margin-left:-10px;
}
.semicircle{
    background: black;
    width: 20px;
    height:6px;
    position: absolute;
    left:-10px;
    top:-16px;
    border-radius: 10px 10px 0 0;
}
.eye{
    border:2px solid #000;
    width:64px;
    height: 64px;
    position: absolute;
    left:50%;
    top:70px;
    margin-left: -32px;
    background: #353433;
    border-radius: 50%;
}
.eye::before{
    content:'';
    display: block;
    border:2px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 8px;
}
.eye.left{
    transform: translateX(-110px);
}
.eye.right{
    transform: translateX(110px);
}
.mouth{
    width: 200px;
    height:200px;
    position: relative;;
    left:50%;
    top:130px;
    margin-left:-100px;
}
.mouth .up .lip{
    border:3px solid black;
    border-top:none;
    background: #FFe700;
    width:80px;
    height: 30px;
    position:absolute;
    top:-14px;
    z-index: 1;
}
.mouth .up .lip.left{
    border-right:none;
    left:19px;
    transform: rotate(-25deg);
    border-bottom-left-radius: 6em 3em;
}
.mouth .up .lip.right{
    border-left:none;
    right:19px;
    transform: rotate(25deg);
    border-bottom-right-radius: 6em 3em;
}
.mouth .down{
    width: 100%;
    height:200px;
    position: absolute;
    left:50%;
    top:-2px;
    margin-left: -100px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border:3px solid black;
    width: 140px;
    height:460px;
    position: relative;
    left:50%;
    top:-300px;
    margin-left: -70px;
    border-radius: 98px / 300px;
    background: #9c010a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height:200px;
    background: #ff4860;
    position: absolute;
    left:50%;
    bottom: -68px;
    margin-left:-100px;
    border-radius: 100px;
}
.face{
    border:3px solid black;
    background: #ff0000;
    width:88px;
    height:88px;
    position:absolute;
    left:50%;
    margin-left:-44px;
    top:160px;
    z-index:3;
    border-radius: 50%;
}
.face.left{
    transform:translateX(-150px);
}

.face.right{
    transform: translateX(150px);
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin:center bottom ;
    animation: wave 300ms infinite linear;
}`
export default string