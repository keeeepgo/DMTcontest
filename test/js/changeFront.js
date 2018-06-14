//改变字体
$(".row #small").click(function (event) {
    event.preventDefault();
    $("h1").animate({
        "font-size": "24px"
    });
    $("h2").animate({
        "font-size": "16px"
    });
    $("p").animate({
        "font-size": "12px",
        "line-height": "16px"
    });
});

$(".row #medium").click(function (event) {
    event.preventDefault();
    $("h1").animate({
        "font-size": "36px"
    });
    $("h2").animate({
        "font-size": "24px"
    });
    $("p").animate({
        "font-size": "14px",
        "line-height": "20px"
    });

});

$(".row #large").click(function (event) {
    event.preventDefault();
    $("h1").animate({
        "font-size": "48px"
    });
    $("h2").animate({
        "font-size": "30px"
    });
    $("p").animate({
        "font-size": "16px",
        "line-height": "20px"
    });

});

$("a").click(function () {
    $("a").removeClass("selected");
    $(this).addClass("selected");

});