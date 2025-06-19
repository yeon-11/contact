function initHeaderEvents() {
    const toggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".home-nav-bar");

    if (toggle && navBar) {
        toggle.addEventListener("click", () => {
            navBar.classList.toggle("active");
        });
    } else {
        console.warn("❌ header 요소를 찾지 못했습니다.");
    }
}

// 홈 페이지에서는 바로 실행되게
document.addEventListener("DOMContentLoaded", () => {
    initHeaderEvents();
});