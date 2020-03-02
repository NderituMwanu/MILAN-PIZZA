var pizzaSize, crust, toppings, deliveryLocation, totalAmtPayable, Amount, summary


//constructor for deriving new instances
function myOrder(pizzaSize, crust, toppings, deliveryLocation, totalAmtPayable){
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.deliveryLocation = deliveryLocation;
    this.totalAmtPayable = totalAmtPayable;
    this.Amount = Amount;
    this.summary = summary;
}

//prices 
var pizzaPrice = (small = 500, large = 1000, medium = 750);
var crustPrice = (crispy = 200, Stuffed = 400, GluttenFree = 450);
var topping = (WithToppings = 200, WithoutToppings = 150);


// checkout button
$(document).click(function(event){
    $("#checkout").click(function(){
        var pizzaSize = ("#pizzaSize").val();
        var crust = ("#crust").val();
        var topping = ("#toppings").val();
        var deliveryLocation = ("#deliveryLocation").val();
    });
});

if ((pizzaSize == "0") || (crust == "0") || (toppings == "0")){
    alert("kindly fill in the required fields");
}
    else{
        $("#form").show();
    };
    
    var costOfDelivery = "";
    var location = "";

    if (location == withinCBD){
        var costOfDelivery = parseInt(250);
    }
        else{
            var costOfDelivery = parseInt(400);
        };

var totalAmtPayable = pizzaSize + crustPrice + topping;
        

$(document).ready(function(){
    $("#chackout").click(function(){
        alert("Your Total is " + totalAmtPayable)
    });
});


