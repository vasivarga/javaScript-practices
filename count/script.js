
var x=0;

function count (){
    console.log(x);
    x++;
    
    if(x==10)
        clearInterval(counter);
}

var counter = setInterval(count,1000)

setTimeout(function(){
    console.log("3 seconds passed");
},3000);