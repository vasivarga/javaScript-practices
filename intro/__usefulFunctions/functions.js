// getElementsByTagName() returns a HTML Collection

var ul = document.getElementsByTagName("ul");

// we can add functions to the prototype of any object
// we can copy funtions from existing defined objects

HTMLCollection.prototype.forEach = Array.prototype.forEach;

//adding a new item to each list

ul.forEach(function(element){
    element.innerHTML += "<li>Text</li>"
});

var green = document.getElementsByClassName("green");
green.forEach(function(element){
    element.style.color = "blue";
});


// removing a child element

var list1 = document.getElementById("list1");
var item1 = document.getElementById("item1");

list1.removeChild(item1);


//method to remove() any element from the DOM

Element.prototype.remove = function(){
    var parent = this.parentElement();
    parent.removeChild(this);
}

///////////////////////////EVENT HANDLING///////////////////////////////////////


var f1 = function(){
    console.log("You clicked on button 1.")
};

var f2 = function(){
    console.log("Button 1 clicked.")
};

//fire a method when button1 is clicked
var button1 = document.getElementById("button1");
button1.onclick = f1;

//fire multiple methods when button 1 is clicked
button1.addEventListener("click",f1);
button1.addEventListener("click",f2);

//remove event listener
button1.removeEventListener("click",f1);


var button2 = document.getElementById("button2");
button2.ondblclick = function(){
    var p1 = document.getElementById("p1");
    p1.style.backgroundColor = "lightgreen";
};

//changing position of an element

var title = document.getElementById("title");
title.onclick = function(){
  this.style.position = "fixed";
    var x =0;
    var a = setInterval(function(){
        x++;
        title.style.top = 100 + 100 * Math.sin(x)+"px";
        title.style.left = 100 + 100 * Math.sin(x)+"px";
    },1000)
};

var button = document.getElementById("button");

function fmousedown(event){
    console.log(event);
    
    //1 - left mouse button, 2 - middle , 3 - right
    console.log(event.which); 
}

button.addEventListener('mousedown',fmousedown);

var img = document.querySelector("img");

//making an element follow the mouse
addEventListener("mousemove", fmousemove);
function fmousemove(event){
    img.style.left=event.pageX+"px";
    img.style.top=event.pageY+"px";

}

// event that fires when a key is pressed
addEventListener("keydown", fkeydown);
function fkeydown(event){
    document.body.style.background = "red";
}

// event that fires when a key is released
addEventListener("keyup", fkeyup);
function fkeyup(event){
    document.body.style.background = "";
}


// scroll events

//addEventListener("scroll",fscroll)

//function fscroll(){
//    //the height off the scrollview
//    console.log(document.body.scrollHeight);
//    //the height off the view of the page
//    console.log(innerHeight);
//    //the number of pixels scrolled vertically
//    console.log(pageYOffset);
//}


var input = document.querySelector("input");

//focus
input.addEventListener("focus",ffocus);
function ffocus(event){
    //event target = the object that ut targets
    console.log(event);
    //target value
    console.log(event.target.value);
}

//unfocus = blur
input.addEventListener("blur",fblur);
function fblur(event){
    //event target = the object that ut targets
    console.log("blured");
}

//preventDefault
var link = document.querySelector("a");
link.addEventListener("click", fPreventDefault);
function fPreventDefault(){
    console.log(event);
    event.preventDefault();
}

//CLOSURES


//var n;
//function f(x){
//    n = function(){
//        return x;
//    };
//    x++;
//}
//
//f(12);
//console.log(n());

function car(){
    var make;
    return {
        setMake : function(x) {make=x;}, 
        getMake : function() {return make;} 
}}

var myCar = car();
myCar.setMake("Dacia");
console.log(myCar.getMake());

//Closures with event loops

//WRONG: WILL DISPLAY 3 for each button
//for(var i=0; i<3; i++){
//    document.getElementById(i).onclick = function () { 
//        var x = i;  
//        console.log(x);
//    };
//}

//RIGHT:
    for(var i=0; i<3; i++){
        document.getElementById(i).onclick = f(i);
    }
    
function f(i){
    return function() {
        console.log(i);
    }
}
//

var cars = [];

for (var i=0; i<3; i++){
    cars.push(carsf(i));
}

function carsf(x){
    return function(){
        console.log(x);
    }
}

cars[0]();
cars[1]();
cars[2]();


function run(x){
    var i = -3;
    return function(){
        i+=3;
        return x[i%4];
    }
}

var funct = run([4, 8, 1, 3]);

console.log(funct());
console.log(funct());
console.log(funct());
console.log(funct());
console.log(funct());

