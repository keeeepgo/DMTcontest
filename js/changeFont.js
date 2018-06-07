//改变字体
$("#fontcontrols #small").click(function (event) {
    event.preventDefault();
    $("#news_content h1").animate({
        "font-size": "24px"
    });
    $("#news_content h2").animate({
        "font-size": "16px"
    });
    $("#news_content p").animate({
        "font-size": "12px",
        "line-height": "16px"
    });
});

$("#fontcontrols #medium").click(function (event) {
    event.preventDefault();
    $("#news_content h1").animate({
        "font-size": "36px"
    });
    $("#news_content h2").animate({
        "font-size": "24px"
    });
    $("#news_content p").animate({
        "font-size": "14px",
        "line-height": "20px"
    });

});

$("#fontcontrols #large").click(function (event) {
    event.preventDefault();
    $("#news_content h1").animate({
        "font-size": "48px"
    });
    $("#news_content h2").animate({
        "font-size": "30px"
    });
    $("#news_content p").animate({
        "font-size": "16px",
        "line-height": "20px"
    });

});

$("#fontcontrols a").click(function () {
    $("a").removeClass("selected");
    $(this).addClass("selected");

});