$(document).ready(function () {
    $('.copyrightTd')[0].innerHTML = '© 2011-' + new Date().getFullYear() + ' Universal Medical Record<sup>&reg</sup>. All Rights Reserved<br/>';
	if ($('.copyrightSpan')[0]) {
        $('.copyrightSpan')[0].innerHTML = new Date().getFullYear();
    }
});