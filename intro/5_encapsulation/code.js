var phone = function (nMake, nModel, nWarranty){
   
    //private properties
    var make, model, warranty;
    //private method
    function validWarranty(key){
        return key == 'password';
    }
    
    //priviledged methods
    this.setMake = function(x){
        make = x;
    }
    
    this.setModel = function(x){
        model = x;
    }
    
    this.setWarranty = function(x, key){
        if(validWarranty(key)){
            warranty = x;
        }else{
            console.log("Invalid key");
        }
        
    }
    
    this.getMake=function(){
        return make;
    }
    
    this.getModel=function(){
        return model;
    }
    
    this.getWarranty=function(){
        return warranty;
    }
   
    this.setMake(nMake);
    this.setModel(nModel);
    this.setWarranty(nWarranty, 'password');
    
};
