$(document).ready(function () {
    $('.copyright')[0].innerHTML = 'Copyright © 2019-' + new Date().getFullYear() + ' Universal Medical Informatics - All Rights Reserved<br/>';
	if ($('.copyrightSpan')[0]) {
        $('.copyrightSpan')[0].innerHTML = new Date().getFullYear();
    }
    $(".owl-carousel").owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        pagination: false,
        responsive: true
    });
});