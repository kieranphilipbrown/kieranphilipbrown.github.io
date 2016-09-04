$(document).ready(function($) {
    $('.menu-btn').click(function(){
        $('.main-menu').toggleClass('expand');
    });
    $('.accordion2').find('.accordion-toggle2').click(function(){
        $(this).next().slideToggle('fast'); // Expand or collapse this panel
        $(".accordion-content2").not($(this).next()).slideUp('fast'); // Hide the other panels
    });
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 500,
        items:1,
        loop:true
    });
});