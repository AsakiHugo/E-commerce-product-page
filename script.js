// amount
const amount = document.querySelector(".amount-btn .amount");
const plus_btn = document.querySelector(".amount-btn .plus-icon");
const minus_btn = document.querySelector(".amount-btn .minus-icon");
const cart_btn = document.querySelector(".cart-btn");
const order_amount = document.querySelector(".card-icon .order-number");

let count = 0;
let total_amount = 0;
let quantity = 0;

// adding counting order number
plus_btn.addEventListener("click", () => {
    count++;
    amount.textContent = count;
});

// subtracting counting order number
minus_btn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        amount.textContent = count;
    }
});

cart_btn.addEventListener("click", () => {
    if (count > 0) {
        const orderCount = parseInt(order_amount.textContent) + count;
        order_amount.textContent = orderCount;
        total_amount = 125.00 * count;
        quantity = count;
        count = 0;
        amount.textContent = count;
    }

    cart_display.innerHTML += `
        <div class="cart-order">
            <div class="order-container">
                <div class="orders">
                <div class="order-img">
                    <img src="images/image-product-1.jpg" alt="">
                </div>
                <div class="order-desc">
                    <p class="order-title">Fall Limited Edition Sneakers</p>
                    <p class="order-total">
                      $125.00 × ${quantity}
                      <span class="order-amount">$${total_amount}.00</span>
                    </p>
                  </div>
                </div>
                <div class="delete-btn">
                  <img src="images/icon-delete.svg" alt="">
                </div>
                </div>
            <button class="checkout-btn">Checkout</button>
        </div>
    `

    const delete_btn = document.querySelectorAll(".order-container .delete-btn");
    
    delete_btn.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            const order_container_element = deleteButton.parentElement;
            const cart_order_element = order_container_element.parentElement;

            cart_order_element.remove();

            const orderCount = parseInt(order_amount.textContent) - quantity;
            order_amount.textContent = orderCount;
        });
    });      
});

// delete_btn.forEach(deleteButton => {
//     deleteButton.addEventListener('click', () => {
//         const order_container_element = deleteButton.parentElement;
//         const cart_order_element = order_container_element.parentElement;

//         const total_amount = parseFloat(cart_order_element.getAttribute("data-total-amount"));
//         const newTotalAmount = parseFloat((parseFloat(order_amount.textContent) - total_amount).toFixed(2));

//         order_amount.textContent = orderCount;
//         cart_order_element.remove();
//     });
// });


// cart display
const cart_check = document.querySelector(".profile-container .card-icon");
const cart_card = document.querySelector(".nav-container .cart-card");
const empty_text = document.querySelector(".cart-desc .empty-text");
const cart_display = document.querySelector(".cart-desc .cart-display");
const cart_order = document.querySelector(".cart-desc .cart-order");

cart_check.addEventListener("click", () => {
    cart_card.classList.toggle("active");

    if (parseInt(order_amount.textContent) > 0) {
        empty_text.style.display = "none";
        cart_display.style.display = "block";
    
      // add your code to display the order details here
    } else {
        empty_text.style.display = "block";
        cart_display.style.display = "none";
    }
})

// menu-lists
const menu = document.querySelector(".left-nav .menu");
const overlay = document.querySelector(".overlay");
const nav_lists = document.querySelector(".nav-container .nav-lists");
const close_btn = document.querySelector(".nav-container .close-btn");

// menu display
function openMenu() {
    nav_lists.classList.add("active");
    close_btn.classList.add("active");
    overlay.classList.add("active");
}

menu.addEventListener("click", openMenu);

// menu close
function closeMenu() {
    nav_lists.classList.remove("active");
    close_btn.classList.remove("active");
    overlay.classList.remove("active");
}

close_btn.addEventListener("click", closeMenu)

// main-product-display
const checkout = document.querySelector(".checkout");
const checkout_close = document.querySelector(".checkout .cclose-btn");
const coverlay = document.querySelector(".checkout .coverlay");
const mainProductImage = document.querySelector(".left-side-products .main-product img");
const products = document.querySelectorAll(".slider .product");

function displayCard() {
    checkout.classList.add("active");
    coverlay.classList.add("active");
    document.body.style.overflow = 'hidden';
}

mainProductImage.addEventListener("click", displayCard)

checkout_close.addEventListener("click", () => {
    checkout.classList.remove("active");
    coverlay.classList.remove("active");
    document.body.style.overflow = 'auto';
})

products.forEach(product => {
  product.addEventListener("click", () => {
    // Get the source of the clicked product image
    const clickedProductImageSrc = product.querySelector('img').getAttribute('src');
    
    // Set the source of the main product image
    mainProductImage.setAttribute('src', clickedProductImageSrc);

    // Remove the active class from all product images
    products.forEach(product => {
      product.classList.remove('active');
    });

    // Add the active class to the clicked product image
    product.classList.add('active');
  });
});

// checkout display
const c_mainProductImage = document.querySelector(".checkout-product .cmain-product img");
const c_products = document.querySelectorAll(".cslider-product .cproduct");

c_products.forEach(product => {
  product.addEventListener("click", () => {
    console.log("hello");
    // Get the source of the clicked product image
    const clickedProductImageSrc = product.querySelector('img').getAttribute('src');
    
    // Set the source of the main product image
    c_mainProductImage.setAttribute('src', clickedProductImageSrc);

    // Remove the active class from all product images
    c_products.forEach(product => {
      product.classList.remove('active');
    });

    // Add the active class to the clicked product image
    product.classList.add('active');
  });
});

// image slider
// Array of image URLs
const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];

const prev_btn = document.querySelector(".left-side-products .prev-btn");
const next_btn = document.querySelector(".left-side-products .next-btn");
let currentIndex = 0;

prev_btn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainProductImage.src = images[currentIndex];
})

next_btn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainProductImage.src = images[currentIndex];
})  



