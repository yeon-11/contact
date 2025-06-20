function initHeaderEvents() {
  const toggle = document.querySelector(".menu-toggle");
  const navBar = document.querySelector(".home-nav-bar");

  if (toggle && navBar) {
    toggle.addEventListener("click", () => {
      navBar.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  } else {
    console.warn("❌ header 요소를 찾지 못했습니다.");
  }
}

// DOMContentLoaded 기준
document.addEventListener("DOMContentLoaded", () => {
  initHeaderEvents();

  // 🔽 footer가 나중에 include 되니까 MutationObserver로 감지
  const observer = new MutationObserver(() => {
    const topBtn = document.querySelector('.top-btn');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      console.log("✅ top-btn 이벤트 연결 완료");
      observer.disconnect(); // 한 번만 감지하면 되므로 끊어줌
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
