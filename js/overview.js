$(function(){
    
    $( document ).ready(function() {
        $('#leftblock h1').css({'opacity':'1','top':'80px',function(){
            $('#introiphone').css({'opacity':'1','bottom':'80px'});
                                    }
                                });
        
});
   
    
    /** FIGURE OUT WHY ITS NOT WORKING -__- **/
    $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
        /** SMOOTH SCROLL ( ANCHORS + NAV ) **/
    
     $('#side>ul>li:first-child').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#introduction').offset().top-30},1000);
        return false;
    });
    $('#side>ul>li:nth-child(2)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#splash').offset().top-30},1500);
        return false;
    });

        
        
        
     });
    
    
    
    
    
    
     
    
});