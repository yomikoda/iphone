$(function(){
    
     $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
     
    if(valeurDuScroll>50){
    
       $('#daypack_img').css({'opacity':'1','left':'0px'}); 
            
    }
    
         
     if(valeurDuScroll>1000){
        
        $('#drifter_img').css({'opacity':'1','right':'0px'});
        $('#goldbox2').css({'opacity':'1','left':'78px'}); 
    }    
         
         
        if(valeurDuScroll>1800){
        
        $('#TannerCollections').css({'opacity':'1'}); 
    }  
         
     });
    
    
    
    
});