/* Custom JS */
$(function() {
    // Header's text animation
    $(".nav_link").hover(
        function() {
            var title = $(this).text();
            switch (title) {
                case "CHELSEA":
                    $(this).text("切爾西靴");
                    $(this).css("letter-spacing", "5px");
                    break;
                case "ANKLE":
                    $(this).text("踝 靴");
                    $(this).css("letter-spacing", "5px");
                    break;
                case "BAG":
                    $(this).text("提 袋");
                    $(this).css("letter-spacing", "5px");
                    break;
                case "LIFESTYLE":
                    $(this).text("品牌日誌");
                    $(this).css("letter-spacing", "5px");
                    break;
            }
                
            //console.log(title);
        },
        function() {
            var title = $(this).text();
            switch (title) {
                case "切爾西靴":
                    $(this).text("CHELSEA");
                    $(this).css("letter-spacing", "0rem");
                    break;
                case "踝 靴":
                    $(this).text("ANKLE");
                    $(this).css("letter-spacing", "0rem");
                    break;
                case "提 袋":
                    $(this).text("BAG");
                    $(this).css("letter-spacing", "0rem");
                    break;
                case "品牌日誌":
                    $(this).text("LIFESTYLE");
                    $(this).css("letter-spacing", "0rem");
                    break;
            }
                
        }
    );

    $("#hidetype").click(function(){
        $("#type").hide();
    });
    $("#showtype").click(function(){
        $("#type").show();
    });
    $("#hidedetail").click(function(){
        $("#invoice_detail").hide();
    });
    $("#showdetail").click(function(){
        $("#invoice_detail").show();
    });

    $( "#datepicker" ).datepicker({
        dateFormat: "yy-mm-dd"
    });
    /*
    // When scroll to the top, makes header become transparent
    if ($("#show_animation").val() === "true") {
        $("#first-section").addClass("fullscreen-img");
        $("body").addClass("cms_index is_index");
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(window).height();
            var body = $("body");
            if (scrollTop == 0 && body.hasClass("is_index")) {
                body.addClass("cms_index");
                //$("body").switchClass("none","cms_index", 1000,"easeInOutQuad" );
            }
            if (scrollTop != 0) {
                body.removeClass("cms_index");
                //$("body").switchClass("cms_index","none", 1000,"easeInOutQuad" );
            }
        });
    }
    */
    $('.shipping_return').click(function(){
        $(this).find('ul').toggle();
    });

    $('.homepage_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
              }
            }
        ],
    });

    $('.slick-arrow').css("z-index", "99")
              
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        center: true,
        nav: true,
        loop: true,
        stagePadding: 10,
        smartSpeed: 500,
        dots: false,
        navText: ["<i style='padding-top:10px;opacity:0.2;' class='fa fa-chevron-left fa-2x'></i>"
            ,"<i style='padding-top:10px; opacity:0.2;' class='fa fa-chevron-right fa-2x'></i>"],
        navClass: ['owl-prev','owl-next'],
        //URLhashListener: true,
        autoplayHoverPause: true,
        //startPosition: 'URLHash'
    });

    $('.owl-theme .owl-nav [class*=owl-]').css({"background":"transparent",
                                                "color":"#555"});
    /*
    $('.container').click(function(){
        var url = $(this).find('a').attr("href");
        document.location.href=url;
        var hashUrl = location.hash;
        hashUrl = hashUrl.replace("#", "");
        hashUrl/=4;
        
        var activePrice = $('.price').eq(hashUrl);
        $('.price-active').removeClass('price-active');
        activePrice.addClass('price-active');

        var activeDetail = $('.detail').eq(hashUrl);
        $('.detail-active').removeClass('detail-active');
        activeDetail.addClass('detail-active');

        var activeDescription = $('.description').eq(hashUrl);
        $('.description-active').removeClass('description-active');
        activeDescription.addClass('description-active');
    });
    */
    /* Animation for product page's tab */
    $(".w3-button").click(function() {
        var tab = $(this).text();
        var i;
        var x = $(".tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            $(".w3-button").css("background-color", "#FFFFFF");
            $(".w3-button").css("border-bottom", "none");
        }
        document.getElementById(tab).style.display = "block";
        $(this).css("border-bottom", "1px solid gray");
    });
    
});

/* Custom JS End */

