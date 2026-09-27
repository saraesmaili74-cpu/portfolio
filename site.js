(() => {
  const canonicalEmail = "sara.esmaeili74@gmail.com";
  const footerMarkup = `
    <div class="footer-top">
      <a class="wordmark" href="index.html#top" aria-label="Sara Esmaeili, home">SARA<span>·</span>ESMAEILI</a>
      <nav class="footer-nav" aria-label="Footer navigation"><a href="index.html#top">Home</a><a href="index.html#work">Case Studies</a><a href="templates.html">Visual Archive</a><a href="index.html#about">About</a><a href="index.html#contact">Contact</a></nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Sara Esmaeili</span><span>Product Designer · Qom, Iran</span><a href="mailto:${canonicalEmail}">${canonicalEmail}</a><a href="https://www.linkedin.com/in/saraesmaeili/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>`;

  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (!footer.querySelector(".footer-top")) footer.innerHTML = footerMarkup;
  });

  const header = document.querySelector(".site-header");
  const primaryNav = header?.querySelector(":scope > nav");
  const headerActions = header?.querySelector(":scope > .header-actions");

  if (header && primaryNav && !header.querySelector(".mobile-menu-toggle")) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-menu-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "mobile-nav");
    toggle.setAttribute("aria-label", "Open menu");
    toggle.innerHTML = '<span aria-hidden="true">Menu</span><i aria-hidden="true"></i>';

    const mobileNav = document.createElement("nav");
    mobileNav.id = "mobile-nav";
    mobileNav.className = "mobile-nav";
    mobileNav.hidden = true;
    mobileNav.setAttribute("aria-label", "Mobile navigation");

    primaryNav.querySelectorAll("a").forEach((link) => {
      mobileNav.append(link.cloneNode(true));
    });
    headerActions?.querySelectorAll("a").forEach((link) => {
      const mobileLink = link.cloneNode(true);
      mobileLink.classList.add("mobile-nav-action");
      mobileNav.append(mobileLink);
    });

    const setMenu = (open) => {
      mobileNav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("mobile-menu-open", open);
    };

    toggle.addEventListener("click", () => setMenu(mobileNav.hidden));
    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileNav.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });

    (headerActions || header).append(toggle);
    header.insertAdjacentElement("afterend", mobileNav);
  }

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
