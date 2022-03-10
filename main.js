$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar ul').toggleClass('active');
  

    });
    $('.btn2').click(function(){
        $('.login-form').addClass('active');

    });
    $('.fa-times').click(function(){
        $('.login-form').removeClass('active');

    });
    $('.btn1').click(function(){
        $('.search-form').toggleClass('active');

    });
    $('.fa-times').click(function(){
        $('.search-form').removeClass('active');

    });
    
    $(window).on('load scroll',function(){
      
        
        if($(window) .scrollTop()>60){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');                
        }    

    });
 
   

});