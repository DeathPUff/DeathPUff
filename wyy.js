var img=document.getElementById('img');
var bbb=document.querySelector('.bbb');
var ccc=document.querySelector('.ccc');

var bum=0;

ccc.onclick=function(){
    bum++;
    if(bum>=6){
        bum=0
    }
    img.src='11'+ (bum+1) +'.jpg'
}

bbb.onclick=function(){
    bum--;
    if(bum<=1){
        bum=7
    }
    img.src='11'+(bum-1)+'.jpg'
}