const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 999.99,
        description: "Latest iPhone model",
        image_url: "https://m.media-amazon.com/images/I/41JrUCWNjHL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 899.99,
        description: "Powerful Android phone",
        image_url: "https://m.media-amazon.com/images/I/41x507Qk7oL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 3,
        name: "MacBook Pro",
        price: 1999.99,
        description: "High-performance laptop",
        image_url: "https://m.media-amazon.com/images/I/61eA9PkZ07L._SX679_.jpg"
    },
    {
        id: 4,
        name: "Sony Headphones",
        price: 199.99,
        description: "Noise-canceling headphones",
        image_url: "https://m.media-amazon.com/images/I/41hqwowvRWL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 5,
        name: "Gaming PC",
        price: 2500.00,
        description: "High-end gaming PC",
        image_url: "https://m.media-amazon.com/images/I/31-kod9Hs1L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 6,
        name: "Apple Watch Series 9",
        price: 399.99,
        description: "Smart wearable device",
        image_url: "https://m.media-amazon.com/images/I/51uj3UptkdL._SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        id: 7,
        name: "Dell XPS 15",
        price: 1800.00,
        description: "Powerful Windows laptop",
        image_url: "https://m.media-amazon.com/images/I/41cql2iTt8L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 8,
        name: "Canon EOS R5",
        price: 3499.99,
        description: "Professional mirrorless camera",
        image_url: "https://m.media-amazon.com/images/I/41msJ0lq08L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 9,
        name: "GoPro Hero 11",
        price: 499.99,
        description: "4K action camera",
        image_url: "https://m.media-amazon.com/images/I/41BvzgZwGrL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 10,
        name: "Bose SoundLink",
        price: 149.99,
        description: "Wireless Bluetooth speaker",
        image_url: "https://m.media-amazon.com/images/I/41FyxQrrdgL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 11,
        name: "PlayStation 5",
        price: 499.99,
        description: "Next-gen gaming console",
        image_url: "https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 12,
        name: "Xbox Series X",
        price: 499.99,
        description: "Microsoft gaming console",
        image_url: "https://m.media-amazon.com/images/I/71as9W1JDSL._SX679_.jpg"
    },
    {
        id: 13,
        name: "Poco X6",
        price: 123.00,
        description: "Poco X6 series",
        image_url: "https://m.media-amazon.com/images/I/61slka5EkAL._SX569_.jpg"
    },
    {
        id: 14,
        name: "OnePlus 11",
        price: 250.00,
        description: "The best retailing phone",
        image_url: "https://m.media-amazon.com/images/I/41R3ufWRt8L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 15,
        name: "Gaming Joystick",
        price: 405.00,
        description: "User-friendly gaming controller",
        image_url: "https://m.media-amazon.com/images/I/41lmct5Am2L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 16,
        name: "Samsung Tablet",
        price: 380.00,
        description: "Samsung Galaxy Tab A7",
        image_url: "https://m.media-amazon.com/images/I/61l5a94VKkL._SX425_.jpg"
    },
    {
        id: 17,
        name: "Redmi Note 14",
        price: 1000.00,
        description: "Redmi Note 14 5G",
        image_url: "https://m.media-amazon.com/images/I/41P2s-83N8L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 18,
        name: "Nothing Phone 2 Pro",
        price: 1250.00,
        description: "Nothing Phone 2 Pro",
        image_url: "https://m.media-amazon.com/images/I/31lh4tE5t7L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: 19,
        name: "Realme Pro 5G",
        price: 1000.00,
        description: "Realme 14 Pro 5G",
        image_url: "https://m.media-amazon.com/images/I/41KnMFyF+ML._SY300_SX300_.jpg"
    },
    {
        id: 20,
        name: "Philips Audio Speaker",
        price: 1500.00,
        description: "Philips Audio MMS2625B 2.1 Channel Bluetooth Multimedia Speaker",
        image_url: "https://m.media-amazon.com/images/I/31gkDcLFx9L._SY300_SX300_QL70_FMwebp_.jpg"
    }
];

function searchProduct() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let resultDiv = document.getElementById("result");

    console.log("Search Query:", query); // Debugging

    let product = products.find(p => p.name.toLowerCase().includes(query));

    if (product) {
        console.log("Product Found:", product); // Debugging
        resultDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <img src="${product.image_url || 'placeholder.jpg'}" alt="${product.name}" width="200">
        `;
    } else {
        console.log("Product Not Found"); // Debugging
        resultDiv.innerHTML = "<p>Sorry, not found.</p>";
    }
}

// ✅ Attach function to `window` so the button can access it
window.searchProduct = searchProduct;
