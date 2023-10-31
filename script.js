const btn = document.querySelector('#btn');
const svgele = document.querySelector('svg');
let circle = document.querySelector('#circle');
window.addEventListener('mousemove',function(details){
    // console.log(details);

  let Valuex  = details.clientX;
   let Valuey= details.clientY;

setTimeout(function(){
    circle.style.top = `${Valuey}px`;
    circle.style.left = `${Valuex}px`;

},50);
   
});

btn.addEventListener('click',function(){
    tl.reverse();
    setTimeout(function(){
        svgele.classList.add('animate');
    },4500);
});







var tl  = gsap.timeline();


tl
.from('#wrap',{
    duration:3,
    opacity:0,
    scale:7,
    ease:'Expo.easeInOut',
})
.from('#whitestrip',{
    duration:3,
    width:0,
    ease:'Expo.easeInOut',
},'-=2')
.from('#blackcard ',{
    duration:1.5,
    opacity:0,
    x:60,
    ease:'Expo.easeInOut',
},)
.from('#whitestrip .line',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut',
},'-=1')
.from('#blackcard p',{
    duration:0.1,
    y:50,
    opacity:0,
    ease:'Expo.easeInOut',
},'-=1.5')
.from('#background h5',{
    duration:1.5,
    opacity:0,
    // width:0,
    ease:'Expo.easeInOut',
},'-=1')