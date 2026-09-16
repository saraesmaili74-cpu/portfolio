(() => {
  const redirects = {
    "work.html": "work",
    "about.html": "about",
    "templates.html": "visual-archive-content",
    "visual-writingchex.html": "writingchex",
    "case-mehrabani.html": "case-mehrabani",
    "case-soha.html": "case-soha",
    "case-novin-parva.html": "case-novin-parva",
    "case-novin-parva-cms.html": "case-novin-parva-cms",
    "case-mokaab-gold.html": "case-mokaab-gold",
    "case-soora.html": "case-soora",
    "case-hesabdar.html": "case-hesabdar",
    "case-diet-app.html": "case-diet-app"
  };

  const pageName = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
  if (pageName !== "index.html" && redirects[pageName]) {
    window.location.replace(`index.html#${redirects[pageName]}`);
    return;
  }

  const promoteSectionHeading = (heading) => {
    const title = document.createElement("h2");
    for (const attribute of heading.attributes) title.setAttribute(attribute.name, attribute.value);
    title.innerHTML = heading.innerHTML;
    heading.replaceWith(title);
  };

  const enforceHeadingHierarchy = (scope = document) => {
    scope.querySelectorAll(".case-study h3[id], .case-study h4[id]").forEach(promoteSectionHeading);
    scope.querySelectorAll(".case-hero h1, .page-hero h1, .visual-detail-hero h1").forEach(promoteSectionHeading);
  };

  const rewriteInternalLinks = (scope) => {
    scope.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/.test(href)) return;
      const file = href.split("/").pop().split("?")[0];
      const target = redirects[file];
      if (target) link.setAttribute("href", `#${target}`);
    });
  };

  const footerMarkup = `
    <div class="footer-top">
      <a class="wordmark" href="index.html#top" aria-label="Sara Esmaeili, home">SARA<span>·</span>ESMAEILI</a>
      <nav class="footer-nav" aria-label="Footer navigation"><a href="index.html#top">Home</a><a href="index.html#work">Case Studies</a><a href="index.html#visual-archive-content">Visual Archive</a><a href="index.html#about">About</a><a href="contact.html">Contact</a></nav>
    </div>
    <div class="footer-bottom"><span>© 2026 Sara Esmaeili</span><span>Product Designer · Qom, Iran</span><a href="mailto:sara.esmaeili.design@gmail.com">sara.esmaeili.design@gmail.com</a><a href="https://www.linkedin.com/in/saraesmaeili/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>`;

  const upgradeFooters = (scope = document) => {
    scope.querySelectorAll(".site-footer").forEach((footer) => {
      if (!footer.querySelector(".footer-top")) footer.innerHTML = footerMarkup;
    });
  };

  const initVisualArchive = (scope) => {
    const descriptions = {
      all: "All — a mixed archive of Figma visuals and Framer templates.",
      figma: "Figma — product interfaces, bilingual responsive pages, and visual design explorations.",
      framer: "Framer — published website templates with direct links to explore the live project."
    };
    const tabs = scope.querySelectorAll(".tool-tab");
    const stacks = scope.querySelectorAll(".archive-stack");
    const description = scope.querySelector(".tool-description");
    tabs.forEach((tab) => tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      stacks.forEach((stack) => { stack.hidden = filter !== "all" && stack.dataset.stack !== filter; });
      if (description) description.textContent = descriptions[filter];
    }));
  };

  const closeCaseCards = () => {
    document.querySelectorAll(".case-card-detail").forEach((detail) => { detail.hidden = true; });
    document.querySelectorAll(".ticker-card.is-expanded").forEach((card) => { card.classList.remove("is-expanded"); });
    document.querySelectorAll(".ticker-card > a[aria-expanded]").forEach((link) => link.setAttribute("aria-expanded", "false"));
  };

  const openCaseCard = (card, shouldScroll = false) => {
    if (!card) return;
    closeCaseCards();
    card.classList.add("is-expanded");
    const detail = card.querySelector(".case-card-detail");
    const link = card.querySelector(":scope > a");
    if (detail) detail.hidden = false;
    if (link) link.setAttribute("aria-expanded", "true");
    if (shouldScroll) requestAnimationFrame(() => card.scrollIntoView({ block: "start", behavior: "smooth" }));
  };

  const closeVisualCards = () => {
    document.querySelectorAll(".visual-card-detail").forEach((detail) => { detail.hidden = true; });
    document.querySelectorAll(".visual-archive-card.is-expanded").forEach((card) => { card.classList.remove("is-expanded"); });
    document.querySelectorAll(".visual-archive-card > a[aria-expanded]").forEach((link) => link.setAttribute("aria-expanded", "false"));
  };

  const openVisualCard = (card, shouldScroll = false) => {
    if (!card) return;
    closeVisualCards();
    card.classList.add("is-expanded");
    const detail = card.querySelector(".visual-card-detail");
    const link = card.querySelector(":scope > a");
    if (detail) detail.hidden = false;
    if (link) link.setAttribute("aria-expanded", "true");
    if (shouldScroll) requestAnimationFrame(() => card.scrollIntoView({ block: "start", behavior: "smooth" }));
  };

  const scrollToCurrentHash = () => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const caseCard = document.querySelector(`.ticker-card[data-case-id="${id}"]`);
    if (caseCard) {
      openCaseCard(caseCard);
      requestAnimationFrame(() => caseCard.scrollIntoView({ block: "start" }));
      return;
    }
    const visualCard = document.querySelector(`.visual-archive-card[data-visual-id="${id}"]`);
    if (visualCard) {
      openVisualCard(visualCard);
      requestAnimationFrame(() => visualCard.scrollIntoView({ block: "start" }));
      return;
    }
    const target = document.getElementById(id);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  };

  enforceHeadingHierarchy();
  upgradeFooters();

  const visualArchive = document.getElementById("visual-archive-anchor");
  if (visualArchive) {
    const content = [
      ["case-mehrabani", "case-mehrabani.html", "Mehrabani case study"],
      ["case-soha", "case-soha.html", "Soha case study"],
      ["case-novin-parva", "case-novin-parva.html", "NovinParva Office Automation case study"],
      ["case-novin-parva-cms", "case-novin-parva-cms.html", "NovinParva CMS case study"],
      ["case-mokaab-gold", "case-mokaab-gold.html", "Mokaab Gold case study"],
      ["case-soora", "case-soora.html", "Soora case study"],
      ["case-hesabdar", "case-hesabdar.html", "Hesabdar case study"],
      ["case-diet-app", "case-diet-app.html", "Diet App research case study"],
      ["visual-archive-content", "templates.html", "Visual archive"],
      ["writingchex", "visual-writingchex.html", "WritingChex visual project"]
    ];

    Promise.all(content.map(async ([id, file, label]) => {
      const response = await fetch(`content/${file}`);
      if (!response.ok) throw new Error(`Could not load ${file}`);
      const source = new DOMParser().parseFromString(await response.text(), "text/html");
      const main = source.querySelector("main");
      if (!main) throw new Error(`No main content in ${file}`);
      return { id, label, html: main.innerHTML };
    })).then((pages) => {
      let visualInsertionPoint = visualArchive;
      pages.forEach(({ id, label, html }) => {
        const project = document.createElement("div");
        project.className = "single-page-project";
        project.id = id;
        project.setAttribute("role", "region");
        project.setAttribute("aria-label", label);
        project.innerHTML = html;
        rewriteInternalLinks(project);
        enforceHeadingHierarchy(project);
        if (id.startsWith("case-")) {
          const card = document.querySelector(`.work .ticker-card > a[href="#${id}"]`)?.closest(".ticker-card");
          if (!card) return;
          const detail = document.createElement("div");
          detail.className = "case-card-detail";
          detail.id = `detail-${id}`;
          detail.hidden = true;
          detail.append(project);
          const close = document.createElement("button");
          close.type = "button";
          close.className = "case-card-close";
          close.innerHTML = 'Close case study <span aria-hidden="true">×</span>';
          close.addEventListener("click", () => {
            closeCaseCards();
            history.replaceState(null, "", "#work");
            card.scrollIntoView({ block: "start", behavior: "smooth" });
          });
          detail.prepend(close);
          card.id = id;
          card.dataset.caseId = id;
          const cardLink = card.querySelector(":scope > a");
          cardLink.setAttribute("aria-controls", detail.id);
          cardLink.setAttribute("aria-expanded", "false");
          cardLink.addEventListener("click", (event) => {
            event.preventDefault();
            history.pushState(null, "", `#${id}`);
            openCaseCard(card, true);
          });
          card.append(detail);
        } else if (id === "writingchex") {
          const card = document.querySelector(`.visual-archive-card > a[href="#${id}"]`)?.closest(".visual-archive-card");
          if (!card) return;
          const detail = document.createElement("div");
          detail.className = "visual-card-detail";
          detail.id = `detail-${id}`;
          detail.hidden = true;
          detail.append(project);
          const close = document.createElement("button");
          close.type = "button";
          close.className = "case-card-close";
          close.innerHTML = 'Close visual project <span aria-hidden="true">×</span>';
          close.addEventListener("click", () => {
            closeVisualCards();
            history.replaceState(null, "", "#visual-archive-content");
            card.scrollIntoView({ block: "start", behavior: "smooth" });
          });
          detail.prepend(close);
          card.id = id;
          card.dataset.visualId = id;
          const cardLink = card.querySelector(":scope > a");
          cardLink.setAttribute("aria-controls", detail.id);
          cardLink.setAttribute("aria-expanded", "false");
          cardLink.addEventListener("click", (event) => {
            event.preventDefault();
            history.pushState(null, "", `#${id}`);
            openVisualCard(card, true);
          });
          card.append(detail);
        } else {
          visualInsertionPoint.after(project);
          visualInsertionPoint = project;
          if (id === "visual-archive-content") initVisualArchive(project);
        }
      });
      scrollToCurrentHash();
    }).catch((error) => {
      console.error("Single-page portfolio content could not load.", error);
      visualArchive.insertAdjacentHTML("afterend", '<p class="single-page-error">The project archive could not load. Please refresh the page.</p>');
    });
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
  window.addEventListener("hashchange", scrollToCurrentHash);
  updateVisibility();
})();
