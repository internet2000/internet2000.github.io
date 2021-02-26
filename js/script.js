

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
        })
    var initialMinHeight = $('.hero-section').height()
    function unscale() {
        $('.hero-section').css({
            minHeight: initialMinHeight / silex.scale,
        })
    }
    $(window).on('resize', unscale)
    unscale()

});

/*
animation widget from here: https://github.com/silexlabs/Silex/issues/443
*/
$(function() {
            var win = $(window)
            var size = {
                h: win.height(),
                w: win.width()
            }
            var initial = {
                h: size.h / silex.scale,
                w: size.w / silex.scale
            }
            var offset = {
                h: initial.h - size.h,
                w: initial.w - size.w,
            }
            // this function is used to apply an offset to the detection of the active boundaries of the viewport
            // this is required when the viewport width is smaller than the website (when Silex scales down the website)
            function getOffset(el) {
                var position = $(el).position()
                var localOffset = {
                    h: offset.h + (position.top * (1-silex.scale)),
                    w: offset.w + (position.left * (1-silex.scale)),
                }
                return {
                    top: offset.h,
                    bottom: -offset.h,
                    left: offset.w,
                    right: -offset.w,
                }
            }
            var sr = ScrollReveal({
                distance: '100px',
                reset: false,
            });
            $('.from-left').each(function() {
                sr.reveal(this, { origin:  'left', viewOffset: getOffset(this)});
            })
            $('.from-right').each(function() {
                sr.reveal(this, { origin:  'right', viewOffset: getOffset(this)});
            })
            $('.from-top').each(function() {
                sr.reveal(this, { origin:  'top', viewOffset: getOffset(this)});
            })
            $('.from-bottom').each(function() {
                sr.reveal(this, { origin:  'bottom', viewOffset: getOffset(this)});
            })
})
