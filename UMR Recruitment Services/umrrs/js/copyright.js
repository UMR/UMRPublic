$(document).ready(function () {
    $('.copyright')[0].innerHTML = 'Copyright © 2019-' + new Date().getFullYear() + ' Universal Medical Informatics - All Rights Reserved.<br/> Visit us on: <a style="color: #4267b2 !important;font-size: 24px;padding:0 10px" href = "https://www.facebook.com/UMR-Recruitment-Services-112027723783186/" > <i class="fa fa-facebook"></i></a><a style="color: #1da0f2 !important;font-size: 24px;padding:0 10px" href = "" > <i class="fa fa-twitter"></i></a><a style="color: #0E76A8 !important;font-size: 24px;padding:0 10px" href = "" > <i class="fa fa-linkedin"></i></a ><a style="color: #1da0f2 !important;font-size: 24px;padding:0 10px" href = "" > <i  class="fa fa-google-plus"></i></a > <br />';
    if ($('.copyrightSpan')[0]) {
        $('.copyrightSpan')[0].innerHTML = new Date().getFullYear();
    }
    //$(".owl-carousel").owlCarousel({
    //    autoPlay: false,
    //    items: 4,
    //    itemsDesktop: [1199, 3],
    //    itemsDesktopSmall: [979, 3],
    //    navigation: true,
    //    pagination: false,
    //    responsive: true
    //});
});