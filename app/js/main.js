$(function() {
    
    $(document).mouseup(function (e) {
        var container = $('.menu, .modal');
        if (container.has(e.target).length === 0 && $('body').hasClass('lock')) {
            $('body').removeClass('lock');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.menu');
        if (container.has(e.target).length === 0 && $('.menu__form, .menu__search, .menu__btn').hasClass('active')) {
            $('.menu__form, .menu__search, .menu__btn').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.modal, .menu, .creations');
        if (container.has(e.target).length === 0 && $('.modal, .menu__inner, .menu__burger, .menu__box, .creations__filters').hasClass('active')) {
            $('.modal, .menu__inner, .menu__burger, .menu__box, .creations__filters').removeClass('active');
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

    $(".painting-card__stars, .author-card__stars").rateYo({
        starWidth: '14px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "1px",
        rating: "80%",
        readOnly: true,
    });

    $(".painting-card__card-stars").rateYo({
        starWidth: '20px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing   : "5px",
        rating: "80%",
        readOnly: true,
    });

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
        $( ".creations__filters-box--style" ).slideToggle( "slow")
    });

    $( ".btn--size" ).click(function() {
        $( ".creations__filters-box--size" ).slideToggle( "slow")
    });

    $( ".btn--price" ).click(function() {
        $( ".creations__filters-box--price" ).slideToggle( "slow")
    });

    $( ".btn--item" ).click(function() {
        $( ".creations__filters-box--item" ).slideToggle( "slow")
    });

    $( ".btn--material" ).click(function() {
        $( ".creations__filters-box--material" ).slideToggle( "slow")
    });

    $( ".btn--color" ).click(function() {
        $( ".creations__filters-box--color" ).slideToggle( "slow")
    });

    const cards = document.querySelectorAll('.creations .creations__wrapper');
    cards.forEach((card)=>{
            card.querySelector('.creations__label').addEventListener('click', () => {
            card.querySelector('.creations__label').classList.toggle('active');
        });
    })

    $('.filters-items').styler();

    $('.filters-view__btn').on('click', function() {
        $('.filters-view__btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.btn-list').on('click', function() {
        $('.modern__item, .modern__list, .modern').addClass('list');
    });

    $('.btn-grid').on('click', function() {
        $('.modern__item, .modern__list, .modern').removeClass('list');
    });

    $('.details-card__thumb-slider').slick({
        asNavFor: '.details-card__big-slider',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    vertical: false,
                }
            },
        ]
    });
    
    $('.details-card__big-slider').slick({
        asNavFor: '.details-card__thumb-slider',
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    $('.tabs-btns__btn').on('click', function() {
        $('.tabs-btns__btn').removeClass('active');
        $(this).addClass('active')
    });

    $('.btns-tabs__btn').on('click', function() {
        $('.btns-tabs__btn').removeClass('active');
        $(this).addClass('active')
    });

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

    $( ".btn--sale" ).click(function() {
        $( ".list-items--sale" ).slideToggle( "slow")
    });

    $( ".btn--buy" ).click(function() {
        $( ".list-items--buy" ).slideToggle( "slow")
    });

    $( ".btn--services" ).click(function() {
        $( ".list-items--services" ).slideToggle( "slow")
    });

    $( ".btn--block" ).click(function() {
        $( ".list-items--block" ).slideToggle( "slow")
    });

    $( ".btn--reviews" ).click(function() {
        $( ".list-items--reviews" ).slideToggle( "slow")
    });

    $( ".btn--register" ).click(function() {
        $( ".list-items--register" ).slideToggle( "slow")
    });

    $( ".btn--create" ).click(function() {
        $( ".list-items--create" ).slideToggle( "slow")
    });

    $( ".btn--auction" ).click(function() {
        $( ".list-items--auction" ).slideToggle( "slow")
    });

    $( ".btn--favorite" ).click(function() {
        $( ".list-items--favorite" ).slideToggle( "slow")
    });

    $( ".btn--painting" ).click(function() {
        $( ".list-items--painting" ).slideToggle( "slow")
    });

    $( ".btn--notcomesms" ).click(function() {
        $( ".list-items--notcomesms" ).slideToggle("slow") 
    });

    mixer = mixitup('.gallery__content, .creations-details__tabs');
});

const cards = document.querySelectorAll('.faq .faq__questions');
cards.forEach((card)=>{
        card.querySelector('.faq__btn').addEventListener('click', () => {
        card.querySelector('.faq__btn').classList.toggle('active');
    });
})

let header = document.querySelector('.header');
    enterBtn = document.querySelector('.menu__enter-btn');
    modalEl = document.querySelector('.modal');
    btnClose = document.querySelector('.btn--close');
    bodyLock = document.getElementById('body');
    menuBtn = document.querySelector('.menu__btn');
    menuForm = document.querySelector('.menu__form');
    menuSearch = document.querySelector('.menu__search');
    menuBurger = document.querySelector('.menu__burger');
    menuBlock = document.querySelector('.menu__inner');
    menuBox = document.querySelector('.menu__box');
    menuCursour = document.querySelector('.menu__item--dropdown');
    filtersBtn = document.querySelector('.modern__filters-btn')
    filters = document.querySelector('.creations__filters')
    filtersCloseBtn = document.querySelector('.creations__close-btn')
    
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);
enterBtn.addEventListener('click', onEnterBtn);
btnClose.addEventListener('click', onBtnClose);
menuBtn.addEventListener('click', onMenuBtn);
menuBurger.addEventListener('click', onMenuBurger);
menuCursour.addEventListener('click', onMenuCursour);
filtersBtn.addEventListener('click', onFiltersBtn);
filtersCloseBtn.addEventListener('click', onFiltersCloseBtn);

function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        header.classList.add('sticky');
        $( ".menu-dropdown" ).slideUp('slow');
    } else {
        header.classList.remove('sticky');
    }
}

function onMenuCursour() {
    menuCursour.classList.toggle('active')
}

function onEnterBtn() {
    modalEl.classList.add('active')
    menuBlock.classList.remove('active')
    menuBox.classList.remove('active')
    menuBurger.classList.remove('active')
    bodyLock.classList.add('lock')
    filters.classList.remove('active')
};

function onMenuBtn() {
    menuBtn.classList.toggle('active')
    menuForm.classList.toggle('active')
    menuSearch.classList.toggle('active')

    if(menuBtn.classList.contains('active')) {
        $( ".menu-dropdown" ).slideUp( "slow")
    }
};

function onMenuBurger() {
    menuBlock.classList.toggle('active')
    menuBurger.classList.toggle('active')
    menuBox.classList.toggle('active')

    if(menuBurger.classList.contains('active')) {
        bodyLock.classList.add('lock')
        modalEl.classList.remove('active')
        filters.classList.remove('active')
    } else {
        bodyLock.classList.remove('lock')
    }
};

function onFiltersBtn() {
    filters.classList.add('active')
    bodyLock.classList.add('lock')
}

function onBtnClose() {
    modalEl.classList.remove('active')
    bodyLock.classList.remove('lock')
};

function onFiltersCloseBtn() {
    filters.classList.remove('active')
    bodyLock.classList.remove('lock')
};

function ESCclose(evt) {
    if (evt.keyCode == 27) {
        bodyLock.classList.remove('lock')
        modalEl.classList.remove('active')
        menuBtn.classList.remove('active')
        menuForm.classList.remove('active')
        menuSearch.classList.remove('active')
    }
}

window.increment = function(event) {
    var btn = event.target;
    btn.clicks = ((btn.clicks || 0) + 1) % 2;
    window.clicks = (window.clicks || 0) + btn.clicks * 2 - 1;
    document.getElementById("clicks").innerText = window.clicks;
}