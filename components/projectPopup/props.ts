import { ReactNode } from "react";

export default interface ProjectPopupProps {
    title: string;
    description: string[];
    imageUrl: string;
    technologies: ReactNode[];
    youtubeUrl?: string;
    setDisplayedProject?: (project: ProjectPopupProps | null) => void;
    isPhoneDisplay?: boolean;
}