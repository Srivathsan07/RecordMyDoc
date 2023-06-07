

$(document).ready(function(){
    $('#mb-nav-bar').click(function(){
        $('.navbar').toggleClass('hide');
    });

    $('#mb-nav-bar').click(function(){
        if($(this).hasClass('mb-ic')) {
         $(this).removeClass('mb-ic');
        }
        else{
            $(this).addClass('mb-ic');
        }
        
     });

     $('.nav-icon2').click(function(){
        if($('.navbar').hasClass('hide'))
        $('.navbar').removeClass('hide');
        if($('#mb-nav-bar').hasClass('mb-ic'))
        $('#mb-nav-bar').removeClass('mb-ic');

     });
    
    

  



});



