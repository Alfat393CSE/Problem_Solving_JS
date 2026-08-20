document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 1100 },
    { id: 3, name: "Product 3", price: 2100.999 },
    { id: 4, name: "Product 4", price: 910.09 },
  ];

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotalDisplay = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutButton = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data_id = "${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data_id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveLocalStorage();
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotalDisplay.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}
        <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
      });
    } else {
      emptyCart.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.getAttribute("data-index"));
      cart.splice(index, 1);
      saveLocalStorage();
      renderCart();
    }
  });

  checkOutButton.addEventListener("click", () => {
    cart.length = 0;
    alert("Successfully Order Completed...");
    renderCart();
  });

  function saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  renderCart();
});
