$(function (){
    isNavBarHidden = true;
  $('body > header .nav_three .menu_icon img').click(function (){
      if(isNavBarHidden){
          $('body > header .nav_three .nav_item').fadeIn("slow");
          isNavBarHidden = false;
      }
        else{
             $('body > header .nav_three .nav_item').fadeOut("slow");
             isNavBarHidden = true;
        }
  });
});