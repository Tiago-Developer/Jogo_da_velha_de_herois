(function ($) {
    $.fn.craftyslidej1 = function (optionsj1) {

        // Defaults
        var defaultsj1 = {
            "width": 200,
            "height": 300,
            "pagination": true,
            "fadetime": 350,
            "delay": 5000
        };

        var optionsj1 = $.extend(defaultsj1, optionsj1);

        return this.each(function () {

            // Vars
            var $thisj1 = $(this);
            var $slidesj1 = $thisj1.find("ul li");

            $slidesj1.not(':first').hide();

            // Pagination
            function paginate() {
                $thisj1.append("<ol id='pagination_j1' />");
                
                var i = 1;
                $slidesj1.each(function () {
                    $(this).attr("id", "slide" + i);
                    $("#pagination_j1").append("<li><a href='#slide" + i + "'>" + i + "</a></li>");
                    i++;
                });
                
                $("#pagination_j1 li a:first").addClass("active_j1");
            }

            // Add captions
            function captions() {
                $slidesj1.each(function () {
                    $caption_j1 = $(this).find("img").attr("title");
                    if ($caption_j1 !== undefined) {
                        $(this).prepend("<p class='caption_j1'>" + $caption_j1 + "</p>");
                    }
                    $slidesj1.filter(":first").find(".caption_j1").css("bottom", 0);
                });
            }

            // Manual mode
            function manual() {
                var $pagination = $("#pagination_j1 li a");
                $pagination.click(function (e) {
                    e.preventDefault();
                    var $current = $(this.hash);
                    if ($current.is(":hidden")) {
                        $slidesj1.fadeOut(optionsj1.fadetime);
                        $current.fadeIn(optionsj1.fadetime);
                        $pagination.removeClass("active_j1");
                        $(this).addClass("active_j1");
                        $(".caption_j1").css("bottom", "-37px");
                        $current.find(".caption_j1").delay(300).animate({
                            bottom: 0
                        }, 300);
                    }
                });
            }

            // Auto mode
            function auto() {
                setInterval(function () {
                    $slidesj1.filter(":first-child").fadeOut(optionsj1.fadetime).next("li").fadeIn(optionsj1.fadetime).end().appendTo("#slideshow1 ul");

                    $slidesj1.each(function () {
                        if ($slidesj1.is(":visible")) {
                            $(".caption_j1").css("bottom", "-37px");
                            $(this).find(".caption_j1").delay(300).animate({
                                bottom: 0
                            }, 300);
                        }
                    });

                }, optionsj1.delay);
            }

            // Width
            $thisj1.width(optionsj1.width);
            $thisj1.find("ul, li img").width(optionsj1.width);

            // Height
            $thisj1.height(optionsj1.height);
            $thisj1.find("ul, li").height(optionsj1.height);

            // Check Boolean values
            if (optionsj1.pagination === true) {
                paginate();
            } else {
                auto();
            }

            captions(); manual();

        });
    };
})(jQuery);



//----------------------------------------------------------------


(function ($) {
    $.fn.craftyslidej2 = function (optionsj2) {

        // Defaults
        var defaultsj2 = {
            "width": 200,
            "height": 300,
            "pagination": true,
            "fadetime": 350,
            "delay": 5000
        };

        var optionsj2 = $.extend(defaultsj2, optionsj2);

        return this.each(function () {

            // Vars
            var $thisj2 = $(this);
            var $slidesj2 = $thisj2.find("ul li");

            $slidesj2.not(':first').hide();

            // Pagination
            function paginatej2() {
                $thisj2.append("<ol id='pagination_j2' />");
                
                var i = 1;
                $slidesj2.each(function () {
                    $(this).attr("id", "slide_j2_" + i);
                    $("#pagination_j2").append("<li><a href='#slide_j2_" + i + "'>" + i + "</a></li>");
                    i++;
                });
                
                $("#pagination_j2 li a:first").addClass("active_j2");
            }

            // Add captions
            function captionsj2() {
                $slidesj2.each(function () {
                    $caption_j2 = $(this).find("img").attr("title");
                    if ($caption_j2 !== undefined) {
                        $(this).prepend("<p class='caption_j2'>" + $caption_j2 + "</p>");
                    }
                    $slidesj2.filter(":first").find(".caption_j2").css("bottom", 0);
                });
            }

            // Manual mode
            function manualj2() {
                var $pagination = $("#pagination_j2 li a");
                $pagination.click(function (e) {
                    e.preventDefault();
                    var $current = $(this.hash);
                    if ($current.is(":hidden")) {
                        $slidesj2.fadeOut(optionsj2.fadetime);
                        $current.fadeIn(optionsj2.fadetime);
                        $pagination.removeClass("active_j2");
                        $(this).addClass("active_j2");
                        $(".caption_j2").css("bottom", "-37px");
                        $current.find(".caption_j2").delay(300).animate({
                            bottom: 0
                        }, 300);
                    }
                });
            }

            // Auto mode
            function auto() {
                setInterval(function () {
                    $slidesj2.filter(":first-child").fadeOut(optionsj2.fadetime).next("li").fadeIn(optionsj2.fadetime).end().appendTo("#slideshow2 ul");

                    $slidesj2.each(function () {
                        if ($slidesj2.is(":visible")) {
                            $(".caption_j2").css("bottom", "-37px");
                            $(this).find(".caption_j2").delay(300).animate({
                                bottom: 0
                            }, 300);
                        }
                    });

                }, optionsj2.delay);
            }

            // Width
            $thisj2.width(optionsj2.width);
            $thisj2.find("ul, li img").width(optionsj2.width);

            // Height
            $thisj2.height(optionsj2.height);
            $thisj2.find("ul, li").height(optionsj2.height);

            // Check Boolean values
            if (optionsj2.pagination === true) {
                paginatej2();
            } else {
                auto();
            }

            captionsj2(); manualj2();

        });
    };
})(jQuery);