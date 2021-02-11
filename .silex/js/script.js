

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1280},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-404","displayName":"404","link":{"linkType":"LinkTypePage","href":"#!page-404"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-merci","displayName":"merci","link":{"linkType":"LinkTypePage","href":"#!page-merci"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>0){
$('.borderscroll').addClass('border');
    } else {
$('.borderscroll').removeClass('border');
    }
  });
});