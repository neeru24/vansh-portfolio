// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


// Video play button animation
document.querySelectorAll(".play").forEach(button => {

  button.addEventListener("click", function() {

    if (this.innerHTML === "▶") {
      this.innerHTML = "Ⅱ";
    } else {
      this.innerHTML = "▶";
    }

  });

});


// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {

  navbar.classList.toggle("open");

});
