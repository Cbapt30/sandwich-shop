function SideDish(name, price) {
  this.name = name;
  this.price = price;
}

function DeluxeBurger(name, toppings, price) {
  this.name = name;
  this.toppings = toppings;
  this.price = price;
}

var bleuRibbon = new DeluxeBurger("Bleu Ribbon", ["Bleu cheese", "onions", "lettuce", "tomatoes", "aioli"], 10);

function buildYourOwnBurger (toppings, price) {
  this.toppings = toppings;
  this.price = price;
}



//User Interface Logic


$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    var toppings = $("input:checkbox[name=work-transportation]:checked").val();
    var newBurger = new buildYourOwnBurger(toppings, price);

    // $(".hidden").show();
    // $("input:checkbox[name=work-transportation]:checked").each(function(){
    //   var workTransportationMode = $(this).val();
    //   $('#work-responses').append(workTransportationMode + "<br>");
    // });
    // $('#transportation_survey').hide();
  });
});
