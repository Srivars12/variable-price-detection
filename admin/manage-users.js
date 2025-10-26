const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";


// Function to fetch and display users
async function fetchUsers() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/users?select=*`, {
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`
            }
        });

        const users = await res.json();
        const userList = document.getElementById("user-list");
        userList.innerHTML = ""; // Clear previous data

        users.forEach(user => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editUser('${user.id}')">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteUser('${user.id}')">Delete</button>
                    <button class="action-btn admin-btn" onclick="toggleAdmin('${user.id}', '${user.role}')">
                        ${user.role === "admin" ? "Revoke Admin" : "Make Admin"}
                    </button>
                </td>
            `;
            userList.appendChild(tr);
        });

    } catch (error) {
        console.error("❌ Error fetching users:", error);
    }
}

// Function to delete a user
async function deleteUser(userId) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
        await fetch(`${SUPABASE_URL}/rest/v1/users?id=eq.${userId}`, {
            method: "DELETE",
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`
            }
        });

        alert("✅ User deleted successfully!");
        fetchUsers(); // Refresh the list

    } catch (error) {
        console.error("❌ Error deleting user:", error);
    }
}

// Function to toggle admin status
async function toggleAdmin(userId, currentRole) {
    const newRole = currentRole === "admin" ? "user" : "admin";

    try {
        await fetch(`${SUPABASE_URL}/rest/v1/users?id=eq.${userId}`, {
            method: "PATCH",
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ role: newRole })
        });

        alert(`✅ User role updated to ${newRole}`);
        fetchUsers();

    } catch (error) {
        console.error("❌ Error updating role:", error);
    }
}

// Fetch users when page loads
document.addEventListener("DOMContentLoaded", fetchUsers);
