$(function(){
    
    $( document ).ready(function() {
        $('#leftblock h1').css({'opacity':'1','top':'130px',function(){
            $('#introiphone').css({'opacity':'1','bottom':'80px'});
                                    }
                                });
        
});
   
    
    
   
              
        /** SMOOTH SCROLL ( ANCHORS + NAV ) **/
    
     $('#side>ul>li:first-child').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#introduction').offset().top-30},1000);
        return false;
    });
    $('#side>ul>li:nth-child(2)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#splash').offset().top-30},1500);
        return false;
    });
     $('#side>ul>li:nth-child(3)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#superspecs').offset().top-30},2000);
        return false;
    });
     $('#side>ul>li:nth-child(4)').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#getyourstoday').offset().top-30},2500);
        return false;
    });

        
        
        
     /** CLICK EVENTS ON VIDEO DIVS **/
    
   var video1 = $("#keynotevideo")[0];
   var video2 = $("#tvadsvideo")[0];
     
    $('#keynote').on('click',function(){
        
            $('#keynotevid').css({'opacity':'1','z-index':'120'});
            $('body').css('overflow','hidden');
            (video1.paused) 
            video1.play();
                
            });
    $('#tvads').on('click',function(){
        
            $('#tvadsvid').css({'opacity':'1','z-index':'120'});
            $('body').css('overflow','hidden');
            (video2.paused) 
            video2.play();
                
            });
    
     $('#close').on('click',function(){ // Tried it with a close class but doesn't work. Had to go through ID
        
            $('#keynotevid').css({'opacity':'0','z-index':'0'});
            $('body').css('overflow','visible');
            $("#keynotevideo").get(0).pause(); 
            });
    $('#close2').on('click',function(){ // Tried it with a close class but doesn't work. Had to go through ID
        
            $('#tvadsvid').css({'opacity':'0','z-index':'0'});
         $('body').css('overflow','visible');
            //$('video').prop('muted',true);
               $("#tvadsvideo").get(0).pause(); 
            });
    
   
   
      
    
    // SUPERSPECS SECTION - HANDLING OF OUT OF OVERFLOW DIVS COMING IN
        //----> FIND SIMPLER WAY TO DO IT <-----
        $('#superspecs>nav>ul>li:first-child').on('click',function(){
            $('#camera').css('left','0');
            $('#display').css('left','1280px'); 
            $('#sound').css('left','1280px');  
            $('#os').css('left','1280px'); 
            }); 
        $('#superspecs>nav>ul>li:nth-child(2)').on('click',function(){
            $('#display').css('left','0');
            $('#camera').css('left','1280px');
            $('#sound').css('left','1280px');  
            $('#os').css('left','1280px'); 
            });
         $('#superspecs>nav>ul>li:nth-child(3)').on('click',function(){
            $('#sound').css('left','0');
            $('#camera').css('left','1280px');
            $('#display').css('left','1280px');   
            $('#os').css('left','1280px');   
            });
         $('#superspecs>nav>ul>li:nth-child(4)').on('click',function(){
            $('#os').css('left','0');
            $('#camera').css('left','1280px');
            $('#display').css('left','1280px');
            $('#sound').css('left','1280px');    
            });  
            
   
    
     
    
});