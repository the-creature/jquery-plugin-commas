window.TEMPLATE = (function($) {
    var SELF;

    return {
        init: function() {
            $(document.body).bind("render", function() {
                window.TEMPLATE.addCommas();
            });
        },

        addCommas: function() {
            function commaSeparateNumber(val) {
                while (/(\d+)(\d{3})/.test(val.toString())) {
                    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                }

                return val;
            }

            $(".j-num").each(function() {
                var $this = $(this),
                    num = parseInt($this.html());

                $this.html(commaSeparateNumber(num)).removeClass('j-num');
            });
        }
    }
}(jQuery));

$(document).ready(function() {
    window.TEMPLATE.init();

    $.fn.render = function(template) {
        var elm = this;

        elm.html(template);
        elm.trigger("render");
    };

    $('.j-add-comma').render($('.j-add-comma').data('number'));
});
