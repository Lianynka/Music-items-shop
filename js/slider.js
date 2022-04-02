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
//         const productsContainer = document.querySelector('.tab');
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