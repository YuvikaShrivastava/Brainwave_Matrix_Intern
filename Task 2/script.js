document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchIcon.addEventListener("click", () => {
        const value = searchInput.value.trim().toLowerCase();

        const womenKeywords = ["jeans", "tops", "jumpsuit", "dress", "tee", "coord"];
        const menKeywords = ["shorts", "shirt", "tshirt", "trousers", "polo"];

        if (womenKeywords.includes(value)) {
            window.location.href = "women.html";
        } else if (menKeywords.includes(value)) {
            window.location.href = "men.html";
        } else {
            alert("Category not found. Please try again.");
        }
    });
});

function openCart() {
    closeAllPopups();
    document.getElementById('cart-popup').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
}

const cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    const cartContainer = document.getElementById('cart-items');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');

            // Save in cart array
            cartItems.push({ name, price });

            // Update popup content
            cartContainer.innerHTML = "";
            cartItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${item.name} - Rs.${item.price}`;
                cartContainer.appendChild(itemDiv);
            });

            alert(`${name} added to cart!`);
        });
    });
});

const wishlistItems = [];

function openWishlist() {
    closeAllPopups();
    document.getElementById('wishlist-popup').style.display = 'block';
}

function closeWishlist() {
    document.getElementById('wishlist-popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    const wishlistContainer = document.getElementById('wishlist-items');

    wishlistIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const name = icon.getAttribute('data-name');
            const price = icon.getAttribute('data-price');

            // Avoid duplicate wishlist entries
            const alreadyInWishlist = wishlistItems.some(item => item.name === name);
            if (!alreadyInWishlist) {
                wishlistItems.push({ name, price });

                wishlistContainer.innerHTML = "";
                wishlistItems.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.textContent = `${item.name} - Rs.${item.price}`;
                    wishlistContainer.appendChild(itemDiv);
                });

                alert(`${name} added to wishlist!`);
            } else {
                alert(`${name} is already in wishlist.`);
            }
        });
    });
});

function openProfile() {
    closeAllPopups();
    document.getElementById("profile-popup").style.display = "block";
}

function closeProfile() {
    document.getElementById("profile-popup").style.display = "none";
}

// Close all popups when opening a new one
function closeAllPopups() {
    closeCart();
    closeWishlist();
    closeProfile();
}