//constructor
function phone(brand, model, color, warranity){
    this.brand = brand;
    this.model = model;
    this.color=color;
    this.warranity = warranity;
};

phone.prototype.ring = function(){
    console.log("Rrrrrringgg!")
};

var myPhone = new phone("Huawei", "P40", "Blue", "12");

console.log(myPhone);