$(function(){
    
    $( document ).ready(function() {
        $('#leftblock h1').css({'opacity':'1','top':'80px',function(){
            $('#introiphone').css({'opacity':'1','bottom':'80px'});
                                    }
                                });
        
});
   
    
    /** FIGURE OUT WHY ITS NOT WORKING -__- **/
   
              
        /** SMOOTH SCROLL ( ANCHORS + NAV ) **/
    
     $('#side>ul>li:first-child').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#introduction').offset().top-30},1000);
        return false;
    });
    $('#side>ul>li:nth-child(2)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#splash').offset().top-30},1500);
        return false;
    });

        
        
        
     /** CLICK EVENTS ON VIDEO DIVS **/
   
     
    $('#keynote,#tvads').on('click',function(){
        
            $('#keynotevid,#tvadsvid').css({'opacity':'1','z-index':'120'});
            //$('video').prop('muted',true);
                
            });
    
     $('#close,#close2').on('click',function(){ // Tried it with a close class but doesn't work. Had to go through ID
        
            $('#keynotevid,#tvadsvid').css({'opacity':'0','z-index':'0'});
            //$('video').prop('muted',true);
                
            });
    
   
    //ferme le click
      
    
    
    
    
     
    
});