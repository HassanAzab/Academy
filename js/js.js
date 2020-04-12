/*.programming-section,.Graphic-section,markiting-section*/
$(document).ready(function(){
    $(".prog").click(function(){
   $(".programming-section").toggle(700);
        $(".Graphic-section").hide(700);
         $(".markiting-section").hide(700);
        
    });
});
$(document).ready(function(){
    $(".graphic").click(function(){
         $(".Graphic-section").toggle(700);
   $(".programming-section").hide(700);
         $(".markiting-section").hide(700);
        
    });
});
$(document).ready(function(){
    $(".markiting").click(function(){
         $(".markiting-section").toggle(700);
   $(".programming-section").hide(700);
         $(".Graphic-section").hide(700);
        
    });
});