$(function(){
    
     $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
     
      
         
    if(valeurDuScroll>30){
       $('header').css({'opacity':'0.3'});          
    }
         
    else{
        $('header').css({'opacity':'1'}); 
    
     $('header').mouseover(
        function() {
    $('header').css({'opacity':'1'});        
        }
    );  
         $('header').mouseout(
        function() {
    $('header').css({'opacity':'0.3'});        
        }
    ); 
    
    
    
    } 
      
         
         

     });
        
    
    
    
});