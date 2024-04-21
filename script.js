function homepageAnimation(){
    gsap.set(".slidesm", {scale: 5})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:1
    }
}) 
tl.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2
},'x')//will give same flage(parameter) to make animations run alternatively
.to(".slidesm", {
    scale:1,
    ease: Power2
},'x')
.to(".lft", {
    xPercent: -20 ,
    ease: Power4
},'y')
.to(".rgt", {
    xPercent: 20 ,
    ease: Power4
},'y')
}
homepageAnimation();

function realAnimation(){
    gsap.to(".slide",{
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub:1
        },
        xPercent:-320,
        ease:Power4
    })
}
realAnimation();
function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(elem){
        elem.addEventListener("mousemove", function(dets){
            
            gsap.to(this.querySelector(".picture"),{opacity:1, x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), ease: Power4, duration: .5})
            //addEventListener mai agr aap this likhte ho toh aap uss elem ke baare mai baat krte ho jisme vo event occur ho raha hai
        })
        elem.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{opacity:0, ease: Power4, duration: .5})
        })
    })
}
teamAnimation();
function paraAnimation(){
    var clutter = "";
    document.querySelector(".text-para").textContent.split("").forEach(function(e){
        if(e == " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".text-para").innerHTML = clutter;
gsap.set(".text-para span", {opacity: .1})
gsap.to(".text-para span",{
    scrollTrigger:{
        trigger: ".para",
        start:"top 60%",
        end:"bottom 90%",
        scrub:1,
        
    },
    opacity:1,
    stagger:.03,
    ease: Power4
})
}
paraAnimation();
function paraAnimation2(){
    var clutter = "";
    document.querySelector(".text-para2").textContent.split("").forEach(function(e){
        if(e == " ") {
            clutter += `<span>&nbsp;</span>`
        }
        clutter += `<span class="opacity-10">${e}</span>`
    })
    document.querySelector(".text-para2").innerHTML = clutter;
gsap.set(".text-para2 span", {opacity: .1})
gsap.to(".text-para2 span",{
    scrollTrigger:{
        trigger: ".para",
        start:"top 80%",
        end:"bottom 90%",
        scrub:1,
        
    },
    opacity:1,
    stagger:.03,
    ease: Power4
})
}
paraAnimation2();
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();
function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}
capsuleAnimation();
document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }
    })
})