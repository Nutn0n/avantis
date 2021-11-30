let vw = window.innerWidth;
let vh = window.innerHeight;
let cp = {x:0,y:0};
// document.body.dataset.cpx= cp.x;
// document.body.dataset.cpy= cp.y;

document.onmousemove = function(event) {
	cp = {x:event.pageX,y:event.pageY}
    // document.body.dataset.cpx= cp.x;
    // document.body.dataset.cpy= cp.y;
    let cppx = cp.x*3/vw;
    let cppy = (cp.y - window.pageYOffset)*5/vh;
    document.querySelector('#svg-phone').style.transform = `translate(${cppx-2}%,${cppy}%)`;
    document.querySelector('#svg_phone_2-d').style.transform = `translate(${cppx*6 - 8}%,${cppy*2 - 4}%)`;
}