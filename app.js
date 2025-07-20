// simple client‑side router for the tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // nav buttons
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // content panels
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    const id = btn.dataset.target;
    document.getElementById(id).classList.add("active");
  });
});
