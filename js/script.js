


$( document ).ready(function() {
    
    
    // MAIN SLIDER 
    if($('.main_slider').length){
        $('.main_slider').slick({
            lazyLoad: 'ondemand',
            // autoplay: true,
            // autoplaySpeed: 8000,
            // infinite: true,
            speed: 500,
            // dots: false,
            // adaptiveHeight: true,
            arrows:true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-arrow-left2' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-arrow-right2' aria-hidden='true'></i></button>",
            asNavFor: '.sub_slider'
        });

        $('.sub_slider').slick({
            slidesToShow: 8,
            // slidesToScroll: 1,
            asNavFor: '.main_slider',
            dots: false,
            speed: 500,
            centerMode: true,
            focusOnSelect: true,
           
            // centerMode: true,
            centerPadding:'0px',
                
          });


    }





    // CLONE MENU 
    $('.logo_wrpr').clone().appendTo($('.hambergur_cover'));
    $('.nav').clone().appendTo($('.hambergur_cover'));
    $('.login_signup_wrpr').clone().appendTo($('.hambergur_cover'));



    // HAMBERGUR CLICK 
    $('body').on('click','.hambergur',function () {
        $('.overlay').addClass('active');
        $('.hambergur_cover').addClass('active');
     });
    $('body').on('click','.overlay',function () {
       $('.hambergur_cover').removeClass('active');
       $(this).removeClass('active');
    });


    // STAR RATING 
    $('#demo1').rates({
        shapeHeight: '15px',
        shapeCount: 5,
        shape: 'black-star',
    });






    // BTN CLICK FOR PRODUCT COUNT 
    // $('body').on('click','.btn-number',function () {
    //     alert('clicked');
    // });



    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                
                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                } 
                // if(parseInt(input.val()) == input.attr('min')) {
                //     $(this).attr('disabled', true);
                // }
    
            } else if(type == 'plus') {
    
                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                // if(parseInt(input.val()) == input.attr('max')) {
                //     $(this).attr('disabled', true);
                // }
    
            }
        } else {
            input.val(0);
        }
    });



    // CHOICE CLICK 
    
    
    
    
    $('body').on('click','.offer_block',function () {
       $(this).addClass('active').siblings().removeClass('active'); 
    });



});