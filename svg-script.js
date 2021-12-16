let vw = window.innerWidth;
let vh = window.innerHeight;
setProp(document.body,'vw',vw)
setProp(document.body,'vh',vh)
svg_onscroll()


function svg_onscroll(){
    let scrollY = window.scrollY;
    updatePosition('#svg-board')
    updatePosition('#svg-globe')
    updatePosition('#svg-tree')
    updatePosition('#svg_phone_2')
    updatePosition('#flow-mechanism')    
    updatePosition('#title')
}

// let cp = {x:0,y:0};
// // document.body.dataset.cpx= cp.x;
// // document.body.dataset.cpy= cp.y;

// document.onmousemove = function(event) {
// 	cp = {x:event.pageX,y:event.pageY}
//     // document.body.dataset.cpx= cp.x;
//     // document.body.dataset.cpy= cp.y;
//     let cppx = cp.x*3/vw;
//     let cppy = (cp.y - window.pageYOffset)*5/vh;
//     document.querySelector('#svg-phone').style.transform = `translate(${cppx-2}%,${cppy}%)`;
//     document.querySelector('#svg_phone_2-d').style.transform = `translate(${cppx*6 - 8}%,${cppy*2 - 4}%)`;
// }

document.addEventListener('scroll', function() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    setProp(document.body,'vw',vw)
    setProp(document.body,'vh',vh)
    svg_onscroll()
});


function setProp(el,p,v){
    el.style.setProperty('--'+p,v);
}

function $(s){
    return document.querySelector(s)
}
function $$(s){
    return document.querySelectorAll(s)
}

function updatePosition(s){
    let el = $(s)
    let data = el.getClientRects()[0]
    let screen = {'onscreen':0,'top':data.top,'bottom':vh-data.top,'b_px':0,'b_pct':0,'t_px':0,'t_pct':0}
    if (screen.top+data.height>=0 && screen.bottom>=0){
        screen.onscreen = 1;
        screen.b_px = parseInt(screen.bottom)
        screen.t_px = parseInt(screen.top)
    }
    if(screen.top+data.height<=0){
        screen.onscreen = -1;
        screen.t_px = parseInt(data.height*-1)
    }
    if(screen.bottom>vh){
        screen.b_px = vh
    }
    if(screen.top>vh){
        screen.t_px = vh
    }
    screen.b_pct = parseInt(screen.b_px*100/vh)
    screen.t_pct = parseInt(screen.t_px*100/vh)
    setProp(el,'screen-t-px',screen.t_px)
    setProp(el,'screen-b-px',screen.b_px)
    setProp(el,'screen-t-pct',screen.t_pct)
    setProp(el,'screen-b-pct',screen.b_pct)
    setProp(el,'screen-visible',screen.onscreen)
    setProp(el,'screen-t-sin',Math.abs(Math.sin(screen.t_pct/5)*100))
    el.dataset.onscreen = screen.onscreen
}