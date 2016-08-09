var Kuruma = function() {
    // default
    this.number = "わ04-56";
    this.color  = "red";
    this.price  = 1000000;
}

Kuruma.prototype.showInformation = function() {
    var self = this;

    console.log("番号: " + self.number);
    console.log("色　: " + self.color);
    console.log("価格: " + self.price);
}

Kuruma.prototype.changeColor = function(color) {
    var self = this;

    self.color = color;
}
