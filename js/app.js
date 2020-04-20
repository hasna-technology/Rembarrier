jQuery(document).ready(function($) {
    
    slider($);
    
})

function slider($){
    var num = 0;

    $(".sliderText .title").each(function(){
        $(".slider-panel .indicator").append("<div class='box'></div>");
    })
    $(".sliderText .title").hide();
    $(".sliderText .textwidget").hide();
    

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
    $(".slider-panel .indicator .box").eq(num).addClass("selected");
    setInterval(function(){
        num = num + 1;
        num = num % $(".title").length;

        $(".sliderText .title").animate({
            opacity: 0,
            top: 0
        }, 500, function(){
            $(this).hide();
        });
        $(".sliderText .textwidget").animate({
            opacity: 0,
            top: 0
        }, 500, function(){
            $(this).hide();
        });
        $(".slider-panel .indicator .box").removeClass("selected");
        $(".slider-panel .indicator .box").eq(num).addClass("selected");
        setTimeout(function(){
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