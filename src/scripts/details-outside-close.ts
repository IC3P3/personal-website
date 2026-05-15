document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    document.querySelectorAll("details[open]").forEach((details) => {
        if (!details.contains(e.target as Element)) {
            details.removeAttribute("open");
        }
    });
});
