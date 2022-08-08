$(document).ready(function(){
    $(".navbar-toggler").click(function() {
        $(".aside-contacts").animate({
            "right" : "-100%"
        }, 500);
         // close shopping cart 
        $(".shopping-cart").removeClass("shopping-toggle")
        $(this).toggleClass("close")
    });

    $("#searchIcon").click(function(){
        // close shopping cart 
        $(".shopping-cart").removeClass("shopping-toggle")

        $(".homeSearch").css({
            "opacity": "1",
            "visibility" : "visible"
        });

        $(".homeSearch form").animate({
            "width": "70%"
        },500);

    })

    $("#closeIcon").click(function(){
        $(".homeSearch").css({
            "opacity": "0",
            "visibility" : "hidden"
        })

        $(".homeSearch form").animate({
            "width": "30%"
        },500)
    });
     /* shopping cart toggle */
    $("#shoppingIcon").click(function(){
        $(".shopping-cart").toggleClass("shopping-toggle");
    })

    // plus and minus buttons

    var orangeOne = $("#orange-num").text();
    $("#orange-plus").click(function(){
        $("#orange-num").text(++orangeOne)
    });
    $("#orange-minus").click(function(){
    if(orangeOne!=1){
       $("#orange-num").text(--orangeOne)
    }
    });

    var bananaOne = $("#banana-num").text();
    $("#banana-plus").click(function(){
        $("#banana-num").text(++bananaOne)
    });
    $("#banana-minus").click(function(){
    if(bananaOne!=1){
       $("#banana-num").text(--bananaOne)
    }
    });
    
    $("#contact-icon").click(function(){
        $(".aside-contacts").animate({"right" : 0},500)
        $(".close").addClass("close-contact");
        $(".shopping-cart").removeClass("shopping-toggle")
    });

    $(".close").click(function(){
        $(".aside-contacts").animate({
            "right" : "-100%"
        }, 500);
        $(".close").removeClass("close-contact")

    })

    $("#contact-icon2").click(function(){
        $(".aside-contacts").animate({"right" : 0},500)
        $(".close").addClass("close-contact")
    });

    $(".close").click(function(){
        $(".aside-contacts").animate({
            "right" : "-100%"
        }, 500);
        $(".close").removeClass("close-contact")

    })
     
    // btn filter

    $("#btn-filter").click(function(){
        $(".product-filter .nav").toggleClass("navShow");
    });

    // logo carousel
    $('.logo .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    })
     //blog carousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    //   nav scroll & btn scroll
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll> 300){
            $(".navbar").addClass("navScroll")
            $("#scrollTop").fadeIn(2000)
            $(".shopping-cart").removeClass("shopping-toggle");
            $(".dropdown-list").css({"top":"152%"})

        }else{
            $(".navbar").removeClass("navScroll")
            $("#scrollTop").fadeOut(1000)
            // $(".shopping-cart").removeClass("scroll")
        }
    })

    //  btn scrollTop
    $("#scrollTop").click(function(){
        $("html").animate({scrollTop: "0"}, 1000)
    })

    // loading
    $("#loading").fadeOut(3000, function(){
        $("body").css({"overflow" : "auto"})
    })
    //wow js
    new WOW().init();
});
