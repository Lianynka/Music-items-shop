// (function() {
//     const products = [{
//             id: 1,
//             title: "Bang & Olufsen F112",
//             price: "$195,00",
//             img: 'img/headphones/AirPlus'
//         },
//         {
//             id: 2,
//             title: "Bang & Olufsen F112",
//             price: "$145,00",
//             img: "img/headphones/Bang"
//         },
//         {
//             id: 3,
//             title: "Sony TT56",
//             price: "$98,00",
//             img: "img/headphones/Sony-tt56"
//         },
//         {
//             id: 4,
//             title: "JBL 334WN",
//             price: "$140,00",
//             img: 'img/headphones/JBL 334WN'
//         },
//         {
//             id: 5,
//             title: "AirPulse BB34",
//             price: "$145,00",
//             img: "img/headphones/airplus-blue"
//         }
//     ];

//     function renderProducts(products) {
//         const productsContainer = document.querySelector('.slide');
//         productsContainer.innerHTML = "";
//         for (const product of products) {
//             productsContainer.innerHTML +=
//                 `<img src="${product.img}" alt="${product.title}">
//                 <p class="item-name">${product.title}</p>
//                 <span class="item-price">${product.price}</span>
//                 <button class="item-btn">Add to cart</button>`


//         }

//     }
//     renderProducts(products);
// })();


// (function() {
//     const products = [{
//             id: 1,
//             title: "Bang & Olufsen F112",
//             price: "$195,00",
//             img: 'img/headphones/AirPlus'
//         },
//         {
//             id: 2,
//             title: "Bang & Olufsen F112",
//             price: "$145,00",
//             img: "img/headphones/Bang"
//         },
//         {
//             id: 3,
//             title: "Sony TT56",
//             price: "$98,00",
//             img: "img/headphones/Sony-tt56"
//         }

//     ];

//     function renderProducts(products) {
//         const productsContainer = document.querySelector('.model-text');
//         productsContainer.innerHTML = "";
//         for (const product of products) {
//             productsContainer.innerHTML +=
//                 ` <li class="slide" data-active>
//                 <h2 class = "model-header">Always Clear Sound Wherever You Are</h2> 
//                 <h3 class = "model-sub-header">Model</h3> 
//                 <p class = "model-tx"> AirPulse R255</p> 
//                 <h3 class = "model-sub-header">${product.title}</h3> 
//                 <p class = "model-tx">15 hours of wireless playback and award - winning clear sound by AirPulse.These headphones are your perfect choice
//             for work, travels, or just everyday use wherever you go.</p> 
//                 <p class = "model-price">Price<span class="model-d yellow-text">${product.price}</span></p></li>`
//         }

//     }
//     renderProducts(products);
// })();



// SWIPER
// new Swiper('.class-object which should become a slider', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev' //add objects wit the same classes, to change ::after
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true, //change the size of bullets 
//         // renderBullet: function(index, className) {
//         //     return '<span class="' + className + '" >' + (index + 1) + '</span>'
//         // }
//         // type: fraction,
//         type: 'progressbar' // .swiper-pagination=progressbar-fill,
//     },
//     // scrollbar: { el: 'swiper-scrollbar', draggable: true },
//     hasNavigation: { watchState: true }, //add href
//     keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },
//     autoHeight: true,
//     slidesPerView: 4, //'auto' - .image-slider .swiper-slide {width:auto}
//     spaceBetween: 10,
//     centeredSlides: true,
//     loop: true,
//     speed: 800,
//     breakpoints: {
//         320: { slidesPerView: 1 },
//         480: { slidesPerView: 2 },
//         767: { slidesPerView: 3 }
//     }, //add data-src="real image", src="img/1*1.png" class="swoper-lazy"
//     virtual: {
//         slides:
//             (function() {
//                 let slide = []
//                 for (let i = 0; i < 500; i++) {
//                     slide.push(`<div class="imag-slider_text">Slide#${i}</div>`);
//                     return slide;
//                 }
//             }()),
//     }
// });

// flex-element = min-width: 0


//SLick 

$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshholds: 10,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        // rows: 2,
        // slidesPerRow: 2,
        // vertical:true,
        // verticalSwiping: true,
        // fade: true, //only one pictures
        // to combine sliders asNavFor : ".slider_name"
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 860,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }, ],
        mobileFirst: false,
        // appendArrows:$('.name-class'),
        // appendDots: $('.name-class')
    });
    // $('.link_add').click(function(event) {
    //     $('.slider').slick('slickAdd', '')
    // })
})