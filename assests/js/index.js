

    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('.main'),
    // smooth: true
    //     });

document.querySelector('.hamberger').addEventListener('click', function () {
    document.querySelector('ul').classList.toggle('newul');

})


document.querySelector('.dark').addEventListener('click', function () {

    console.log(document.querySelector('.dark'));
    document.querySelector('.dark').innerHTML = `<i class="fa-solid fa-sun "></i>`
    document.querySelector('.dark').classList.toggle('p');
    document.querySelector('.p').innerHTML = `<i class="fa-solid fa-sun "></i>`

// if(classList='p'){
// // alert('oky')
// document.body.style="background:black;color:white";
//     document.querySelector('.section1').style= "background:black;color:white";
//     document.querySelector('.header').style = "background:black;color:white";
//     document.querySelector('.section2').style = "background:black;color:white";
//     document.querySelector('.section3').style = "background:black;color:black";
//     document.querySelector('.scetion4').style = "background:black;color:black";
//     document.querySelector('.section5').style = "background:black;color:black";
//     document.querySelector('.section6').style = "background:black;color:white";
//     document.querySelector('.footer').style = "background:black;color:white";
//     document.querySelector('footer').style = "background:black;color:white";

// }
// document.querySelector('.p').addEventListener('click',function (){
//     // alert()
//     // classList.add('dark')

//     document.querySelector('.p').classList.toggle('light');
//     document.querySelector('.light').innerHTML =`<i class="fa-regular fa-moon"></i>`
// })
})

//  dark.innerHTML = `<i class="fa-solid fa-sun "></i>`;
// `<i class="fa-regular fa-moon"></i>`;

gsap.to('.one', {
    y: -130,
    duration: 1
})


gsap.to('.three', {
    y: 70
    , duration: 1
})

// gsap.to('.left', {
//     y: -70
//     , duration: 1
// })
gsap.to('.parentall', {
    y: -70,
    scrollTrigger: {
        trigger: 'left',
        // markers: 'true',
        scroller: 'body',
        start: 'top -370',
        // scrub:2,
        // pin:'true'
    }
    , duration: 1
})


gsap.from('.left', {
    // y: 500,
    y: 120,
    scrollTrigger: {
        trigger: 'left',
        // markers: 'true',
        scroller: 'body',
        start: 'top -300',
        // scrub:2,
        // pin:'true'
    },
    duration: 1
})
gsap.to('.skills', {
    y: -90,
    scrollTrigger: {
        trigger: 'skills',
        scroller: 'body',
        // markers: true,
        start: 'top -780',
        scrub: 1,
        pin: 'true'
    },
    duration: 1
})


gsap.to('.services', {

    y: -160,

    scrollTrigger: {
        // markers: 'true',
        trigger: 'services',
        scroller: 'body',
        start: 'top -1250',
        scrub: 1,
        pin: 'true'
    },
    // duration:1
})

gsap.to('.contactform', {

    y: -80,

    scrollTrigger: {
        // markers: 'true',
        trigger: 'contactform',
        scroller: 'body',
        start: 'top -2800',
        // scrub: 2,
        // pin: 'true'
    },
    // duration:1
})

