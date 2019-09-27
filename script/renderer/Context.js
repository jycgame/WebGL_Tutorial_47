define(['../core/defineProperties'
    ], function(
        defineProperties) {
    'use strict';

    function Context(canvas, options) {
        // members

        // functions
        this.originalCanvas = canvas;
    }

    defineProperties(Context.prototype, {
        id : {
            get : function() {
                return 100;
            }
        }
    });

    return Context;
});