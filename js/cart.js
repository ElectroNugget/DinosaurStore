/*
 ██████  █████  ██████  ████████ 
██      ██   ██ ██   ██    ██    
██      ███████ ██████     ██    
██      ██   ██ ██   ██    ██    
 ██████ ██   ██ ██   ██    ██                                 
*/
//Contains all the scripts for running the cart.

//Adds a product to the cart.
function addToCart() {
  let quantity = parseInt(document.getElementById("quantityInput").value);
  let dinoName = document.getElementById("dinosaurName").innerHTML;
  let price = document.getElementById("invisiblePrice").innerHTML;

  let cart = JSON.parse(localStorage.getItem("cart"));

  if (cart !== null) {
    const index = cart.findIndex((object) => object.productName === dinoName);
    if (index === -1) {
      cart.push({ productName: dinoName, quantity: quantity, price: price });
    } else {
      cart[index].quantity += quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    let cart = [{ productName: dinoName, quantity: quantity, price: price }];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // console.log(localStorage.getItem("cart")); Good for debugging cart.
  injectCartCount();
}

//Generates the cart table on the cart page.
function populateCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let number = 1;
  let totalPrice = 0;

  if (cart === null) {
    return;
  }

  cart.forEach((dinosaur) => {
    totalPrice += dinosaur.price * dinosaur.quantity;
    document.getElementById("injectTable").innerHTML += `<tr>
  <th scope="row">${number++}</th>
  <td>${dinosaur.productName}</td>
  <td>${dinosaur.quantity}</td>
  <td>${(dinosaur.price * dinosaur.quantity).toLocaleString()} USD</td>
  <td><i class="fas fa-trash-alt" onclick="removeItem(\'${
    dinosaur.productName
  }\')" style="color:red">
  </tr>`;
  });
  document.getElementById("totalPrice").innerHTML =
    totalPrice.toLocaleString() + " USD";
}

//Removes an item from the cart and repopulates the page.
function removeItem(productName) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let newCart = cart.filter((product) => {
    return product.productName !== productName;
  });

  localStorage.setItem("cart", JSON.stringify(newCart));

  document.getElementById("injectTable").innerHTML = "";
  populateCart();
  injectCartCount();
  location.reload();
}

//Checks the user out and empties the cart.
function checkout() {
  alert("Thanks for shopping with DinoStore!");
  localStorage.removeItem("cart");
  injectCartCount();
  location.reload();
}

//Empties the cart.
function emptyCart() {
  alert("Your cart has been emptied.");
  localStorage.removeItem("cart");
  populateCart();
  injectCartCount();
  window.location.reload();
  return false;
}
