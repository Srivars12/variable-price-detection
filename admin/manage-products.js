const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

async function fetchProducts() {
    try {
        let response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*`, {
            headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
        });
        let products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("❌ Error fetching products:", error);
    }
}

function displayProducts(products) {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.id}</td>
            <td><img src="${product.image_url}" alt="Product"></td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.description}</td>
            <td>
                <button class="edit" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        productList.appendChild(row);
    });
}

async function addProduct(event) {
    event.preventDefault();

    let name = document.getElementById("product-name").value;
    let image_url = document.getElementById("product-image").value;
    let price = document.getElementById("product-price").value;
    let description = document.getElementById("product-description").value;

    try {
        await fetch(`${SUPABASE_URL}/rest/v1/products`, {
            method: "POST",
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, image_url, price, description })
        });

        fetchProducts(); // Refresh product list
        document.getElementById("add-product-form").reset();
    } catch (error) {
        console.error("❌ Error adding product:", error);
    }
}

async function deleteProduct(productId) {
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${productId}`, {
            method: "DELETE",
            headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
        });

        fetchProducts(); // Refresh product list
    } catch (error) {
        console.error("❌ Error deleting product:", error);
    }
}

async function editProduct(productId) {
    let newName = prompt("Enter new product name:");
    let newPrice = prompt("Enter new price:");
    let newDesc = prompt("Enter new description:");
    let newImage = prompt("Enter new image URL:");

    if (!newName || !newPrice || !newDesc || !newImage) {
        alert("All fields are required!");
        return;
    }

    try {
        await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${productId}`, {
            method: "PATCH",
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newName, price: newPrice, description: newDesc, image_url: newImage })
        });

        fetchProducts(); // Refresh product list
    } catch (error) {
        console.error("❌ Error updating product:", error);
    }
}

document.getElementById("add-product-form").addEventListener("submit", addProduct);

document.addEventListener("DOMContentLoaded", fetchProducts);
