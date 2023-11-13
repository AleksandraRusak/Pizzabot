// Variables
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Function to check if the pizza is on the menu
function checkOrderName(name) {
  return [vegetarian, hawaiian, pepperoni].includes(name);
}

// Function to calculate the total cost
function totalCost(quantity) {
  return pizzaPrice * quantity;
}

// Function to calculate the cooking time
function cookingTime(quantity) {
  if (quantity >= 1 && quantity <= 2) {
    return 10;
  } else if (quantity >= 3 && quantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

document
  .getElementById("pizzaOrderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const orderName = document.getElementById("pizzaType").value;
    const orderQuantity = parseInt(document.getElementById("quantity").value);

    if (checkOrderName(orderName)) {
      const total = totalCost(orderQuantity);
      const time = cookingTime(orderQuantity);
      document.getElementById(
        "orderResult"
      ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${total} kr. The pizzas will take ${time} minutes.`;
    } else {
      document.getElementById("orderResult").innerHTML =
        "Sorry, we don't have that pizza on our menu.";
    }
  });
