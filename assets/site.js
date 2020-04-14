$(function () {
    $(".toggle").click(function () {
        showNavDrawer();
        $(this).toggleClass('change')
    });
    $(window).width(function () {
        sideNav();
    });
    $(window).resize(function () {
        sideNav();
    });
    $("nav .overlay").click(function () {
        $("nav .navigation-list").toggleClass("nav-collsaped");
        $("nav .overlay").toggleClass("body-overlay");
        $(".toggle").removeClass("change")

    });
    function sideNav(){
        if($(window).width()<=767){
        }
        else {
            $("nav .navigation-list").removeClass("nav-collsaped");
            $("nav .overlay").removeClass("body-overlay");
            $(".toggle").removeClass("change");
        }
    }
    function showNavDrawer(){
        $("nav .navigation-list").toggleClass("nav-collsaped");
        $("nav .overlay").toggleClass("body-overlay");
    }
});