$(function() {
    
    $(document).mouseup(function (e) {
        var container = $('.menu, .modal');
        if (container.has(e.target).length === 0 && $('body').hasClass('lock')) {
            $('body').removeClass('lock');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__form, .menu__search, .overlay, .menu__btn').hasClass('active')) {
            $('.menu__form, .menu__search, .menu__btn').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.modal, .menu');
        if (container.has(e.target).length === 0 && $('.overlay, .modal, .menu__inner, .menu__burger, .menu__box').hasClass('active')) {
            $('.overlay, .modal, .menu__inner, .menu__burger, .menu__box').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.overlay').hasClass('_active')) {
            $('.overlay').removeClass('_active');
        }
    });

    $( ".menu__item--dropdown" ).click(function() {
        $( ".menu-dropdown" ).slideToggle( "slow", function() {
        
        });
    });

    $('.hero__pick-slider').slick({
        asNavFor: '.hero__content-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        centerMode: true,
        centerPadding: '105px',
        responsive: [
            {
                breakpoint: 1890,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                }
            },
        ]
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

    
    let isMobile = false;
    let isDestroyed = true;
    if (window.innerWidth <= 576) isMobile = true;

    function initializeSlick() {
        $('.gallery-filters').slick({
            prevArrow: '<button type="button" class="slick-btn slick-btn--prev"><<<</button>',
            nextArrow: '<button type="button" class="slick-btn slick-btn--next">>>></button>',
            slidesToScroll: 1,
        });
        isDestroyed = false;
    }

    function destroySlick() {
        $('.gallery-filters').slick('unslick');
            isDestroyed = true;
    }

    if (isMobile && isDestroyed) initializeSlick();
    else if (!isMobile && !isDestroyed) destroySlick();

    window.addEventListener('resize', function () {
        if (!isMobile && window.innerWidth <= 576) isMobile = true;
        if (isMobile && window.innerWidth > 576) isMobile = false;

        if (isMobile && isDestroyed) initializeSlick();
        else if (!isMobile && !isDestroyed) destroySlick();
    });

    $(".painting-card__stars").rateYo({
        rating: 3.6,
        starWidth: '14px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "1px",
        rating: "80%",
        readOnly: true,
    });

    $('.btn--item').on('click', function() {
        $('.btn--item').toggleClass('active')
    })

    $('.btn--style').on('click', function() {
        $('.btn--style').toggleClass('active')
    })

    $('.btn--material').on('click', function() {
        $('.btn--material').toggleClass('active')
    })

    $('.btn--color').on('click', function() {
        $('.btn--color').toggleClass('active')
    })

    $('.btn--price').on('click', function() {
        $('.btn--price').toggleClass('active')
    })

    $('.btn--size').on('click', function() {
        $('.btn--size').toggleClass('active')
    })




    $( ".btn--style" ).click(function() {
        $( ".creations__filters-box--style" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--size" ).click(function() {
        $( ".creations__filters-box--size" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--price" ).click(function() {
        $( ".creations__filters-box--price" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--item" ).click(function() {
        $( ".creations__filters-box--item" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--material" ).click(function() {
        $( ".creations__filters-box--material" ).slideToggle( "slow", function() {
        
        });
    });

    $( ".btn--color" ).click(function() {
        $( ".creations__filters-box--color" ).slideToggle( "slow", function() {
        
        });
    });

    const cards = document.querySelectorAll('.creations .creations__wrapper');
    cards.forEach((card)=>{
            card.querySelector('.creations__label').addEventListener('click', () => {
            card.querySelector('.creations__label').classList.toggle('active');
        });
    })

    mixer = mixitup('.gallery__content');
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
    menuBurger = document.querySelector('.menu__burger');
    menuBlock = document.querySelector('.menu__inner');
    menuBox = document.querySelector('.menu__box');
    
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);
enterBtn.addEventListener('click', onEnterBtn);
btnClose.addEventListener('click', onBtnClose);
menuBtn.addEventListener('click', onMenuBtn);
menuBurger.addEventListener('click', onMenuBurger);

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

function onEnterBtn() {
    overlay.classList.add('active')
    modalEl.classList.add('active')
    menuBlock.classList.remove('active')
    menuBox.classList.remove('active')
    menuBurger.classList.remove('active')
    bodyLock.classList.add('lock')
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

function onMenuBurger() {
    menuBlock.classList.toggle('active')
    menuBurger.classList.toggle('active')
    overlay.classList.toggle('_active')
    overlay.classList.remove('active')
    menuBox.classList.toggle('active')
    modalEl.classList.remove('active')
    bodyLock.classList.add('lock')
};

menuBurger.addEventListener('click', function(){
    let menuBurger = document.querySelector('.menu__burger')
    menuBurger.addEventListener('click', function(){
        bodyLock.classList.toggle('lock')
    })
})

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

window.increment = function(event) {
    var btn = event.target;
    btn.clicks = ((btn.clicks || 0) + 1) % 2;
    window.clicks = (window.clicks || 0) + btn.clicks * 2 - 1;
    document.getElementById("clicks").innerText = window.clicks;
}
