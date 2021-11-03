$(function() {

    // $(document).mouseup(function (e) {
    //     var container = $('.menu, .modal');
    //     if (container.has(e.target).length === 0 && $('body').hasClass('lock')) {
    //         $('body').removeClass('.lock');
    //     }
    // });

    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__form, .menu__search, .overlay, .menu__btn').hasClass('active')) {
            $('.menu__form, .menu__search, .menu__btn').removeClass('active');
        }
    });

    $('.hero__pick-slider').slick({
        asNavFor: '.hero__content-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        centerMode: true,
        centerPadding: '105px',
    });

    $('.hero__content-slider').slick({
        asNavFor: '.hero__pick-slider',
        prevArrow: '<button type="button" class="slick-btn slick-btn--prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn--next"></button>',
        fade: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
    });

    $(".painting-card__stars").rateYo({
        rating: 3.6,
        starWidth: '12px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "3.5px",
        rating: "80%",
        readOnly: true,
    });
});

let header = document.querySelector('.header');
    enterBtn = document.querySelector('.menu__enter-btn');
    modalEl = document.querySelector('.modal');
    overlay = document.querySelector('.overlay');
    btnClose = document.querySelector('.btn--close');
    bodyLock = document.getElementById('body');
    menuBtn = document.querySelector('.menu__btn');
    menuForm = document.querySelector('.menu__form');
    menuSearch = document.querySelector('.menu__search');
    mixer = mixitup('.gallery__content');

window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);
enterBtn.addEventListener('click', onEnterBtn);
btnClose.addEventListener('click', onBtnClose);
menuBtn.addEventListener('click', onMenuBtn);

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

function onEnterBtn() {
    overlay.classList.toggle('active')
    modalEl.classList.toggle('active')
    bodyLock.classList.toggle('lock')
};

function onBtnClose() {
    overlay.classList.remove('active')
    modalEl.classList.remove('active')
    bodyLock.classList.remove('lock')
};

function onMenuBtn() {
    menuBtn.classList.toggle('active')
    menuForm.classList.toggle('active')
    menuSearch.classList.toggle('active')
};


let tab = function () {
    let tabNav = document.querySelectorAll('.btns-tabs__btn'),
        tabContent = document.querySelectorAll('.modal-form__item'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-content');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};

tab();

let cover = document.querySelector('.hero--parallax'),
    coverHeight = Math.round(cover.offsetHeight),
    translate,
    parallaxThreshold = 8;

function parallax() {
    if (window.scrollY < coverHeight) {
        translate = Math.round(window.scrollY / parallaxThreshold);
        window.requestAnimationFrame(function () {
            cover.style.transform = 'translateY(' + translate + 'px)';
        });
    }
}

parallax();

window.addEventListener('scroll', parallax, false);

window.addEventListener('resize', debounce(function () {
    coverHeight = Math.round(cover.offsetHeight);
}, 500));

function debounce(fn, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(this, arguments)
        },(wait || 1));
    }
}

// window.onload = function() {
//     document.addEventListener('click', documentActions);

//     function documentActions() {
//         // const targetElement = e.target;
//         // if (!targetElement.closest('.menu') && document.querySelectorAll('.menu__form.active, .menu__search.active, .overlay.active, .menu__btn.active').length > 0) {
//         //     removeClasses(document.querySelectorAll('.menu__form.active, .menu__search.active, .overlay.active, .menu__btn.active'), 'active');
//         // }
//         let container = document.querySelectorAll('.menu');
//         if (container.has(e.target).length === 0 && document.querySelectorAll('.menu__form, .menu__search, .overlay, .menu__btn').hasClass('.active')) {
//             document.querySelectorAll('.menu__form, .menu__search, .overlay, .menu__btn').removeClass('.active');
//         }
//     }
// }