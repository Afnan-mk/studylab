
$(function () {
    "use strict";
    $(window).on("scroll", function(){
    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".nav").addClass("nav-default");
        $(".nav-menuee ul li a").addClass("scroll");
        $(".nav-logo a").addClass("padding");
        $(".sidebar-menu div button").addClass("button-edit");
        $(".sidebar a").addClass("a-edit");
        

    } else {
        $(".nav").removeClass("nav-default"); 
        $(".nav-menuee ul li a").removeClass("scroll");
        $(".nav-logo a").removeClass("padding");    
        $(".sidebar-menu div button").removeClass("button-edit");
        $(".sidebar a").removeClass("a-edit");    
    
        }
    });

    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".nav").addClass("nav-default");
        $(".nav-menuee ul li a").addClass("scroll");
        $(".nav-logo a").addClass("padding");
        $(".sidebar-menu div button").addClass("button-edit");
        $(".sidebar a").addClass("a-edit");
    
    } else {
        $(".nav").removeClass("nav-default"); 
        $(".nav-menuee ul li a").removeClass("scroll"); 
        $(".nav-logo a").removeClass("padding"); 
        $(".sidebar-menu div button").removeClass("button-edit"); 
        $(".sidebar a").removeClass("a-edit");     

    }

});




$(".sidebar-menu>div>button").click(function(){
    $(".sidebar").slideToggle("slow");
});






$(document).ready(function() {

    var ar = true;
    var direction = $('body').attr('dir');
    console.log(direction)
    if(direction == 'rtl'){
        ar = true
    } else{
        ar = false
    }

    var slider = $('.slider-1');
    slider.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        rtl: ar,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:2,
                dots: true,
            },
            1000:{
                items:4,
                dots: true,
                loop:true
            }
        }

    }) })