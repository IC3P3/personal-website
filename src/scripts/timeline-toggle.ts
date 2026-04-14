document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    const button = e.target.closest(".timeline-toggle");
    if (!button) return;
    const entry = button.closest(".relative");
    if (!entry) return;

    const details = entry.querySelector(".timeline-details");
    const summary = entry.querySelector(".timeline-summary");
    if (!details) return;

    const isHidden = details.classList.contains("hidden");
    details.classList.toggle("hidden");

    if (summary) {
        summary.classList.toggle("hidden");
    }

    const showMore = button.getAttribute("data-show-more") ?? "";
    const showLess = button.getAttribute("data-show-less") ?? "";
    button.textContent = isHidden ? showLess : showMore;
});
