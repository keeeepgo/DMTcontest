//改变字体
$(".row #small").click(function (event) {
    event.preventDefault();
    $("#newspage #newspage h1").animate({
        "font-size": "24px"
    });
    $("#newspage h2").animate({
        "font-size": "16px"
    });
    $("#newspage p").animate({
        "font-size": "12px",
        "line-height": "16px"
    });
});

$(".row #medium").click(function (event) {
    event.preventDefault();
    $("#newspage h1").animate({
        "font-size": "36px"
    });
    $("#newspage h2").animate({
        "font-size": "24px"
    });
    $("#newspage p").animate({
        "font-size": "14px",
        "line-height": "20px"
    });

});

$(".row #large").click(function (event) {
    event.preventDefault();
    $("#newspage h1").animate({
        "font-size": "48px"
    });
    $("#newspage h2").animate({
        "font-size": "30px"
    });
    $("#newspage p").animate({
        "font-size": "16px",
        "line-height": "20px"
    });

});

$("a").click(function () {
    $("a").removeClass("selected");
    $(this).addClass("selected");

});