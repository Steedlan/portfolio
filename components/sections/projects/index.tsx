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
import Agile from "../../icons/agile";

export default function SectionProject({setDisplayedProject} : ProjectSectionPopupProps) {
  const { t } = useTranslation();
    return (
        <VStack pt="2rem" bg="#1b1b1b" w="full" h="auto" justifyContent="center" alignItems="center" position="relative" zIndex="5" dropShadow={"dark-lg"} shadow="inner">
            <SectionTitle title={t("navbar.projects")}/>

            <TextFont {...fonts.T1.T32px.Bold}>{t("projects.pro")}</TextFont>
            <Project 
                    title={t("projects.eachstapp.title")}
                    description={t("projects.eachstapp.description")}
                    imageUrl="/images/eachstapp.png"
                    technologies={[
                        <TechBadge key={10} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={11} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={12} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={13} icon={<Microsoftsqlserver height="1.3rem" width="1.3rem" />} techName="SQLServer" />,
                        <TechBadge key={14} icon={<Dotnet height="1.3rem" width="1.3rem" />} techName=".NET" />,
                        <TechBadge key={15} icon={<Agile height="1.3rem" width="1.3rem" />} techName="Agile" />,
                        <TechBadge key={24} icon={<Git height="1.3rem" width="1.3rem" />} techName="Git" />,
                        <TechBadge key={16} icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" />
                    ]}
                    setDisplayedProject={setDisplayedProject}
                    popUp={
                        {
                            title: t("projects.eachstapp.title"),
                            description: [
                            t("projects.eachstapp.seeMore.line1"),
                            t("projects.eachstapp.seeMore.line2"),
                            t("projects.eachstapp.seeMore.line3")
                            ],
                            imageUrl: "/images/eachstapp.png",
                            technologies: [
                        <TechBadge key={10} icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />,
                        <TechBadge key={11} icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />,
                        <TechBadge key={12} icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />,
                        <TechBadge key={13} icon={<Microsoftsqlserver height="1.3rem" width="1.3rem" />} techName="SQLServer" />,
                        <TechBadge key={14} icon={<Dotnet height="1.3rem" width="1.3rem" />} techName=".NET" />,
                        <TechBadge key={23} icon={<Agile height="1.3rem" width="1.3rem" />} techName="Agile" />,
                        <TechBadge key={15} icon={<Git height="1.3rem" width="1.3rem" />} techName="Git" />,
                        <TechBadge key={16} icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" />
                            ]
                        }
                    }
                    websiteUrl="https://www.eachstapp.com/"
                />
            <TextFont {...fonts.T1.T32px.Bold} mt="1rem">{t("projects.perso")}</TextFont>
            <HStack w="full" h="auto" justifyContent="center" alignItems="start">
                <Project 
                    title={t("projects.uno.title")}
                    description={t("projects.uno.description")}                    imageUrl="/images/unovinci.png"
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
                            t("projects.uno.seeMore.line1"),
                            t("projects.uno.seeMore.line2"),
                            t("projects.uno.seeMore.line3"),
                            t("projects.uno.seeMore.line4"),
                            t("projects.uno.seeMore.line5"),
                            t("projects.uno.seeMore.line6")
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
                    title={t("projects.phoenix.title")}
                    description={t("projects.phoenix.description")}
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
                            t("projects.phoenix.seeMore.line1"),
                            t("projects.phoenix.seeMore.line2"),
                            t("projects.phoenix.seeMore.line3"),
                            t("projects.phoenix.seeMore.line4"),
                            t("projects.phoenix.seeMore.line5")
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
                    title={t("projects.portfolio.title")}
                    description={t("projects.portfolio.description")}
                    imageUrl="/images/portfolio.png"
                    githubUrl="https://github.com/Steedlan/portfolio"
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