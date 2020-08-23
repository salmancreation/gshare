(function ($) {
    "use strict";

    $(document).ready(function () {

        // WOW js initalization
        new WOW().init();

    });

    // sticky menu
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 36) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $(function () {
        function reSizeArea(e) {
            var arr = $.makeArray(e);
            var ah = $.map(arr, function (h) {
                return $(h).height();
            });
            var mh = Math.max.apply($(this).height(), ah);
            e.height(mh);
        }
        reSizeArea($('.package-features'));
        reSizeArea($('.package-header'));
    });
    

    $("#close_btn").click(function(e){
        $(".mobile-menu.collapse").removeClass("show");
    }); 

})(jQuery);
