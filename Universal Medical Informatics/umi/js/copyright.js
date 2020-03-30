$(document).ready(function () {
    $('.copyright')[0].innerHTML = 'Copyright © 2019-' + new Date().getFullYear() + ' Universal Medical Informatics - All Rights Reserved<br/>';
	if ($('.copyrightSpan')[0]) {
        $('.copyrightSpan')[0].innerHTML = new Date().getFullYear();
    }
});