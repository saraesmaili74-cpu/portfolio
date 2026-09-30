(() => {
  const canonicalEmail = "sara.esmaili74@gmail.com";
  const footerMarkup = `
    <section class="footer-cta" aria-labelledby="footer-cta-title">
      <div class="footer-spin-badge" role="img" aria-label="Available for freelance work"><svg viewBox="0 0 160 160" aria-hidden="true"><circle class="footer-spin-badge-face" cx="80" cy="80" r="75"/><defs><path id="footer-spin-path" d="M80 80m-55 0a55 55 0 1 1 110 0a55 55 0 1 1-110 0"/></defs><g class="footer-spin-badge-ring"><text><textPath href="#footer-spin-path" startOffset="0%">AVAILABLE FOR FREELANCE · OPEN TO COLLABORATE · </textPath></text></g><g class="footer-spin-badge-envelope"><rect x="62" y="70" width="36" height="25" rx="2"/><path d="m63 72 17 14 17-14"/></g></svg></div>
      <div class="footer-cta-bubble" aria-hidden="true"><svg viewBox="0 0 80 60"><path d="M18 6h44c9 0 16 7 16 16v10c0 9-7 16-16 16H39L26 57l3-9h-11c-9 0-16-7-16-16V22C2 13 9 6 18 6Z"/><circle cx="27" cy="27" r="4"/><circle cx="40" cy="27" r="4"/><circle cx="53" cy="27" r="4"/></svg></div>
      <h2 id="footer-cta-title">Let’s talk about<br /><em>your project.</em></h2>
      <p><span>Got a project in mind? Let’s create something great.</span> <span>We can transform that idea into real product.</span></p>
      <div class="footer-cta-action"><div class="footer-cta-buttons"><a class="footer-cta-button" href="contact.html">Get in Touch <span aria-hidden="true">↗</span></a><a class="footer-cta-button footer-cta-button-secondary" href="work.html">View My Works <span aria-hidden="true">↗</span></a></div><span class="footer-cta-note">and make it<br />real together <svg viewBox="0 0 92 48" aria-hidden="true"><path d="M88 43C73 20 56 9 4 10m0 0 10-7M4 10l10 7" /></svg></span></div>
    </section>
    <div class="footer-top">
      <nav class="footer-nav" aria-label="Footer navigation"><a href="index.html#top">Home</a><a href="work.html">Works</a><a href="index.html#about">About</a><a href="contact.html">Contact</a></nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Sara Esmaeili</span><span>Iran</span><a href="mailto:${canonicalEmail}">${canonicalEmail}</a></div>`;

  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (!footer.querySelector(".footer-top")) footer.innerHTML = footerMarkup;
  });

  const header = document.querySelector(".site-header");
  const primaryNav = header?.querySelector(":scope > nav");
  const headerActions = header?.querySelector(":scope > .header-actions");

  // One shared header treatment across every static page. Keep the Instagram
  // destination non-interactive until Sara supplies its profile URL.
  headerActions?.querySelector(".header-link")?.remove();
  if (headerActions && !headerActions.querySelector(".header-social")) {
    const social = document.createElement("div");
    social.className = "header-social";
    social.setAttribute("aria-label", "Social media");
    social.innerHTML = `
      <a class="social-icon" href="https://x.com/sarah_smaeli" target="_blank" rel="noreferrer" aria-label="X profile" title="X">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.1l3.1 4.4L15.8 4H19l-5.3 6.1L19.5 20h-4.1l-3.7-5-4.2 5H4.3l5.8-6.8L5 4Zm3.1 1.7 7.9 12.6h1.1L9.2 5.7H8.1Z"/></svg>
      </a>
      <a class="social-icon" href="https://dribbble.com/saraesmaili" target="_blank" rel="noreferrer" aria-label="Dribbble profile" title="Dribbble">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.9 8.1a24 24 0 0 0-5.3.2 27 27 0 0 0-1-2.3 24 24 0 0 0 4.3-2.8 7.1 7.1 0 0 1 2 4.9ZM15.6 5a23 23 0 0 1-3.8 2.4A39 39 0 0 0 9.4 4a7.2 7.2 0 0 1 6.2 1Zm-7.8-.4a35 35 0 0 1 2.7 3.2 31 31 0 0 0-6 1.2 7.2 7.2 0 0 1 3.3-4.4ZM4.1 11c2.3-.2 4.8-.7 7.3-1.5.3.6.6 1.3.9 2a21 21 0 0 0-7.9 3.7 7.2 7.2 0 0 1-.3-4.2Zm1.1 6a19 19 0 0 1 7.7-3.8 25 25 0 0 1 .8 4.8 7.1 7.1 0 0 1-8.5-1Zm10.2.4a26 26 0 0 0-.8-4.4 21 21 0 0 1 4.5-.1 7.1 7.1 0 0 1-3.7 4.5Z"/></svg>
      </a>
      <span class="social-icon is-pending" role="img" aria-label="Instagram profile link pending" title="Instagram link pending">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5h9.6A3.7 3.7 0 0 1 20.5 7v10a3.7 3.7 0 0 1-3.7 3.5H7.2A3.7 3.7 0 0 1 3.5 17V7a3.7 3.7 0 0 1 3.7-3.5Zm0 1.8A1.9 1.9 0 0 0 5.3 7v10c0 1 .8 1.8 1.9 1.8h9.6c1 0 1.9-.8 1.9-1.8V7c0-1-.8-1.7-1.9-1.7H7.2Zm4.8 2.3a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.7-2.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>
      </span>`;
    headerActions.append(social);
  }

  if (primaryNav) {
    const isContact = document.body.classList.contains("contact-page-page");
    const isHome = document.body.classList.contains("home") && !isContact;
    const isWorks = document.body.classList.contains("works-page");
    primaryNav.innerHTML = `<a href="${isHome ? "#top" : "index.html#top"}"${isHome ? ' aria-current="page"' : ""}>Home</a><a href="work.html"${isWorks ? ' aria-current="page"' : ""}>Works</a><a href="contact.html"${isContact ? ' aria-current="page"' : ""}>Contact</a>`;
  }

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
      if (link.closest(".header-social")) return;
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

  // Recreate the reference's short black cut when moving between internal portfolio pages.
  const pageTransition = document.createElement("div");
  pageTransition.className = "page-transition";
  pageTransition.setAttribute("aria-hidden", "true");
  document.body.append(pageTransition);
  requestAnimationFrame(() => pageTransition.classList.add("is-ready"));

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || link.target === "_blank" || link.hasAttribute("download")) return;
    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("javascript:")) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
    event.preventDefault();
    document.documentElement.classList.add("is-page-leaving");
    pageTransition.classList.remove("is-ready");
    pageTransition.classList.add("is-leaving");
    window.setTimeout(() => { window.location.href = destination.href; }, 340);
  });

  // Ask before opening a published template outside the portfolio. The
  // destination remains a new tab, so the current page is not lost.
  const templateLinks = document.querySelectorAll(
    '.works-card[data-work-category="template"] a[href^="https://"], .framer-showcase .button-link[href^="https://"]'
  );
  if (templateLinks.length) {
    const confirmation = document.createElement("dialog");
    confirmation.className = "template-confirm-dialog";
    confirmation.setAttribute("aria-labelledby", "template-confirm-title");
    confirmation.setAttribute("aria-describedby", "template-confirm-description");
    confirmation.innerHTML = `<div class="template-confirm-content">
      <p class="template-confirm-eyebrow">EXTERNAL TEMPLATE</p>
      <h2 id="template-confirm-title">Open this template?</h2>
      <p id="template-confirm-description">You're about to open <strong data-template-name></strong> on Framer in a new tab. This portfolio page will stay open.</p>
      <div class="template-confirm-actions">
        <button type="button" data-template-cancel>Stay here</button>
        <a data-template-continue target="_blank" rel="noopener noreferrer">Open template <span aria-hidden="true">↗</span></a>
      </div>
    </div>`;
    document.body.append(confirmation);
    const cancel = confirmation.querySelector("[data-template-cancel]");
    const continueLink = confirmation.querySelector("[data-template-continue]");
    let opener = null;
    cancel.addEventListener("click", () => confirmation.close());
    confirmation.addEventListener("close", () => opener?.focus({ preventScroll: true }));
    confirmation.addEventListener("click", (event) => {
      if (event.target === confirmation) confirmation.close();
    });
    continueLink.addEventListener("click", () => confirmation.close());

    const requestTemplate = (event) => {
      if (event.type === "auxclick" && event.button !== 1) return;
      if (event.type === "click" && event.button !== 0) return;
      event.preventDefault();
      const link = event.currentTarget;
      const card = link.closest(".works-card, .framer-showcase");
      const name = card?.querySelector("h2 a, h3")?.firstChild?.textContent?.trim() || "this template";
      const message = `You're about to open ${name} on Framer in a new tab. This portfolio page will stay open.`;
      if (typeof confirmation.showModal !== "function") {
        if (window.confirm(message)) window.open(link.href, "_blank", "noopener,noreferrer");
        return;
      }
      opener = link;
      confirmation.querySelector("[data-template-name]").textContent = name;
      continueLink.href = link.href;
      confirmation.showModal();
      cancel.focus();
    };
    templateLinks.forEach((link) => {
      link.addEventListener("click", requestTemplate);
      link.addEventListener("auxclick", requestTemplate);
    });
  }

  // Build a compact table of contents from each case study's real section headings.
  const caseStudy = document.querySelector(".case-page .case-study");
  if (caseStudy && !caseStudy.querySelector(":scope > .case-toc")) {
    const tocLabels = {
      "THE CHALLENGE": "Challenge",
      "RESEARCH PROCESS": "Research",
      "UX & RESEARCH PROCESS": "Research",
      "DESIGN PROCESS": "Process",
      "PRODUCT PROCESS": "Process",
      "FINAL SOLUTION": "Solution",
      "PRODUCT DIRECTION": "Direction",
    };
    const blocks = Array.from(caseStudy.children).filter((block) =>
      block.matches(".case-intro, section") && block.querySelector("h2, h3")
    );
    const toc = document.createElement("aside");
    toc.className = "case-toc";
    toc.setAttribute("aria-label", "Case study contents");
    const inner = document.createElement("div");
    inner.className = "case-toc-inner";
    const heading = document.createElement("p");
    heading.className = "case-toc-heading";
    heading.textContent = "In this case study";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Jump to a section");
    blocks.forEach((block, index) => {
      const sectionHeading = block.querySelector("h2, h3");
      if (!sectionHeading.id) sectionHeading.id = `case-section-${index + 1}`;
      const link = document.createElement("a");
      link.href = `#${sectionHeading.id}`;
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      const sectionLabel = block.querySelector(".section-index, .side-label")?.textContent
        .replace(/^\s*\d+\s*\/\s*/, "").trim() || "";
      const shortTitle = block.dataset.tocTitle || tocLabels[sectionLabel.toUpperCase()]
        || (sectionLabel ? sectionLabel.toLowerCase().replace(/^./, (letter) => letter.toUpperCase()) : sectionHeading.textContent.trim());
      link.append(number, document.createTextNode(shortTitle));
      nav.append(link);
    });
    inner.append(heading, nav);
    toc.append(inner);
    caseStudy.prepend(toc);
  }

  // Count the Hero metrics once they enter view, keeping the motion subtle and
  // respecting reduced-motion preferences.
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reducedMotion = motionPreference.matches;
  const heroMetrics = document.querySelector(".hero-metrics");
  const metricValues = heroMetrics ? Array.from(heroMetrics.querySelectorAll("strong")) : [];
  const animateMetric = (element, delay = 0) => {
    const match = element.textContent.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = Number(match[1]);
    const suffix = match[2];
    window.setTimeout(() => {
      if (reducedMotion) {
        element.textContent = `${target}${suffix}`;
        return;
      }
      const start = performance.now();
      const duration = 850;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      element.textContent = `0${suffix}`;
      window.requestAnimationFrame(tick);
    }, delay);
  };
  if (heroMetrics && metricValues.length) {
    const revealMetrics = () => metricValues.forEach((element, index) => animateMetric(element, index * 110));
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealMetrics();
          observer.disconnect();
        }
      }, { threshold: .35 });
      observer.observe(heroMetrics);
    } else {
      revealMetrics();
    }
  }

  // Decorative Hero clips loop only while visible. The poster stays still
  // for reduced-motion visitors, background tabs, and blocked autoplay.
  const heroClips = Array.from(document.querySelectorAll("[data-hero-loop]"));
  const visibleClips = new WeakSet();
  const syncHeroClips = () => {
    heroClips.forEach((clip) => {
      if (motionPreference.matches || document.hidden || !visibleClips.has(clip)) {
        clip.pause();
      } else {
        clip.play().catch(() => {});
      }
    });
  };
  if (heroClips.length) {
    if ("IntersectionObserver" in window) {
      const clipObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) visibleClips.add(target);
          else visibleClips.delete(target);
        });
        syncHeroClips();
      }, { threshold: .05 });
      heroClips.forEach((clip) => clipObserver.observe(clip));
    } else {
      heroClips.forEach((clip) => visibleClips.add(clip));
      syncHeroClips();
    }
    document.addEventListener("visibilitychange", syncHeroClips);
    motionPreference.addEventListener("change", syncHeroClips);
  }

  // The hero gets a small lens cursor that is scoped to the top section only;
  // leaving it restores the browser cursor for the rest of the page.
  const hero = document.querySelector(".home .hero");
  if (hero && !hero.querySelector(".hero-magnifier")) {
    const magnifier = document.createElement("span");
    magnifier.className = "hero-magnifier";
    magnifier.setAttribute("aria-hidden", "true");
    const lensContent = document.createElement("span");
    lensContent.className = "hero-magnifier-content";
    const heroSource = hero;
    if (heroSource) {
      const clone = heroSource.cloneNode(true);
      clone.removeAttribute("id");
      clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
      clone.querySelectorAll("video").forEach((video) => video.pause());
      lensContent.append(clone);
    }
    magnifier.append(lensContent);
    const handle = document.createElement("i");
    magnifier.append(handle);
    hero.append(magnifier);
    const moveMagnifier = (event) => {
      const heroRect = hero.getBoundingClientRect();
      const x = event.clientX - heroRect.left;
      const y = event.clientY - heroRect.top;
      const scale = 1.7;
      magnifier.style.left = `${x}px`;
      magnifier.style.top = `${y}px`;
      const clone = lensContent.firstElementChild;
      if (clone) {
        const lensRadius = magnifier.offsetWidth / 2;
        clone.style.width = `${heroRect.width}px`;
        clone.style.height = `${heroRect.height}px`;
        clone.style.minHeight = "0";
        clone.style.transform = `translate(${lensRadius - x * scale}px, ${lensRadius - y * scale}px) scale(${scale})`;
      }
    };
    hero.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") return;
      hero.classList.add("has-magnifier");
      moveMagnifier(event);
    });
    hero.addEventListener("pointermove", moveMagnifier);
    hero.addEventListener("pointerleave", () => hero.classList.remove("has-magnifier"));
  }

  // Draw one continuous connector between every adjacent research step. The
  // measured path follows the grid as it changes from three to two to one
  // column, including the rounded turn between rows.
  document.querySelectorAll(".case-page .research-steps").forEach((list, listIndex) => {
    const items = Array.from(list.children).filter((child) => child.matches("li"));
    if (items.length < 2) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("research-roadmap-lines");
    svg.setAttribute("aria-hidden", "true");
    const arrowId = `research-roadmap-arrow-${listIndex}`;
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", arrowId);
    marker.setAttribute("markerWidth", "8");
    marker.setAttribute("markerHeight", "8");
    marker.setAttribute("refX", "7");
    marker.setAttribute("refY", "4");
    marker.setAttribute("orient", "auto");
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrow.setAttribute("d", "M 1 1 L 7 4 L 1 7");
    arrow.setAttribute("fill", "none");
    arrow.setAttribute("stroke", "currentColor");
    arrow.setAttribute("stroke-width", "1.6");
    arrow.setAttribute("stroke-linecap", "round");
    arrow.setAttribute("stroke-linejoin", "round");
    marker.append(arrow);
    defs.append(marker);
    svg.append(defs);
    list.prepend(svg);

    const drawRoadmap = () => {
      const bounds = list.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
      const cards = items.map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          left: rect.left - bounds.left,
          right: rect.right - bounds.left,
          top: rect.top - bounds.top,
          bottom: rect.bottom - bounds.top,
          width: rect.width,
          height: rect.height
        };
      });
      const paths = cards.slice(0, -1).map((from, index) => {
        const to = cards[index + 1];
        let data;
        if (Math.abs(from.top - to.top) < 3) {
          data = `M ${from.right} ${(from.top + from.bottom) / 2} L ${to.left} ${(to.top + to.bottom) / 2}`;
        } else {
          const startX = from.left + from.width / 2;
          const endX = to.left + to.width / 2;
          const middleY = (from.bottom + to.top) / 2;
          if (Math.abs(startX - endX) < 3) {
            data = `M ${startX} ${from.bottom} V ${to.top}`;
          } else {
            const direction = Math.sign(endX - startX);
            const radius = Math.min(12, (to.top - from.bottom) / 3, Math.abs(endX - startX) / 3);
            data = `M ${startX} ${from.bottom} V ${middleY - radius} Q ${startX} ${middleY} ${startX + direction * radius} ${middleY} H ${endX - direction * radius} Q ${endX} ${middleY} ${endX} ${middleY + radius} V ${to.top}`;
          }
        }
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", data);
        path.setAttribute("marker-end", `url(#${arrowId})`);
        return path;
      });
      svg.replaceChildren(defs, ...paths);
    };
    let roadmapFrame = 0;
    const scheduleRoadmap = () => {
      if (roadmapFrame) return;
      roadmapFrame = requestAnimationFrame(() => {
        roadmapFrame = 0;
        drawRoadmap();
      });
    };
    window.addEventListener("resize", scheduleRoadmap);
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(scheduleRoadmap);
      observer.observe(list);
      items.forEach((item) => observer.observe(item));
    }
    if (document.fonts) document.fonts.ready.then(scheduleRoadmap);
    scheduleRoadmap();
  });

  // Every case-study image opens in the same viewer. Preserve existing image
  // links and make previously unlinked figures keyboard accessible too.
  if (document.body.classList.contains("case-page")) {
    document.querySelectorAll("main img").forEach((image) => {
      if (image.closest("a")) return;
      const link = document.createElement("a");
      link.href = image.currentSrc || image.src;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.setAttribute("aria-label", `Zoom in: ${image.alt || "case study image"}`);
      image.before(link);
      link.append(image);
    });
  }
  // Prefer the original beside a -web preview when it exists; the image
  // link remains a no-JavaScript fallback.
  const imageLinks = Array.from(document.querySelectorAll("main a[href]"))
    .filter((link) => link.querySelector("img") && /\.(?:png|jpe?g|webp|gif)$/i.test(new URL(link.href).pathname));
  if (imageLinks.length && typeof HTMLDialogElement !== "undefined") {
    const viewer = document.createElement("dialog");
    viewer.className = "site-image-viewer";
    viewer.setAttribute("aria-label", "Project image viewer");
    viewer.innerHTML = `<div class="image-viewer-shell">
      <div class="image-viewer-toolbar">
        <span class="image-viewer-title"></span>
        <div class="image-viewer-actions">
          <button type="button" data-zoom-out aria-label="Zoom out">−</button>
          <button type="button" data-fit aria-label="Fit image to screen">Fit</button>
          <button type="button" data-actual aria-label="Show image at actual size">100%</button>
          <button type="button" data-zoom-in aria-label="Zoom in">+</button>
          <output class="image-viewer-zoom" aria-live="polite"></output>
          <a data-original target="_blank" rel="noreferrer" aria-label="Open original image in a new tab">↗</a>
          <button type="button" data-close aria-label="Close image viewer">×</button>
        </div>
      </div>
      <div class="image-viewer-viewport" tabindex="0"><img alt="" draggable="false" /><span class="image-viewer-status" role="status">Loading full image…</span></div>
    </div>`;
    document.body.append(viewer);
    const viewport = viewer.querySelector(".image-viewer-viewport");
    const image = viewport.querySelector("img");
    const status = viewer.querySelector(".image-viewer-status");
    const zoomLabel = viewer.querySelector(".image-viewer-zoom");
    const originalLink = viewer.querySelector("[data-original]");
    let naturalWidth = 0;
    let naturalHeight = 0;
    let fitScale = 1;
    let scale = 1;
    let loadVersion = 0;

    const setZoom = (next, focusX = viewport.clientWidth / 2, focusY = viewport.clientHeight / 2) => {
      if (!naturalWidth || !naturalHeight) return;
      const old = image.getBoundingClientRect();
      const view = viewport.getBoundingClientRect();
      const pointX = old.width ? (focusX + view.left - old.left) / old.width : .5;
      const pointY = old.height ? (focusY + view.top - old.top) / old.height : .5;
      scale = Math.min(4, Math.max(fitScale, next));
      image.style.width = `${naturalWidth * scale}px`;
      image.style.height = `${naturalHeight * scale}px`;
      zoomLabel.textContent = `${Math.round(scale * 100)}%`;
      viewport.scrollLeft = pointX * naturalWidth * scale - focusX;
      viewport.scrollTop = pointY * naturalHeight * scale - focusY;
      viewport.classList.toggle("is-zoomed", scale > fitScale * 1.01);
    };
    const fitImage = () => {
      if (!naturalWidth || !naturalHeight) return;
      fitScale = Math.min(1, (viewport.clientWidth - 24) / naturalWidth, (viewport.clientHeight - 24) / naturalHeight);
      setZoom(fitScale);
    };
    const loadImage = (url, fallback, version) => {
      const probe = new Image();
      probe.onload = () => {
        if (version !== loadVersion) return;
        naturalWidth = probe.naturalWidth;
        naturalHeight = probe.naturalHeight;
        image.src = url;
        image.hidden = false;
        originalLink.href = url;
        image.style.width = "";
        image.style.height = "";
        fitScale = Math.min(1, (viewport.clientWidth - 24) / naturalWidth, (viewport.clientHeight - 24) / naturalHeight);
        // Start with the complete board visible; zoom controls and the wheel
        // can then inspect its details without opening another browser tab.
        scale = fitScale;
        image.style.width = `${naturalWidth * scale}px`;
        image.style.height = `${naturalHeight * scale}px`;
        zoomLabel.textContent = `${Math.round(scale * 100)}%`;
        viewport.scrollLeft = Math.max(0, (image.clientWidth - viewport.clientWidth) / 2);
        viewport.scrollTop = 0;
        viewport.classList.toggle("is-zoomed", scale > fitScale * 1.01);
        status.hidden = true;
      };
      probe.onerror = () => {
        if (version !== loadVersion) return;
        if (fallback && fallback !== url) loadImage(fallback, "", version);
        else status.textContent = "This image could not be loaded.";
      };
      probe.src = url;
    };
    imageLinks.forEach((link) => link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const source = link.querySelector("img");
      const label = link.dataset.zoomTitle || link.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || source.alt || "Project image";
      const href = link.href;
      const preferred = href.replace(/-web(?=\.(?:png|jpe?g|webp|gif)(?:$|\?))/i, "");
      viewer.querySelector(".image-viewer-title").textContent = label;
      image.alt = source.alt || label;
      image.hidden = true;
      image.removeAttribute("src");
      status.textContent = "Loading full image…";
      status.hidden = false;
      naturalWidth = naturalHeight = 0;
      zoomLabel.textContent = "";
      loadVersion += 1;
      viewer.showModal();
      viewer.querySelector("[data-close]").focus();
      loadImage(preferred, href, loadVersion);
    }));
    viewer.querySelector("[data-close]").addEventListener("click", () => viewer.close());
    viewer.querySelector("[data-zoom-in]").addEventListener("click", () => setZoom(scale * 1.7));
    viewer.querySelector("[data-zoom-out]").addEventListener("click", () => setZoom(scale / 1.7));
    viewer.querySelector("[data-fit]").addEventListener("click", fitImage);
    viewer.querySelector("[data-actual]").addEventListener("click", () => setZoom(1));
    viewer.addEventListener("click", (event) => { if (event.target === viewer) viewer.close(); });
    viewer.addEventListener("close", () => { loadVersion += 1; image.removeAttribute("src"); });
    viewport.addEventListener("wheel", (event) => {
      if (!naturalWidth) return;
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const factor = Math.min(1.3, Math.max(.75, Math.exp(-event.deltaY * .002)));
      setZoom(scale * factor, event.clientX - rect.left, event.clientY - rect.top);
    }, { passive: false });
    let drag = null;
    viewport.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch" || event.button !== 0 || scale <= fitScale * 1.01) return;
      drag = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-dragging");
    });
    viewport.addEventListener("pointermove", (event) => {
      if (!drag) return;
      viewport.scrollLeft = drag.left - (event.clientX - drag.x);
      viewport.scrollTop = drag.top - (event.clientY - drag.y);
    });
    const endDrag = () => { drag = null; viewport.classList.remove("is-dragging"); };
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dblclick", () => setZoom(scale > fitScale * 1.01 ? fitScale : 1));
    viewer.addEventListener("keydown", (event) => {
      if (event.key === "+" || event.key === "=") setZoom(scale * 1.7);
      if (event.key === "-") setZoom(scale / 1.7);
      if (event.key === "0") fitImage();
    });
    window.addEventListener("resize", () => { if (viewer.open) fitImage(); });
  }

  // A grey spine starts filled through the first role. Its blue segment
  // follows the reading position in both scroll directions, ending exactly
  // at the final marker. Actual geometry keeps it aligned after reflow.
  const experienceTimeline = document.querySelector(".home .experience-timeline");
  if (experienceTimeline) {
    const markers = Array.from(experienceTimeline.querySelectorAll(".timeline-marker"));
    experienceTimeline.querySelectorAll("article").forEach((article) => {
      const item = article.closest("li");
      const preview = item?.querySelector(".experience-preview");
      const followPointer = (event) => {
        if (!item || !preview || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const itemRect = item.getBoundingClientRect();
        const previewWidth = preview.offsetWidth;
        const previewHeight = preview.offsetHeight;
        const gap = 18;
        const x = Math.min(Math.max(event.clientX + gap, 12), window.innerWidth - previewWidth - 12);
        const preferredY = event.clientY + gap + previewHeight <= window.innerHeight - 12
          ? event.clientY + gap
          : event.clientY - gap - previewHeight;
        const y = Math.min(Math.max(preferredY, 12), window.innerHeight - previewHeight - 12);
        preview.style.setProperty("--preview-x", `${x - itemRect.left}px`);
        preview.style.setProperty("--preview-y", `${y - itemRect.top}px`);
        item.classList.add("is-pointer-previewing");
      };
      article.addEventListener("mouseenter", followPointer);
      article.addEventListener("mousemove", followPointer);
      article.addEventListener("mouseleave", () => item?.classList.remove("is-pointer-previewing"));
      article.addEventListener("focusin", () => item?.classList.add("is-previewing"));
      article.addEventListener("focusout", () => item?.classList.remove("is-previewing"));
    });
    let framePending = false;
    const updateTimelineProgress = () => {
      framePending = false;
      if (!markers.length) return;
      const timelineTop = experienceTimeline.getBoundingClientRect().top;
      const positions = markers.map((marker) => {
        const rect = marker.getBoundingClientRect();
        return rect.top + rect.height / 2 - timelineTop;
      });
      const first = positions[0];
      const last = positions[positions.length - 1];
      const finalArticle = markers[markers.length - 1]?.closest("li")?.querySelector("article");
      const lineEnd = last + Math.min(180, Math.max(80, (finalArticle?.getBoundingClientRect().height || 0) * .45));
      const progress = Math.min(last, Math.max(first, window.innerHeight * .55 - timelineTop));
      experienceTimeline.style.setProperty("--timeline-length", `${lineEnd}px`);
      experienceTimeline.style.setProperty("--timeline-progress", `${progress}px`);
      markers.forEach((marker, index) => marker.classList.toggle("is-reached", positions[index] <= progress + .5));
    };
    const scheduleTimelineUpdate = () => {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(updateTimelineProgress);
    };
    window.addEventListener("scroll", scheduleTimelineUpdate, { passive: true });
    window.addEventListener("resize", scheduleTimelineUpdate);
    window.addEventListener("load", scheduleTimelineUpdate);
    if ("ResizeObserver" in window) new ResizeObserver(scheduleTimelineUpdate).observe(experienceTimeline);
    if (document.fonts) document.fonts.ready.then(scheduleTimelineUpdate);
    scheduleTimelineUpdate();
  }

  // Reveal meaningful page layers as they enter the viewport. The class is
  // removed after the entrance settles so existing hover transforms remain
  // available on cards and interactive elements.
  const revealSelector = [
    "main > section",
    "main > section > .section-heading",
    "main > section > .works-profile",
    "main > section > .works-collection",
    "main > section > .about-feature-card",
    "main > section > .tools-list",
    "main > section > .capabilities-content",
    "main > section > .experience-heading",
    "main > section > .experience-timeline",
    "main > section > .contact-card",
    "main .case-study > .case-intro",
    "main .case-study > section",
    "main .works-card",
    "main .template-card",
    "main .visual-archive-card",
    "main .showcase-card",
    "main figure",
    ".site-footer > .footer-cta",
    ".site-footer > .footer-top",
    ".site-footer > .footer-bottom"
  ].join(",");
  const revealTargets = Array.from(document.querySelectorAll(revealSelector));
  if (revealTargets.length) {
    const reveal = (element, index) => {
      const delay = Math.min(index % 6, 5) * 70;
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.classList.add("reveal-on-scroll");
      requestAnimationFrame(() => element.classList.add("is-revealed"));
      window.setTimeout(() => {
        element.classList.remove("reveal-on-scroll", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      }, 980 + delay);
    };
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-revealed"));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = revealTargets.indexOf(entry.target);
          reveal(entry.target, index < 0 ? 0 : index);
          observer.unobserve(entry.target);
        });
      }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
      revealTargets.forEach((element) => revealObserver.observe(element));
    }
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
