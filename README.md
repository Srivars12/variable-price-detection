# 💰 Variable Price Detection Platform

> A full-stack web application that demonstrates and simulates variable (dynamic) pricing — where product prices fluctuate based on demand — with an admin panel for managing products and pricing rules.

---

## 📌 Project Description

This project is a **Variable Pricing Platform** built using HTML, CSS, and JavaScript. It simulates dynamic pricing models commonly used in industries like airlines, hotels, and e-commerce, where prices change based on demand and availability. The platform features a public-facing product listing page, a user login system, an admin dashboard for managing products and prices, a database layer for data persistence, and supporting pages like FAQ and Team. The project demonstrates how variable pricing logic can be applied in a real web application with a clean, structured frontend architecture.

---

## 🗂️ Repository Structure

```
variable-price-detection/
│
├── index.html              # Landing page with product listing & about section
├── style.css               # Global stylesheet
├── logo.jpg                # Platform logo
│
├── js/
│   └── script.js           # Core JavaScript logic (dynamic pricing, product rendering)
│
├── pages/
│   ├── login.html          # User login page
│   ├── faq.html            # Frequently Asked Questions page
│   └── team.html           # Team / About Us page
│
├── admin/                  # Admin panel for managing products & prices
│
└── database/               # Database layer for storing product and pricing data
```

---

## ✨ Features

- **Dynamic Product Listing** — Products are rendered dynamically from data, with prices that vary based on demand logic.
- **Variable Pricing Model** — Simulates real-world pricing strategies where prices fluctuate with demand and availability.
- **Admin Panel** — Dedicated admin section to manage products, update prices, and oversee platform data.
- **User Authentication** — Login page for secure user access.
- **Database Layer** — Structured database directory for handling persistent product and pricing data.
- **Informational Pages** — Includes FAQ and Team pages for a complete, professional web experience.
- **Responsive Design** — Clean CSS-based layout adaptable across screen sizes.

---

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Scripting | Vanilla JavaScript (ES6) |
| Styling | Custom CSS |
| Data Layer | Database folder (JSON / SQL) |
| Admin Panel | HTML + JS admin interface |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Srivars12/variable-price-detection.git
cd variable-price-detection
```

### 2. Run the Application

Since this is a static web app, simply open `index.html` in your browser:

```bash
open index.html
# or just double-click index.html in your file explorer
```

For full functionality (admin panel, database), use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (live-server)
npx live-server
```

Then visit `http://localhost:8000` in your browser.

---

## 📄 Pages Overview

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Landing page with product listing and variable pricing display |
| Login | `pages/login.html` | User login / authentication page |
| FAQ | `pages/faq.html` | Frequently asked questions about the platform |
| Team | `pages/team.html` | Team / contributors page |
| Admin | `admin/` | Admin dashboard for product and price management |

---

## 💡 What is Variable Pricing?

Variable pricing is a business model where the price of a product or service changes dynamically based on factors like:

- **Demand** — Higher demand → Higher price
- **Availability** — Limited stock → Price increases
- **Time** — Peak hours or seasons affect pricing
- **User behavior** — Returning vs new customers

This is widely used in **airlines**, **hotels**, **ride-sharing apps**, and **e-commerce platforms**.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Srivars12**  
GitHub: [@Srivars12](https://github.com/Srivars12)

---

> *"Smart pricing for a smarter marketplace."*
