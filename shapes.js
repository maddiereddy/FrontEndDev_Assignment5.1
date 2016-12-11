/**
 * Created by maddie on 12/7/16.
 */
"use strict";
//used in moduleExample
var Shapes;
(function (Shapes) {
    function Triangle() {
        console.log("Draws a triangle");
    }
    Shapes.Triangle = Triangle;
    function Square() {
        console.log("Draws a square");
    }
    Shapes.Square = Square;
})(Shapes = exports.Shapes || (exports.Shapes = {}));
