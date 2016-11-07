    var $bar=$('.top-nav-bar');
    var $navBar=$('.top-nav');
    var $barItem=$bar.find('.top-nav-item');
    var $last='outside';
    var $overlay=$('.nav-overlay');
    var $closeMenu=$('.close-nav');
    var delay;

    $barItem.addClass('border');
		
    $barItem.mouseenter(function(){
        clearDelay();
        var $menu=$(this).find('.top-nav-menu');
			
        if($last=='outside'){
            showMenu($menu,true);
        }else if($last=='inside'){
            showMenu($menu,false);
        }
			
        $last='inside';})

        .mouseleave(function(){
            var $menu=$(this).find('.top-nav-menu');
            hideMenu($menu);
        });

    $bar.mouseleave(function(){
        clearDelay();
        $last='outside';
        $overlay.fadeOut();
        $navBar.removeClass('top-nav-gray');
        $barItem.addClass('border');
        $barItem.last().addClass('right-border');
    });

    function isTouchDevice(){
        return'ontouchstart'in document.documentElement;
    }
			
    function showMenu($menu,$delay){
        if($delay){
            delay=setTimeout(function(){
                $menu.show();
                $barItem.removeClass('border');
                $barItem.removeClass('right-border');
                $navBar.addClass('top-nav-gray');
                $overlay.fadeIn();

                if(isTouchDevice()){
                    $closeMenu.show();
                    $closeMenu.click(function(){
                        $('.top-nav-menu').hide();
                        $closeMenu.hide();
                    });
                }},500);
        }else{
            $overlay.show();
            $navBar.addClass('top-nav-gray');
            $barItem.removeClass('border');
            $barItem.removeClass('right-border');
            $menu.show();
        }
    }

    function clearDelay(){
        if(typeof delay!=='undefined'){
            clearTimeout(delay);
        }
    }

    function hideMenu($menu){
        $menu.hide();
    }

    if(isTouchDevice()){
        $overlay.click(function(){
            $('.top-nav-menu').hide();
            $closeMenu.hide();
        });
    }

    var $mobileNavLink=$('.mobile-nav-item-link');
    var $mobileNavMenu=".mobile-nav-menu";
    var $mobileItemSpan=".mobile-nav-item-link span";
    var $mobileMasterCat=$('.mobile-nav-master-cat');
    var $catContent=".cat-content";
    var $masterCatSpan='.mobile-nav-master-cat span';

    $('#burger-menu').click(function(){
        $('.mobile-nav-wrap').slideToggle();
    });

    $mobileNavLink.click(function(){
        if($(this).siblings($mobileNavMenu).is(':visible')){
            $(this).siblings($mobileNavMenu).slideUp();
            $(this).children($mobileItemSpan).replaceWith("<span>+</span>");
        }else{
            $($mobileNavMenu).slideUp();
            $mobileNavLink.children('.mobile-nav-item-link span').replaceWith("<span>+</span>");
            $(this).children($mobileItemSpan).replaceWith("<span>-</span>");
            $(this).siblings($mobileNavMenu).slideToggle();
        }
    });

    $mobileMasterCat.click(function(e){
        e.preventDefault();
        if($(this).siblings($catContent).is(':visible')){
            $(this).siblings($catContent).slideUp();
            $(this).children($masterCatSpan).replaceWith("<span>+</span>");
        }else{
            $($catContent).slideUp();
            $mobileMasterCat.children('.mobile-nav-master-cat span').replaceWith("<span>+</span>");
            $(this).siblings($catContent).slideToggle();
            $(this).children($masterCatSpan).replaceWith("<span>-</span>");
        }
    });
