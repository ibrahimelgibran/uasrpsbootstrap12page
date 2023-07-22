// tambahkan kelas navbarDark pada gulir navbar
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 10) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// ciutkan navbar setelah klik pada perangkat kecil
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});
