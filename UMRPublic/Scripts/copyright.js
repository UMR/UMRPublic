$(document).ready(function () {
    $('.copyrightTd')[0].innerHTML = '© 2011-' + new Date().getFullYear() + ' UMR Holdings International Corp. All Rights Reserved<br/>';
    if ($('.copyrightSpan')[0]) {
        $('.copyrightSpan')[0].innerHTML = new Date().getFullYear();
    }
});