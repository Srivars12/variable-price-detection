document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // ✅ Handle Signup (Store Credentials)
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
       const password = document.getElementById("signup-password").value;
            const role = document.getElementById("signup-type").value;

            if (!email || !password) {
                alert("Please fill in all fields!");
                return;
            }

            // Store credentials in localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ email, password, role });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful! Please login.");
            window.location.href = "login.html";
        });
    }

    // ✅ Handle Login (Validate Credentials)
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const role = document.getElementById("login-type").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(u => u.email === email && u.password === password && u.role === role);

            if (user) {
                alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful!`);
                
                if (role === "admin") {
                    window.location.href = "../admin/admin.html";
                } else {
                    window.location.href = "../pages/dashboard.html";
                }
            } else {
                alert("Invalid credentials or account type!");
            }
        });
    }
});
