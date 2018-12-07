$(document).ready(function () {
   /* $(window).on('load',function () {
        if(localStorage.getItem('contrast') === null){
            localStorage.setItem('contrast','#000');
            $('#carImage').css('background-color',localStorage.getItem('contrast'));
            $('.bottom').css('background-color',localStorage.getItem('contrast'));
        } else {
            $('#carImage').css('background-color',localStorage.getItem('contrast'));
            $('.bottom').css('background-color',localStorage.getItem('contrast'));
        }
    });*/


    $('.color').click(function () {
        let color = $(this).attr('data-value');
        console.log('the color is ' + color);
        $('#carImage').css('background-color',color);
        $('.bottom').css('background-color',color);
        localStorage.setItem('contrast',color);
    });

    $('#music').click(function(){
        location.reload();
        window.location.href = 'music/music.html';
    });

    $('.bottom').css('background-color',localStorage.getItem('contrast'));
    $('#carImage').css('background-color',localStorage.getItem('contrast'));

});
