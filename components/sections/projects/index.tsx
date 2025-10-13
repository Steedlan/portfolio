import { HStack, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../sectionTitle";
import Project from "../../project";
import TechBadge from "../../techBadge";
import Javascript from "../../icons/js";
import Websocket from "../../icons/websocket";
import Nodejs from "../../icons/nodejs";
import JavaIcon from "../../icons/java";
import NextjsIcon from "../../icons/nextjs";
import Typescript from "../../icons/ts";
import Postgresql from "../../icons/postgresql";
import Docker from "../../icons/docker";
import Microsoftsqlserver from "../../icons/sqlserver";
import Dotnet from "../../icons/dotnet";
import { Git } from "../../icons/git";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";
import Sqlite from "../../icons/sqlite";
import Vscode from "../../icons/vscode";
import ProjectSectionPopupProps from "./props";

export default function SectionProject({setDisplayedProject} : ProjectSectionPopupProps) {
  const { t } = useTranslation();
    return (
        <VStack pt="2rem" bg="#1b1b1b" w="full" h="auto" justifyContent="center" alignItems="center" position="relative" zIndex="5" dropShadow={"dark-lg"} shadow="inner">
            <SectionTitle title={t("navbar.projects")}/>

            <TextFont {...fonts.T1.T32px.Bold}>Professional Experiences</TextFont>
            <Project 
                    title="Eachstapp - Full-Stack Developer"
                    description="Internship (Feb–May 2025): Developed, analyzed, and upgraded a web application for a casting agency to manage their projects, candidates, and clients."
                    imageUrl="/images/eachstapp.png"
                    technologies={[
                        <TechBadge key={10} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={11} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={12} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={13} icon={<Microsoftsqlserver height="1.3rem" width="1.3rem" />} techName="SQLServer" />,
                        <TechBadge key={14} icon={<Dotnet height="1.3rem" width="1.3rem" />} techName=".NET" />,
                        <TechBadge key={15} icon={<Git height="1.3rem" width="1.3rem" />} techName="Git" />,
                        <TechBadge key={16} icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" />
                    ]}
                    websiteUrl="https://www.eachstapp.com/"
                />
            <TextFont {...fonts.T1.T32px.Bold} mt="1rem">Personal Projects</TextFont>
            <HStack w="full" h="auto" justifyContent="center" alignItems="start">
                <Project 
                    title="UnoVinci"
                    description="Multiplayer UNO-inspired card game supporting up to four players, AI opponents, multi-room lobbies, real-time chat, and sound effects. Developed as a school competition project and awarded first place by other students."
                    imageUrl="/images/unovinci.png"
                    githubUrl="https://github.com/Steedlan/steedlan.github.io"
                    technologies={[
                        <TechBadge key={0} icon={<Javascript height="1.3rem" width="1.3rem" />} techName="JavaScript" />,
                        <TechBadge key={1} icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" />,
                        <TechBadge key={16} icon={<Sqlite height="1.3rem" width="1.3rem" />} techName="SQLite" />,
                        <TechBadge key={2} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />
                    ]}
                    websiteUrl="https://steedlan.github.io"
                    setDisplayedProject={setDisplayedProject}
                    popUp={
                        {
                            title: "UnoVinci",
                            description: [
                            "Developed during a three-week school competition in a team of four, this project challenged us to design and build an interactive website using technologies we had never explored before.",
                            "What began as a simple card game concept quickly evolved into an ambitious multiplayer UNO-inspired experience, featuring multiple game rooms, AI-controlled players, real-time chat, and a strong visual identity.",
                            "I contributed to both front-end and back-end development, using native JavaScript and WebSockets for live interactions, supported by a Socket.IO server managing game states and player progression.",
                            "Due to the short timeframe, the focus was on rapid prototyping, learning, and pushing technical boundaries rather than long-term optimization — resulting in a fully functional and engaging proof of concept.",
                            "The project was completed in just three intense weeks and was highly praised by peers for its ambition, visual quality, and the fact that it remained used by students during the rest of our studies",
                            "UNOVinci is still available online and welcomes anyone who wants to jump in for a game!"
                            ],
                            imageUrl: "/images/unovinci.png",
                            technologies: [
                                <TechBadge key={0} icon={<Javascript height="1.3rem" width="1.3rem" />} techName="JavaScript" />,
                                <TechBadge key={1} icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" />,
                                <TechBadge key={16} icon={<Sqlite height="1.3rem" width="1.3rem" />} techName="SQLite" />,
                                <TechBadge key={2} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />
                            ]
                        }
                    }
                />
                <Project 
                    title="Phoenix Resort"
                    description="A work-in-progress Minecraft theme-park server, treated as a full software product: custom Java plugins, a web app streaming location-aware audio, real-time game/web integration, and other visual experiences pushing the boundaries of what is possible Minecraft."
                    imageUrl="/images/phoenix.png"
                    technologies={[
                        <TechBadge key={3} icon={<JavaIcon height="1.3rem" width="1.3rem" />} techName="Java" />,
                        <TechBadge key={4} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={5} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={6} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={7} icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" />,
                        <TechBadge key={8} icon={<Postgresql height="1.3rem" width="1.3rem" />} techName="PostGreSql" />,
                        <TechBadge key={9} icon={<Docker height="1.3rem" width="1.3rem" />} techName="Docker" />
                    ]}
                    websiteUrl="https://phoenixresort.net"
                    setDisplayedProject={setDisplayedProject}
                                        popUp={
                        {
                            title: "Phoenix Resort",
                            description: [
                            "Born from a passion for theme parks and immersive experiences, Phoenix Resort is an ambitious Minecraft server project I began developing in 2023 to push the boundaries of what’s possible within the game. With a strong narrative foundation, it aims to deliver a deeply engaging experience that both impresses and inspires players.",
                            "As the sole developer, I oversee every aspect of the project — from creative direction and design to full technical implementation, including custom plugins, database architecture, and infrastructure management. The project is treated as a complete software ecosystem, starting with a fully hand-crafted plugin that powers the park’s core systems.",
                            "Among its many innovative features, I developed a Next.js web application that dynamically streams themed music based on players’ in-game locations, reinforcing immersion. The app also enables real-time interactions with the game, such as a live map showing player positions.",
                            "Looking ahead, I plan to expand Phoenix Resort with even more ambitious features — including a dynamic shop system, realistic balloon physics, and interactive shows synchronized with in-game events.",
                            "Although still in active development, the project already demonstrates the potential of blending creativity, technical innovation, and storytelling — with a live preview available on YouTube."
                            ],
                            imageUrl: "/images/phoenix.png",
                            technologies: [
                        <TechBadge key={3} icon={<JavaIcon height="1.3rem" width="1.3rem" />} techName="Java" />,
                        <TechBadge key={4} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={5} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={6} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={7} icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" />,
                        <TechBadge key={8} icon={<Postgresql height="1.3rem" width="1.3rem" />} techName="PostGreSql" />,
                        <TechBadge key={9} icon={<Docker height="1.3rem" width="1.3rem" />} techName="Docker" />
                            ]
                        }
                    }
                />
                <Project 
                    title="Portfolio"
                    description="The portfolio you're browsing, showcasing my projects and skills."
                    imageUrl="/images/portfolio.png"
                    technologies={[
                        <TechBadge key={18} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={19} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={20} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={21} icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" />
                    ]}
                    setDisplayedProject={setDisplayedProject}
                />
            </HStack>
        </VStack>
    );
}