jQuery(document).ready(function() {
    "use strict";

    jQuery("[data-toggle]").click(function() {
        var toggleTarget = jQuery(this).data("toggle");
        jQuery(toggleTarget).toggleClass("is-active");
        return false;
    });

    jQuery("#close_btn_right1").on("click", function() {
        jQuery("#slide_cart").slideReveal("hide");
    });
    jQuery("#close_btn_right").on("click", function() {
        jQuery("#slide_menu").slideReveal("hide");
    });
    /*
    jQuery("#slide_cart").slideReveal({
        trigger: jQuery("#cart-black"),
        position: "right",
        push: true,
        autoEscape: true,
        width: 350,
        speed: 700
    });*/
    jQuery("#slide_menu").slideReveal({
        trigger: jQuery("#menu_slide"),
        position: "right",
        push: true,
        autoEscape: true,
        width: 350,
        speed: 700
    });

    jQuery(".show-more").click(function() {
        jQuery(".right_pro_detail").toggleClass("right_pro_detail_1");
        jQuery(".product_bill_info").toggleClass("product_bill_info_1");
    });

    jQuery("#detail_featured_product_slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: [
            '<a class="flex-prev"></a>',
            '<a class="flex-next"></a>'
        ],
        slideSpeed: 500,
        pagination: false
    });

    jQuery("#category-products .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1100, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [1100, 2], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: [
            '<a class="flex-prev"></a>',
            '<a class="flex-next"></a>'
        ],
        slideSpeed: 500,
        pagination: false
    });

    jQuery(".topnav").accordionNew({
        accordion: true,
        speed: 300,
        closedSign: "+",
        openedSign: "-"
    });

    jQuery(
        "ul.accordion li.parent, ul.accordion li.parents, ul#magicat li.open"
    ).each(function() {
        jQuery(this).append('<em class="open-close">&nbsp;</em>');
    });

    jQuery("ul.accordion, ul#magicat").accordionNew();

    jQuery("ul.accordion li.active, ul#magicat li.active").each(function() {
        jQuery(this)
            .children()
            .next("div")
            .css("display", "block");
    });
});

/* Sidebar Dropdown */
(function(jQuery) {
    jQuery.fn.extend({
        accordionNew: function() {
            return this.each(function() {
                var jQueryul = jQuery(this),
                    elementDataKey = "accordiated",
                    activeClassName = "active",
                    activationEffect = "slideToggle",
                    panelSelector = "ul, div",
                    activationEffectSpeed = "fast",
                    itemSelector = "li";
                if (jQueryul.data(elementDataKey)) return false;
                jQuery.each(jQueryul.find("ul, li>div"), function() {
                    jQuery(this).data(elementDataKey, true);
                    jQuery(this).hide();
                });
                jQuery.each(jQueryul.find("em.open-close"), function() {
                    jQuery(this).click(function(e) {
                        activate(this, activationEffect);
                        return void 0;
                    });
                    jQuery(this).bind("activate-node", function() {
                        jQueryul
                            .find(panelSelector)
                            .not(jQuery(this).parents())
                            .not(jQuery(this).siblings())
                            .slideUp(activationEffectSpeed);
                        activate(this, "slideDown");
                    });
                });
                var active = location.hash
                    ? jQueryul.find("a[href=" + location.hash + "]")[0]
                    : jQueryul.find("li.current a")[0];
                if (active) {
                    activate(active, false);
                }

                function activate(el, effect) {
                    jQuery(el)
                        .parent(itemSelector)
                        .siblings()
                        .removeClass(activeClassName)
                        .children(panelSelector)
                        .slideUp(activationEffectSpeed);
                    jQuery(el)
                        .siblings(panelSelector)
                        [effect || activationEffect](
                            effect == "show" ? activationEffectSpeed : false,
                            function() {
                                if (
                                    jQuery(el)
                                        .siblings(panelSelector)
                                        .is(":visible")
                                ) {
                                    jQuery(el)
                                        .parents(itemSelector)
                                        .not(jQueryul.parents())
                                        .addClass(activeClassName);
                                } else {
                                    jQuery(el)
                                        .parent(itemSelector)
                                        .removeClass(activeClassName);
                                }
                                if (effect == "show") {
                                    jQuery(el)
                                        .parents(itemSelector)
                                        .not(jQueryul.parents())
                                        .addClass(activeClassName);
                                }
                                jQuery(el)
                                    .parents()
                                    .show();
                            }
                        );
                }
            });
        }
    });
})(jQuery);
