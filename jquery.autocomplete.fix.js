/*!
* jquery.autocomplete.fix.js
* https://github.com/ltcszk/jquery.autocomplete.fix.js
*
* Copyright 2012, ltcszk
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function ($) {
    if ($.fn.autocomplete) {
        var _old = $.fn.autocomplete;
        $.fn.autocomplete = function () {
            this.bind('input', function () {
                $(this).trigger('keydown.autocomplete');
            })
            return _old.apply(this, arguments);
        }
    }
})(jQuery);