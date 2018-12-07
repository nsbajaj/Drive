/*
window.onload = function audioPlayer() {
    $('#audio')[0].src = $("#playlist li a")[2];
    //$("#audio")[0].play();
}*/
$(document).ready(function () {
    let currentSong = 0;
    $('#audio')[0].src = $("#playlist li a")[0];
    $('#playlist li a').click(function (e) {
        e.preventDefault(); //keep it from going to the link
        console.log($(this));
        $('#audio')[0].src = this;     //set <a href...>
        $('#audio')[0].play();
        $("#playlist li").removeClass('current-song');
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
        let x = $(this).find('i').toggleClass('fa fa-play-circle fa fa-pause-circle');

        //$('#playlist li a #one').removeClass('fa fa-download');

    });

    $('#car').click(function(){
        location.reload('');
        window.location.href = '../index.html';
    });
    /*$('#navBar li a').click(function () {
        location.reload('');
        window.location.href = $(this).attr('href');
    })*/


    $('.bottom').css('background-color',localStorage.getItem('contrast'));
    $('#navBar').css('background-color',localStorage.getItem('contrast'));



});
