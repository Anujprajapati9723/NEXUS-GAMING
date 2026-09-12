/* ================= MENU ================= */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("active");

}


/* ================= LOGIN ================= */

function openLogin() {

    document
        .getElementById("loginPopup")
        .style.display = "flex";

}


function closeLogin() {

    document
        .getElementById("loginPopup")
        .style.display = "none";

}


function login() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;

    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;

    }

    alert("Login successful! 🎮");

    closeLogin();

}


function signup() {

    alert(
        "Signup system demo.\n\n" +
        "Real signup ke liye database/backend required hai."
    );

}


/* ================= CART ================= */

let cart = [];

let total = 0;


function addCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    document
        .getElementById("cartCount")
        .innerText = cart.length;

    alert(name + " added to cart! 🛒");

}


function openCart() {

    updateCart();

    document
        .getElementById("cartPopup")
        .style.display = "flex";

}


function closeCart() {

    document
        .getElementById("cartPopup")
        .style.display = "none";

}


function updateCart() {

    let box =
        document.getElementById("cartItems");

    box.innerHTML = "";

    if (cart.length === 0) {

        box.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function(item, index) {

        let div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML =
            (index + 1) +
            ". " +
            item.name +
            " - ₹" +
            item.price;

        box.appendChild(div);

    });


    document
        .getElementById("cartTotal")
        .innerText = total;

}


/* ================= CLEAR CART ================= */

function clearCart() {

    cart = [];

    total = 0;

    document
        .getElementById("cartCount")
        .innerText = "0";

    updateCart();

}


/* ================= WHATSAPP ================= */

function whatsappOrder() {

    if (cart.length === 0) {

        alert("Cart is empty!");

        return;

    }


    let message =
        "Hello NEXUS GAMING!%0A%0A" +
        "I want to order:%0A";


    cart.forEach(function(item) {

        message +=
            "- " +
            item.name +
            " ₹" +
            item.price +
            "%0A";

    });


    message +=
        "%0ATotal: ₹" +
        total;


    

    window.open(
        "https://wa.me/919724103573?text=" +
        message,
        "_blank"
    );

}


/* ================= SEARCH ================= */

function searchProducts() {

    let search =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        let name =
            product.dataset.name;

        if (name.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= CATEGORY ================= */

function filterProducts() {

    let category =
        document
        .getElementById("category")
        .value;

    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        let productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            category === productCategory
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= IMAGE UPLOAD ================= */

function uploadImage(event) {

    let file =
        event.target.files[0];

    if (!file) return;


    let reader =
        new FileReader();


    reader.onload = function(e) {

        let img =
            document.createElement("img");

        img.src =
            e.target.result;

        document
            .getElementById("uploadedGallery")
            .appendChild(img);

    };


    reader.readAsDataURL(file);

}


/* ================= TOURNAMENT ================= */

function registerTournament() {

    let name =
        prompt(
            "Enter your Gamer Name:"
        );


    if (name === null || name === "") {

        alert("Registration cancelled.");

        return;

    }


    alert(
        "🏆 Congratulations " +
        name +
        "!\n\n" +
        "Tournament registration request received."
    );

}


/* ================= CONTACT ================= */

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Message sent successfully! 🚀"
            );

            this.reset();

        }
    );
