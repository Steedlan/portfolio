import ProjectPopupProps from "../../projectPopup/props";

export default interface ProjectSectionPopupProps {
    setDisplayedProject: (project: ProjectPopupProps | null) => void;
    isPhoneDisplay: boolean;
}