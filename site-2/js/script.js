$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#header-wrapper").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#main-content").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

var text_slide_cur=0;
function showtext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0}, 1000);
    setTimeout(hidetext_slide, 6000);
}
function hidetext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0}, 1000,function(){showtext_slide();});
    text_slide_cur=(text_slide_cur+1)%5;
}
$(document).ready(function() {
    showtext_slide();
})