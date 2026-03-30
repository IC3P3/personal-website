import de from "./de.json";

const translations = { de } as const;

type Locale = keyof typeof translations;

export function t(locale: Locale = "de") {
    return translations[locale];
}
