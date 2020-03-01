var pizzaSize, crust, toppings, deliveryLocation


//constructor for deriving new instances
function myOrder(pizzaSize, crust, toppings, deliveryLocation){
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.deliveryLocation = deliveryLocation;
}

//prices 
var pizzaPrices = (small = 500, large = 1000, medium = 750);
var crustPrices = (crispy = 200, Stuffed 400, Glutten-Free = 450);
var toppings = (With toppings = 200, Without toppings = 150);


// checkout button
$(document).click(function(event){
    $("#checkout").click(function(){
        var pizzaSize = ("#pizzaSize").val();
        var crust = ("#crust").val();
        var toppings = ("#toppings").val();
        var deliveryLocation = ("#deliveryLocation").val();
    });
});

if (pizzaSize == 0 || crust == 0 || toppings == 0){
    alert("kindly fill in the required fields");}
    else{
        $("#form").show();
    }







