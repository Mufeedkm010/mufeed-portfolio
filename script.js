/* ===============================
   THEME TOGGLE (FIXED)
================================ */

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

/* ===============================
   SCROLL REVEAL
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 80) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

/* ===============================
   TERMINAL TYPING
================================ */
const cmdText = "$ whoami";
const resultText = "> Ethical Hacker";
let i = 0, j = 0;

function typeCmd() {
  const cmdEl = document.getElementById("cmd");
  if (!cmdEl) return;

  if (i < cmdText.length) {
    cmdEl.textContent += cmdText[i++];
    setTimeout(typeCmd, 70);
  } else {
    setTimeout(typeResult, 300);
  }
}

function typeResult() {
  const resultEl = document.getElementById("result");
  if (!resultEl) return;

  if (j < resultText.length) {
    resultEl.textContent += resultText[j++];
    setTimeout(typeResult, 70);
  }
}

window.addEventListener("load", typeCmd);



