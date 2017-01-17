$(document).ready(function() {
    var lastScrollPos = 0
    window.onscroll = function (e) {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollPos){
            document.querySelector("header").style.opacity = "0";
            $(".crumbs").css("top","0");
        } else {
            document.querySelector("header").style.opacity = "1";
            $(".crumbs").css("top","64px");
        }
        lastScrollPos = st;
        var crumbs = document.getElementById("crumbs");
        var position = $('.crumbs').offset();
        if( document.body.scrollTop === 0 ) {
            crumbs.style.opacity = "0";
            $('.crumbs-dynamic').html("");
        }
        else {
            crumbs.style.opacity = "1";
            $('.article-section').each(function(){
                if((position.top) >= $(this).offset().top && position.top <= $(this).next().offset().top)
                {
                    $('.crumbs-dynamic').html('<span class="colored"> > </span>' + $(this).find(".project-sub-header").html()); 
                    return;
                }
            });
        }
    }
    $(".navigation-bar a").hover(function(){
        $(this).find("span").css("visibility", "visible");
        },function(){ 
        $(this).find("span").css("visibility", "hidden");
    });
    $(".scroll-top").click(function(){
        $('html, body').animate({
            scrollTop: 0     
        }, 1000);
        return false;
    });
});