// Scroll to top feature
const btn = document.createElement("button");
btn.textContent = "↑";
btn.id = "topBtn";
document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.display = "none";
btn.style.width = "48px";
btn.style.height = "48px";
btn.style.background = "#b4532f";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "999px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 12px 25px rgba(36, 49, 58, 0.22)";
btn.style.fontSize = "1.25rem";
btn.style.lineHeight = "1";

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
