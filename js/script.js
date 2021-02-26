

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1280},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-404","displayName":"404","link":{"linkType":"LinkTypePage","href":"#!page-404"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-merci","displayName":"merci","link":{"linkType":"LinkTypePage","href":"#!page-merci"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>36){
            $('.borderscroll').addClass('border');
        } else {
            $('.borderscroll').removeClass('border');
        }
    });
    /*blabla
        var elements = $('.jarallax').jarallax({
         speed: 0.5/silex.scale,
        //onInit: function(){ console.log('onInit', this)},
        onCoverImage: function(){
            var container = $('#jarallax-container-' + this.instanceID).children()[0]
            if (container) {
                container = $(container)
                container.css({
                    'width': (container.width() / silex.scale) + 'px',
                    'height': (container.height() / silex.scale) + 'px',
                })
            }
        }
        */
});