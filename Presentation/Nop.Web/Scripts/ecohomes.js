//// ecohomes.js

var $navBar = $('.top-nav');
var $bar = $('.top-nav-bar');
var $barItem = $bar.find('.top-nav-item');
var $overlay = $('.nav-overlay');
var $closeMenu = $('.close-nav');

var $last = 'outside';
var delay;


$barItem.mouseenter(function () {

    var $menu = $(this).find(".top-nav-menu");

    if ($last == "outside") {
        showMenu($menu, true);
    }
    else if ($last == "inside") {
        showMenu($menu, false);
    }

    $last = "inside";
})

.mouseleave(function () {
	var $menu = $(this).find('.top-nav-menu');
	hideMenu($menu);
});

function showMenu($menu, $delay) {
    if ($delay) {
        delay = setTimeout(function () {
            $menu.show();
            $barItem.removeClass('border');
            $barItem.removeClass('right-border');
            $navBar.addClass('top-nav-gray');
            $overlay.fadeIn();

            if (isTouchDevice()) {
                $closeMenu.show();
                $closeMenu.click(function () {
                    $('.top-nav-menu').hide();
                    $closeMenu.hide();
                });
            }
        }, 500);
    } else {
        $overlay.show();
        $navBar.addClass('top-nav-gray');
        $barItem.removeClass('border');
        $barItem.removeClass('right-border');
        $menu.show();
    }

}

function hideMenu($menu) {
    $menu.hide();
}

function clearDelay() {
    if (typeof delay !== 'undefined') {
        clearTimeout(delay);
    }
}

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}
