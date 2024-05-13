// Job role Type Effect

const typeText = document.querySelector(".role-txt");
const roles = ["Web Developer", "UI/UX Designer", "Graphic Designer"];

let wordIndex = 0;
let charIndex = 0;
let isRemove = false;

const typeEffect = () => {
  const currentRole = roles[wordIndex];
  const currentChar = currentRole.substring(0, charIndex);
  typeText.classList.add("stop-blink");
  typeText.textContent = currentChar;

  if (!isRemove && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isRemove && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isRemove = !isRemove;
    typeText.classList.remove("stop-blink");
    wordIndex = !isRemove ? (wordIndex + 1) % roles.length : wordIndex;
    setTimeout(typeEffect, 2000);
  }
};

typeEffect();

// Sticky Nav

const sectionHeroEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      document.querySelector(".float-section").classList.add("show-float");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
      document.querySelector(".float-section").classList.remove("show-float");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-50px",
  }
);
observer.observe(sectionHeroEl);

// Mobile Menu Open Close

const NavItems = document.querySelector(".nav-items");

const openMenu = () => {
  NavItems.classList.add("open-menu");
};

const closeMenu = () => {
  NavItems.classList.remove("open-menu");
};

// Gallery Preview

const prevLayout = document.querySelector(".prev-layout");

const closePopup = () => {
  document.querySelector(".prev-popup").classList.remove("open-popup");
};

const openPopup = () => {
  document.querySelector(".prev-popup").classList.add("open-popup");
};

document.querySelector(".prev-popup .close-popup").onclick = () => {
  closePopup();
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

// document.querySelectorAll(".fileSrc").forEach((file) => {
//   file.onclick = () => {
//     document.querySelector(".prev-container img").src = document
//       .querySelector(".fileSrc")
//       .getAttribute("src");
//     openPopup();
//   };
// });

const fileSrc = document.querySelectorAll(".fileSrc");

for (let i = 0; i < fileSrc.length; i++) {
  fileSrc[i].addEventListener("click", function () {
    document.querySelector(".prev-container img").src =
      fileSrc[i].getAttribute("file-data");
    openPopup();
  });
}

prevLayout.addEventListener("click", closePopup);

// Open Demo Video

document.querySelector(".yt-close").addEventListener("click", function () {
  document.querySelector(".yt-prev-popup").classList.remove("open-popup");
  location.reload();
});

const vidPrev = document.querySelectorAll(".vid-prev-btn");

for (let i = 0; i < vidPrev.length; i++) {
  vidPrev[i].addEventListener("click", function () {
    document.querySelector(".yt-prev-container iframe").src =
      vidPrev[i].getAttribute("src") + "?rel=0";
    document.querySelector(".yt-prev-popup").classList.add("open-popup");
  });
}
