var swiper = new Swiper('.swiper-container-1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
    },
});
var swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
});
var swiper3 = new Swiper('.swiper-container-3', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },
});
$(".info-box1-list1").click(function (e) { 
    e.preventDefault();
    $(".info-box1-list1-ul1").slideToggle();
});
$(".info-box1-list2").click(function (e) { 
    e.preventDefault();
    $(".info-box1-list2-ul2").slideToggle();
});
$(".info-box1-list3").click(function (e) { 
    e.preventDefault();
    $(".info-box1-list3-ul3").slideToggle();
});

$(".header-bar").click(function (e) { 
    e.preventDefault();
    if( $(".header-quick-list").css("display") == "block")
    {
        $(".header-quick-list").slideToggle();
    }
    $(".member-button").slideToggle();
    $(".header-search").slideToggle();
    $(".header-top").slideToggle();
});
$(".member-button").click(function (e) { 
    e.preventDefault();
    $(".header-quick-list").slideToggle();
});

// Top button 按鍵效果
$('.back2Top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});