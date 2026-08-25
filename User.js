<script>
function updateLoginArea() {
    const loginArea = document.getElementById("loginArea");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userName = localStorage.getItem("userName") || "مستخدم";

    if (isLoggedIn) {
        loginArea.innerHTML = `
            <a href="dashboard.html" class="btn btn-dashboard" title="لوحة التحكم">
                <i class="fas fa-user-circle"></i> ${userName}
            </a>
        `;
    } else {
        loginArea.innerHTML = `
            <a href="login.html" class="btn btn-primary" id="loginBtn">ابدأ الآن</a>
        `;
    }
}

// نفذ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateLoginArea);
</script>
