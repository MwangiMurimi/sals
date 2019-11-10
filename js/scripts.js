$(document).ready(function () {
  $("select.crust").change(function () {
    var crust = $(this).children("option:selected").val();
    $("form").submit(function () {
      var toppings = [];
      $('#toppings input:checked').each(function () {
        toppings.push(this.value);
      });
      var size = parseInt($("#size").val());
      var number = parseInt($("#number").val());
      var price = parseInt(0);
      // Size -> Price
      if (size === 12) {
        price += 250
      } else if (size === 18) {
        price += 450
      } else if (size === 24) {
        price += 650
      }
      // Crust -> Price
      if (crust === "crispy") {
        price += 100
      } else if (crust === "stuffed") {
        price += 150
      } else if (crust === "gluten-free") {
        price += 120
      } else if (crust === "thin") {
        price += 80
      }
      // Toppings -> Price
      if (toppings.includes("cheese") === true) {
        price += 75
      }
      if (toppings.includes("sauce") === true) {
        price += 75
      }
      if (toppings.includes("basil") === true) {
        price += 50
      }
      if (toppings.includes("pepperoni") === true) {
        price += 50
      }
      if (toppings.includes("macon") === true) {
        price += 50
      }
      if (toppings.includes("mushrooms") === true) {
        price += 50
      }
      if (toppings.includes("chicken") === true) {
        price += 50
      }
      // Number -> Price
      var price = price * number
      $(".price").text("Your Order" + "\r\n" + number + " pizza(s)" + "\r\n" + "Size: " + size + " inches (diameter)" + "\r\n" + "Crust: " + crust + "\r\n" + "Toppings: " + toppings + "\r\n" + "Price: Ksh." + price)

      $(".okay").click(function () {
        // Delivery -> Price
        if ($(".delivered").val(1)) {
          alert("Subtotal: Ksh." + price + "\r\n" + "Delivery fee: Ksh.150" + "\r\n" + "Total: " + (price+=150))
        }
      })
      event.preventDefault();
    })
  })
  // Delivery/Pick Up
  $(".delivered").click(function () {
    $(".branches").hide();
    $(".okay").show();
  })
  $(".collect").click(function () {
    $(".branches").show();
    $(".okay").show();
  })
})