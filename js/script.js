$(document).ready(function(){
    // fullpage.js
    $("#fullpage").fullpage({
    });

    // 헤더에 마우스를 올리면 로고와 배경이 바뀜
    $("header").hover(function(){
        $(this).toggleClass("on");
    });

    // gnb라는 메인 메뉴에 마우스를 올리면 서브 메뉴가 열렸다 닫힌다.
    $(".snb").hide();
    $(".gnb").hover(function(){
        $(".snb").slideToggle(300);
    })

    // sec01 슬라이드
    var swiper = new Swiper(".sec01_slide", {
        loop: true,
        effect: "fade",
    });

    // sec03에 마우스를 올리면 너비가 넓어지는 클래스를 줌
    $(".sec03_list ul li").hover(function(){
        $(this).toggleClass("on");
        $(".sec03_list ul li").not(this).toggleClass("off");
    });
});