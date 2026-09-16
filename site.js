(() => {
  const footerMarkup = `
    <div class="footer-top">
      <a class="wordmark" href="index.html#top" aria-label="Sara Esmaeili, home">SARA<span>·</span>ESMAEILI</a>
      <nav class="footer-nav" aria-label="Footer navigation"><a href="index.html#top">Home</a><a href="index.html#work">Case Studies</a><a href="templates.html">Visual Archive</a><a href="index.html#about">About</a><a href="index.html#contact">Contact</a></nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Sara Esmaeili</span><span>Product Designer · Qom, Iran</span><a href="mailto:sara.esmaeili.design@gmail.com">sara.esmaeili.design@gmail.com</a><a href="https://www.linkedin.com/in/saraesmaeili/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>`;

  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (!footer.querySelector(".footer-top")) footer.innerHTML = footerMarkup;
  });

  const backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.setAttribute("title", "Back to top");
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.append(backToTop);

  const updateVisibility = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 1.15);
  };

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
})();
