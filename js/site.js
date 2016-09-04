$(document).ready(function($) {
    $('.menu-btn').click(function(){
        $('.main-menu').toggleClass('expand');
    });
    $('.accordion2').find('.accordion-toggle2').click(function(){
        $(this).next().slideToggle('fast'); // Expand or collapse this panel
        $(".accordion-content2").not($(this).next()).slideUp('fast'); // Hide the other panels
    });
	$('.accordion').find('.accordion-toggle').click(function(){
        $(this).next().slideToggle('fast'); // Expand or collapse this panel
        $(".accordion-content").not($(this).next()).slideUp('fast'); // Hide the other panels
		});
});