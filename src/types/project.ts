export interface ProjectData {
    title: string;
    description: string;
    tech: string[];
    links: {
        github?: string;
        forgejo?: string;
        live?: string;
    };
    type: "web" | "app";
    order: number;
}
