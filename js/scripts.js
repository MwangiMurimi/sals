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
      if (crust === "Crispy") {
        price += 100
      } else if (crust === "Stuffed") {
        price += 150
      } else if (crust === "Gluten Free") {
        price += 120
      } else if (crust === "Thin") {
        price += 80
      }
      // Toppings -> Price
      if (toppings.includes("Mozzarella") === true) {
        price += 75
      }
      if (toppings.includes("Sal's Secret Sauce") === true) {
        price += 75
      }
      if (toppings.includes("Basil") === true) {
        price += 50
      }
      if (toppings.includes("Pepperoni") === true) {
        price += 50
      }
      if (toppings.includes("Macon") === true) {
        price += 50
      }
      if (toppings.includes("Mushrooms") === true) {
        price += 50
      }
      if (toppings.includes("Chicken") === true) {
        price += 50
      }
      // Number -> Price
      var price = price * number
      $(".price").text("Your Order" + "\r\n" + number + " pizza(s)" + "\r\n" + "Size: " + size + " inches (diameter)" + "\r\n" + "Crust: " + crust + "\r\n" + "Toppings: " + toppings + "\r\n" + "Subtotal: Ksh." + price)

      // Delivery/Pick Up
      $(".delivered").click(function () {
        $(".branch").hide();
        var place = prompt("Please enter the address where you would like the delivery to be made to")
        prompt("For communication with delivery staff, kindly enter your phone no.")
        if (place === "") {
          alert("Please enter a valid address")
          var place = prompt("Please enter the address where you would like the delivery to be made to")
          alert("Your order will be delivered to " + place)
        } else {
          alert("Your order will be delivered to " + place)
        }
        if ($(".delivered").val(1)) {
          alert("Subtotal: Ksh." + price + "\r\n" + "Delivery fee: Ksh.150" + "\r\n" + "Total: Ksh." + (price += 150) + "\r\n" + "VAT incl.")
          alert("Thank you and Buon Appetito!")
        }
      })
      $(".collect").click(function () {
        $(".branch").show();
        $(".okay").show();
        $("select.branches").change(function () {
          var branch = $(this).children("option:selected").val();
          $(".okay").click(function () {
            alert("Kindly collect your order at the " + branch + " branch within the next 30 minutes")
            alert("Subtotal: Ksh." + price + "\r\n" + "Delivery fee: N/A" + "\r\n" + "Total: Ksh." + price + "\r\n" + "VAT incl.")
            alert("Thank you and Buon Appetito!")
          })
        })
      })
      event.preventDefault();
    })
  })
})