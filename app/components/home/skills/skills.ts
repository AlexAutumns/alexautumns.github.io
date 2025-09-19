// app/components/home/skills/skills.ts
import CiscoIcon from "./icons/cisco.png";
import CanvaIcon from "./icons/canva.png";
import PowerBIIcon from "./icons/powerbi.png";
import JavaIcon from "./icons/java.png";
import PythonIcon from "./icons/python.png";
import CSSIcon from "./icons/css.png";
import HTMLIcon from "./icons/html.png";
import JSIcon from "./icons/javascript.png";
import PremiereIcon from "./icons/premiere.png";
import PhotoshopIcon from "./icons/photoshop.png";

export interface Skill {
    name: string;
    icon: string;
}

export const skills: Skill[] = [
    { name: "Cisco Packet Tracer", icon: CiscoIcon },
    { name: "Canva", icon: CanvaIcon },
    { name: "Microsoft Power BI", icon: PowerBIIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Python", icon: PythonIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "HTML5", icon: HTMLIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "Adobe Premiere Pro", icon: PremiereIcon },
    { name: "Adobe Photoshop", icon: PhotoshopIcon },

    // { name: "Backend Web Dev", icon: BackendIcon },
    // { name: "Web Dev", icon: WebIcon },
];
