const descriptions = {
  all: "All — a mixed archive of Figma visuals and Framer templates.",
  figma: "Figma — product interfaces, bilingual responsive pages, and visual design explorations.",
  framer: "Framer — published website templates with direct links to explore the live project."
};

const tabs = document.querySelectorAll(".tool-tab");
const stacks = document.querySelectorAll(".archive-stack");
const description = document.querySelector(".tool-description");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    stacks.forEach((stack) => {
      stack.hidden = filter !== "all" && stack.dataset.stack !== filter;
    });
    description.textContent = descriptions[filter];
  });
});
