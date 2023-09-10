var typed = new Typed(".text", {
  strings: ["Frontend Developer.", "Web Developer.", "Full-stack Developer."],
  // strings: ["Frontend Developer.", "Web Developer.", "Full-stack Developer."],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 50,
  loop: true,
});

const textel = document.querySelector(".text");
let value = 0;

setInterval(() => {
  if (value % 2 == 0) {
    textel.style.color = "blue";
    value++;
  } else {
    textel.style.color = "yellow";
    value++;
  }
}, 3000);
