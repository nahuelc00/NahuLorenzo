function addLinksToImages() {
  const $logos = document.querySelectorAll(".cont-logos__logo");
  $logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      if (logo.className.includes("linkedin")) {
        window.open("https://www.linkedin.com/in/nahuel-lorenzo");
      }
      if (logo.className.includes("github")) {
        window.open("https://github.com/nahuelc00");
      }
      if (logo.className.includes("cv")) {
        window.open(
          "https://drive.google.com/file/d/1s3almkb3X6Zs85ndm6b3ilYsqqM0XROU/view?usp=share_link"
        );
      }
      if (logo.className.includes("code")) {
        window.open("https://nahuelc00.github.io/proyects/");
      }
    });
  });
}

(function main() {
  addLinksToImages();
})();
