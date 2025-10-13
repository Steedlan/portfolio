import { ReactNode } from "react";
import ProjectPopupProps from "../projectPopup/props";

export interface ProjectProps{
    title: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    websiteUrl?: string;
    technologies: ReactNode[];
    setDisplayedProject?: (project: ProjectPopupProps) => void;
    popUp?: ProjectPopupProps;
}