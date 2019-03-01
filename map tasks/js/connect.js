(function($) {
                $.fn.connectionItem = function(options) {
                    var defaults = {
                        to: $(window)
                    };
                    var settings = $.extend({}, defaults, options);
                    return this.each(function() {
                        var from = $(this);
                        var x0, y0;
                        var x, y, x1, y1, r;
                        var to = $(settings.to);
                        var hr = $("<hr>", {
                            "class": "connection",
                            css: {
                                position: "absolute"
                            }
                        }).appendTo("body");
                        hr.css("transform-origin", 0);
                        hr.css("-moz-transform-origin", 0);
                        hr.css("-webkit-transform-origin", 0);
                        hr.css("-o-transform-origin", 0);

                        function fn() {
                            var pos = from.offset();
                            x0 = pos.left + from.width() / 2;
                            y0 = pos.top + from.height() / 2;
                            pos = to.offset();
                            x1 = pos.left + to.width() / 2;
                            y1 = pos.top + to.height() / 2;
                            x = x1 - x0;
                            y = y1 - y0;
                            var w = Math.sqrt(x * x + y * y);
                            r = 360 - 180 / Math.PI * Math.atan2(y, x);
                            hr.css({
                                left: x0,
                                top: y0,
                                width: w
                            });
                            hr.css("transform", "rotate(-" + r + "deg)");
                            hr.css("-moz-transform", "rotate(-" + r + "deg)");
                            hr.css("-webkit-transform", "rotate(-" + r + "deg)");
                            hr.css("-o-transform", "rotate(-" + r + "deg)")
                        }
                        $(window).on({
                            resize: fn,
                            load: fn
                        })
                    })
                }
            })(jQuery);

            $(function() {
                $(".0").connectionItem({
                    to: $(".0")
                }); //
                $(".1").connectionItem({
                    to: $(".1")
                }); //
                $(".2").connectionItem({
                    to: $(".2")
                }); //
                $(".3").connectionItem({
                    to: $(".3")
                }); //
                $(".4").connectionItem({
                    to: $(".4")
                }); //
                $(".5").connectionItem({
                    to: $(".5")
                }); //
                $(".6").connectionItem({
                    to: $(".6")
                }); //
                $(".7").connectionItem({
                    to: $(".7")
                }); //
                $(".8").connectionItem({
                    to: $(".8")
                }); //
                $(".9").connectionItem({
                    to: $(".9")
                }); //
                $(".10").connectionItem({
                    to: $(".10")
                }); //
                $(".11").connectionItem({
                    to: $(".11")
                }); //
                $(".12").connectionItem({
                    to: $(".12")
                }); //
                $(".13").connectionItem({
                    to: $(".13")
                }); //
                $(".14").connectionItem({
                    to: $(".14")
                }); //
                $(".15").connectionItem({
                    to: $(".15")
                }); //
            });