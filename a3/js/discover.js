$(document).ready(function () {
    $('#navBar').css('background-color',localStorage.getItem('contrast'));
    $('.bottom').css('background-color',localStorage.getItem('contrast'));

    $('table tr td button').click(function () {
        let imageUrl = 'http://www.fotos-lienzo.es/media/aw_searchautocomplete/default/loading.gif';
       $(this).css('background-image', `url(${imageUrl})`);
       $(this).css( 'background-repeat','no-repeat');
       $(this).text('loading');
    })
});