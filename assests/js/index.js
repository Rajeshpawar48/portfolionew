document.querySelector('.hamberger').addEventListener('click', function () {
    document.querySelector('ul').classList.toggle('newul');

})

function fun(){
        document.querySelector('.section1').classList.toggle('light')
    document.querySelector('.section2').classList.toggle('light')
    document.querySelector('.section3').classList.toggle('light')
    document.querySelector('.skills').classList.toggle('light5')
    document.querySelector('.scetion4').classList.toggle('light2')
    document.querySelector('.section5').classList.toggle('light')
    document.querySelector('.section6').classList.toggle('light')
    // document.querySelector('.footer').classList.toggle('light5');
    document.querySelector('.footerleft').classList.toggle('light');
    document.querySelector('.footerright').classList.toggle('light');


// document.querySelector('.diwas').style='display:none'

    document.querySelector('.fa-moon').classList.toggle('diwas');
    
    document.querySelector('.diwas').innerHTML = `<i class="fa-solid fa-sun "></i>`;


    document.querySelector('.diwas').addEventListener('click', function () {
        this.innerHTML = '<i class="fa-regular fa-moon"></i>';
    })
} 


// function fun() {
    

//     document.querySelector('body').classList.toggle('light')
//     document.querySelector('.s').classList.toggle('diwas');
//     document.querySelector('.diwas').innerHTML = '🗳️';

//     document.querySelector('.diwas').addEventListener('click', function () {
//         this.innerHTML = '↗️';
//     })




// }
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

