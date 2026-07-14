import type { Locale } from "../i18n";

document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest("[data-lang]") as HTMLElement | null;
    if (!btn) return;

    const lang = btn.dataset.lang as Locale;
    if (lang === "en") {
        location.href = "/en/";
    } else {
        location.href = "/de/";
    }
});
