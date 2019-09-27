define([
    'core/defaultValue',
    'gl-matrix/gl-matrix',
    'renderer/context'
    ], function(
        defaultValue,
        glMatrix,
        Context ) {
    'use strict';

    // test single function module
    console.log(defaultValue(null,45));

    // test glMatrix module
    var matrix = glMatrix.vec3.create();
    console.log(matrix);

    // test standard AMD module
    var context = new Context();
    console.log(context.id);
    console.log(context.originalCanvs);    
});