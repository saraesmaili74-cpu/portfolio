(() => {
  const tabs = Array.from(document.querySelectorAll(".works-tab"));
  const cards = Array.from(document.querySelectorAll(".works-card"));
  const panel = document.querySelector(".works-collection");
  const grid = document.querySelector(".works-grid");
  const sortBar = document.querySelector(".works-sort-bar");
  const dateSort = document.querySelector("#works-date-sort");
  if (!tabs.length || !cards.length) return;

  const originalOrder = new Map(cards.map((card, index) => [card, index]));

  const sortCards = () => {
    if (!grid || !dateSort) return;
    const direction = dateSort.value === "newest" ? -1 : 1;
    const caseStudies = cards.filter((card) => card.dataset.workCategory === "case-study" && !card.classList.contains("works-card-empty"));
    caseStudies.sort((a, b) => {
      const aStart = Number(a.dataset.workStartYear);
      const bStart = Number(b.dataset.workStartYear);
      if (!aStart || !bStart) return aStart ? -1 : bStart ? 1 : originalOrder.get(a) - originalOrder.get(b);
      if (aStart !== bStart) return (aStart - bStart) * direction;
      const endYear = (card) => card.dataset.workEndYear === "present" ? Infinity : Number(card.dataset.workEndYear || card.dataset.workStartYear);
      return (endYear(a) - endYear(b)) * direction || originalOrder.get(a) - originalOrder.get(b);
    });
    const templates = cards.filter((card) => card.dataset.workCategory === "template");
    const placeholders = cards.filter((card) => card.classList.contains("works-card-empty"));
    grid.append(...caseStudies, ...templates, ...placeholders);
  };

  const labels = {
    "case-study": "case studies",
    template: "templates"
  };

  const applyFilter = (filter, updateHash = true) => {
    const selected = labels[filter] ? filter : "case-study";
    tabs.forEach((tab) => {
      const isSelected = tab.dataset.filter === selected;
      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
    });
    cards.forEach((card) => {
      card.hidden = card.dataset.workCategory !== selected;
    });
    if (sortBar) sortBar.hidden = selected !== "case-study";
    if (panel) panel.setAttribute("aria-labelledby", `works-tab-${selected}`);
    if (updateHash) history.replaceState(null, "", `work.html#${selected}`);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => applyFilter(tab.dataset.filter));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[next].focus();
      applyFilter(tabs[next].dataset.filter);
    });
  });
  if (dateSort) dateSort.addEventListener("change", sortCards);
  window.addEventListener("hashchange", () => applyFilter(window.location.hash.slice(1), false));
  sortCards();
  applyFilter(window.location.hash.slice(1), false);
})();
