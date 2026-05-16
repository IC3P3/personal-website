import type { Locale } from "../types/locale";
import de from "./de.json";
import en from "./en.json";

const translations = { de, en } as const;

export function t(locale: Locale = "de") {
    return translations[locale];
}
