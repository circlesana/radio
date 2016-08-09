$(document).ready(function() {
    var val1 = 2;
    var val2 = 3;

    var addFunction = function(a, b) {
        return a + b;
    }

    function add(a, b) {
        return a + b;
    }

    var kuruma = new Kuruma();
    kuruma.showInformation();

    var track = new Kuruma();

    setTimeout(function() {
        console.log('aaa');
    }, 1000);

    console.log('bbb');
});
