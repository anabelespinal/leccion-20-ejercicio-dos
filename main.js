/*
var feature = "closures";
(function (){
    if( typeof feature === "undefined"){
        var feature = "callbacks";
        console.log("JS coders love it's " + feature);
    } else {
        console.log("JS developers love it's " + feature);
    }
})();
*/
(function (){
    var feature = "closures";
    if( typeof feature === "undefined"){
        var feature = "callbacks";
        console.log("JS coders love it's " + feature);
    } else {
        console.log("JS developers love it's " + feature);
    }
})();
