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
