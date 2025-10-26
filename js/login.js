document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const role = document.getElementById("login-type").value; // Get user type

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role }),
            });

            const data = await response.json();
            alert(data.message);

            if (response.ok) {
                if (role === "admin") {
                    window.location.href = "../admin/admin.html";  // ✅ Integrated Admin Redirection
                } else {
                    window.location.href = "/pages/dashboard.html";  // ✅ Integrated User Redirection
                }
            }
        });
    }
});
