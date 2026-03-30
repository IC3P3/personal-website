export interface ExperienceData {
  locale: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  start: string;
  end?: string;
  order: number;
}
