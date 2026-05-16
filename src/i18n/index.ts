import de from "./de.json";
import en from "./en.json";

const translations = { de, en } as const;

export type Locale = keyof typeof translations;

export function t(locale: Locale = "de") {
    return translations[locale];
}
