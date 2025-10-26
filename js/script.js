document.addEventListener("DOMContentLoaded", async function () {
    const productList = document.getElementById("product-list");

    // Fetch products from backend
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p><strong>Old Price:</strong> $${product.oldPrice}</p>
            <p><strong>Updated Price:</strong> $${product.updatedPrice}</p>
            <button onclick="window.location.href='${product.buyLink}'">Buy Now</button>
        `;
        productList.appendChild(productDiv);
    });
});
