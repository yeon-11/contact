function includeHTML(callback) {
  const elements = document.querySelectorAll('[data-include]');
  let loadedCount = 0;

  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;

    loadedCount++;
    if (loadedCount === elements.length && typeof callback === "function") {
      callback(); // 모든 include 끝나면 콜백 실행!
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML(() => {
    initHeaderEvents(); // fetch 끝나고 나서 실행됨
  });
});
