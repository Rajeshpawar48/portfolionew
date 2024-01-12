document.querySelector('.hamberger').addEventListener('click', function () {
    document.querySelector('ul').classList.toggle('newul');

})


document.querySelector('.dark').addEventListener('click', function () {

    // console.log(document.querySelector('.dark'));
    document.querySelector('.dark').innerHTML = `<i class="fa-solid fa-sun "></i>`
    document.querySelector('.dark').classList.toggle('p');
    document.querySelector('.p').innerHTML = `<i class="fa-solid fa-moon "></i>`

    document.querySelector('.main').classList.toggle('.white');
    // document.querySelector('.main').style = "background:black"

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


