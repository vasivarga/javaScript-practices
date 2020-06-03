function room (capacity, price, number){
    this.capacity = capacity;
    this.price = price;
    this.number = number;
    this.booked = false;
};

var room1 = new room(2,50,1);
var room2 = new room(3,70,2);
var room3 = new room(2,50,3);
var room4 = new room(3,65,4);
var room5 = new room(3,55,5);

var hotel = {
    name: "Hilton town centre",
    stars: 5,
    rooms: [room1, room2, room3, room4, room5]
};


room.prototype.info = function(){
    var status = this.booked ? "booked" : "vacant"  
    
    console.log("Room number "+this.number+" is "+status+". This room costs $"+this.price+" per night and can host up to "+this.capacity+" guests.");
};

room.prototype.book = function(){
    this.booked = true;
    console.log("Room number "+ this.number+ " has been booked!");
};

room.prototype.checkout = function(){
    this.booked = false;
    console.log("Room number "+ this.number+ " has been checked out!");
};

room.prototype.changePrice = function(newPrice){
    var oldPrice = this.price;
    this.price = newPrice;
    console.log("The price of room number "+ this.number+ " has been changed from $"+oldPrice+" to $"+this.price+".");
};


hotel.info = function(){
    for(var i=0; i<this.rooms.length; i++)
        this.rooms[i].info();
    
};


hotel.book = function(number){
    var roomFound = false;
    for(var i=0; i<this.rooms.length; i++)
        {
            if (this.rooms[i]["capacity"]=number && !this.rooms[i]["booked"])
                {
                this.rooms[i].book();
                    roomFound=true;
                    break;
                }
        }
    if(!roomFound){
        console.log("Sorry, there are no rooms matching your query!");
    }
};

hotel.checkout = function(roomNumber){
    for(var i=0; i<this.rooms.length; i++)
        {
            if(this.rooms[i]["number"]===roomNumber && this.rooms[i]["booked"])
                {
                    this.rooms[i].checkout();
                    break;
                }
        }
    
};