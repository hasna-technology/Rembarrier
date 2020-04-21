jQuery(document).ready(function ($) {
    slider($);
    window.onscroll = function () {
        console.log(window.pageYOffset);
        if (window.pageYOffset >= 200) {
            $(".site-header").addClass("fixed_menu")
          } else {
            $(".site-header").removeClass("fixed_menu")
          }
    };
    //main-navigation
})

function slider($) {
    var num = 0;

    $(".sliderText .title").each(function () {
        $(".slider-panel .indicator").append("<div class='box'></div>");
    })

    $(".slider .indicator").css("left", "calc(50% - " + ($(".slider .indicator").width() / 2) + "px)")
    

    $(".sliderText .title").hide();
    $(".sliderText .textwidget").hide();
    $(".sliderText .img").animate({
        opacity: 0,
    }, 0);


    $(".sliderText .title").eq(num).show();
    $(".sliderText .title").eq(num).animate({
        opacity: 1,
        top: -50
    }, 500);

    $(".sliderText .textwidget").eq(num).show();
    $(".sliderText .textwidget").eq(num).animate({
        opacity: 1,
        top: -50
    }, 750);

    $(".sliderText .img").each(function () {
        var src = "../"+$(this).find("img").attr("src");
        console.log(src, $(this));
        $(this).css("background-image", "url('"+src+"')");
        $(this).find("img").hide();
    });

    $(".sliderText .img").eq(num).show();
    $(".sliderText .img").eq(num).animate({
        opacity: 1,
    }, 250);


    $(".slider-panel .indicator .box").eq(num).addClass("selected");
    setInterval(function () {
        num = num + 1;
        num = num % $(".sliderText .title").length;

        $(".sliderText .title").animate({
            opacity: 0,
            top: 0
        }, 500, function () {
            $(this).hide();
        });
        $(".sliderText .textwidget").animate({
            opacity: 0,
            top: 0
        }, 500, function () {
            $(this).hide();
        });
        var temp_n = 0;
        $(".sliderText .img").each(function () {
            temp_n++;
            if (temp_n != num) {
                $(this).animate({
                    opacity: 0
                }, 500, function () {
                    //$(this).hide();
                });
            }
        })

        $(".sliderText .img").eq(num).show();
        $(".sliderText .img").eq(num).animate({
            opacity: 1,
        }, 500);

        $(".slider-panel .indicator .box").removeClass("selected");
        $(".slider-panel .indicator .box").eq(num).addClass("selected");
        console.log(num)
        setTimeout(function () {
            $(".sliderText .title").eq(num).show();
            $(".sliderText .title").eq(num).animate({
                opacity: 1,
                top: -50
            }, 500);
            $(".sliderText .textwidget").eq(num).show();
            $(".sliderText .textwidget").eq(num).animate({
                opacity: 1,
                top: -50
            }, 750)


        }, 750)
    }, 5000);
}