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

    mixer = mixitup('.gallery__content, .creations-details__tabs');
});

document.querySelectorAll('[data-btn="faq"]').forEach(function(el) {
    el.addEventListener('click', function() {
        el.classList.toggle('active')
        const faqQuestions = el.closest('[data-questions]');
        const listItems = faqQuestions.querySelector('.list-items')
        
        if(el.classList.contains('active')) {
            $( listItems ).slideDown( "slow")
        } else {
            $( listItems ).slideUp( "slow")
        }
    })
})

const header = document.querySelector('.header');
const enterBtn = document.querySelector('.menu__enter-btn');
const modalEl = document.querySelector('.modal');
const btnClose = document.querySelector('.btn--close');
const bodyLock = document.getElementById('body');
const menuBtn = document.querySelector('.menu__btn');
const menuForm = document.querySelector('.menu__form');
const menuSearch = document.querySelector('.menu__search');
const menuBurger = document.querySelector('.menu__burger');
const menuBlock = document.querySelector('.menu__inner');
const menuBox = document.querySelector('.menu__box');
const menuCursour = document.querySelector('.menu__item--dropdown');
const filtersBtn = document.querySelector('.modern__filters-btn')
const filters = document.querySelector('.creations__filters')
const filtersCloseBtn = document.querySelector('.creations__close-btn')
const creationsLabel = document.querySelectorAll('[data-action]')
const creationsCounter = document.querySelector('#clicks')
    
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

document.querySelectorAll('button.creations__btn, [type="button"]').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.classList.toggle('active')
        const creationsBlock = e.target.closest('.creations__block');
        const filtersBox = creationsBlock.querySelector('.creations__filters-box')

        if(e.target.classList.contains('active')) {
            $( filtersBox ).slideDown( "slow")
        } else {
            $( filtersBox ).slideUp( "slow")
        }
    })
})

creationsLabel.forEach(function(el) {
    el.addEventListener('click', function() {
        this.classList.toggle('active')

        this.classList.contains('active') ?
        ++creationsCounter.innerText : --creationsCounter.innerText
    })
})

document.querySelector('[data-reset]').addEventListener('click', function() {
    creationsCounter.innerText = 0
    
    creationsLabel.forEach(function(el) {
        if(el.classList.contains('active')) {
            el.classList.remove('active')
            let creationsWrapper = el.closest('[data-content="creations-wrapper"]');
            let creationCheckbox = creationsWrapper.querySelector('[data-creation]')
            
            if(creationCheckbox.classList.contains('active') && creationCheckbox.checked) {
                creationCheckbox.classList.remove('active')
            }
        }
    })
})
