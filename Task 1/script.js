// Mapping of categories to URLs
const categoryUrls = {
    "Headphones": "https://www.amazon.com/s?k=headphones",
    "Gifts for Mother's Day": "https://www.amazon.com/s?k=mother's+day+gifts",
    "Fitness": "https://www.amazon.com/s?k=fitness",
    "Dresses": "https://www.amazon.com/s?k=dresses",
    "Gaming": "https://www.amazon.com/s?k=gaming",
    "Electronic items": "https://www.amazon.com/s?k=electronics",
    "Deals in PC": "https://www.amazon.com/s?k=pc+deals",
    "Makeup": "https://www.amazon.com/s?k=makeup&crid=3UDRZ7WOFQSVU&sprefix=maekup%2Caps%2C435&ref=nb_sb_noss_2",
    "Health": "https://www.amazon.com/s?k=peanut+butter+gym&crid=XJ3WQL0AZRG7&sprefix=peanut+butter+gy%2Caps%2C307&ref=nb_sb_noss_2",
};

// Selecting elements
const seeMoreBtns = document.querySelectorAll(".box-content p");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const searchSelect = document.querySelector(".search-select");
const signInBtn = document.querySelector(".foot-panel0 button");
const startHereLink = document.querySelector(".foot-panel0 a");

// Handle See More click
const handleSeeMoreClick = (categoryText) => {
    const url = categoryUrls[categoryText];
    if (url) {
        window.open(url, "_blank");
    }
};

// Attach click events to See More
seeMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const categoryText = btn.parentElement.querySelector("h2").innerText;
        handleSeeMoreClick(categoryText);
    });
});

// Handle search logic
const handleSearch = () => {
    const input = searchInput.value;
    const selectedCategory = searchSelect.value;

    let url = `https://www.amazon.com/s?k=${encodeURIComponent(input)}`;
    if (selectedCategory !== "All") {
        url += `&field-keywords=${encodeURIComponent(selectedCategory)}`;
    }

    window.open(url, "_blank");
};

// Attach event listeners for search
searchIcon.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
});

const amazonSignInUrl = "https://www.amazon.com/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex&openid.pape.max_auth_age=0";

if (signInBtn) {
    signInBtn.addEventListener("click", () => {
        window.location.href = amazonSignInUrl;
    });
}

if (startHereLink) {
    startHereLink.addEventListener("click", () => {
        window.location.href = amazonSignInUrl;
    });
}