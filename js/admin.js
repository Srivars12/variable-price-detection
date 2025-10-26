document.addEventListener("DOMContentLoaded", async function () {
    const adminProductList = document.getElementById("admin-product-list");

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
            <input type="number" id="new-price-${product._id}" placeholder="Enter New Price">
            <button onclick="updatePrice('${product._id}')">Update Price</button>
        `;
        adminProductList.appendChild(productDiv);
    });
});

async function updatePrice(id) {
    const newPrice = document.getElementById(`new-price-${id}`).value;
    if (!newPrice) {
        alert("Please enter a valid price!");
        return;
    }

    const response = await fetch("http://localhost:3000/update-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, newPrice }),
    });

    const data = await response.json();
    alert(data.message);
    location.reload();
}