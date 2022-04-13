$(window).on('load',function() {
  $(".preloaderBg").delay(0).fadeOut("slow");
});

function openNav() {
    if ($(window).width() < 1025 && $(window).width() > 767) {
        document.getElementById("filters-box").style.width = "70%";
    } else if ($(window).width() < 768) {
        document.getElementById("filters-box").style.width = "100%";
    } else {
        document.getElementById("filters-box").style.width = "70%";
    }
    $('html').css('overflow-y', 'hidden');
    $(".filters-box-content").delay(300).fadeIn("slow");
    $(".body-overlay").delay(0).fadeIn();
}

function closeNav() {
    $(".filters-box-content").delay(0).fadeOut("slow");
    setTimeout( function()  {
        document.getElementById("filters-box").style.width = "0";
        $('html').css('overflow-y', 'scroll');
    }, 500);
    $(".body-overlay").delay(500).fadeOut();
    
}