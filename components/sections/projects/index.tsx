import { Stack, VStack, SimpleGrid, WrapItem, Wrap, HStack, Box } from "@chakra-ui/react";
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
import Agile from "../../icons/agile";
import ProjectSectionPopupProps from "./props";
import { JSX } from "@emotion/react/jsx-runtime";

type Tech = { key: string; icon: JSX.Element; name: string };

const badge = (t: Tech) => (
  <TechBadge key={t.key} icon={t.icon} techName={t.name} />
);

export default function SectionProject({
  setDisplayedProject,
  isPhoneDisplay,
}: ProjectSectionPopupProps) {
  const { t } = useTranslation();

  const eachstappTechs: Tech[] = [
    { key: "next", icon: <NextjsIcon height="1.3rem" width="1.3rem" />, name: "Next.js" },
    { key: "ts", icon: <Typescript height="1.3rem" width="1.3rem" />, name: "TypeScript" },
    { key: "node", icon: <Nodejs height="1.3rem" width="1.3rem" />, name: "NodeJs" },
    { key: "mssql", icon: <Microsoftsqlserver height="1.3rem" width="1.3rem" />, name: "SQLServer" },
    { key: "dotnet", icon: <Dotnet height="1.3rem" width="1.3rem" />, name: ".NET" },
    { key: "agile", icon: <Agile height="1.3rem" width="1.3rem" />, name: "Agile" },
    { key: "git", icon: <Git height="1.3rem" width="1.3rem" />, name: "Git" },
    { key: "vscode", icon: <Vscode height="1.3rem" width="1.3rem" />, name: "VScode" },
  ];

  const unoTechs: Tech[] = [
    { key: "js", icon: <Javascript height="1.3rem" width="1.3rem" />, name: "JavaScript" },
    { key: "ws", icon: <Websocket height="1.3rem" width="1.3rem" />, name: "WebSockets" },
    { key: "sqlite", icon: <Sqlite height="1.3rem" width="1.3rem" />, name: "SQLite" },
    { key: "node", icon: <Nodejs height="1.3rem" width="1.3rem" />, name: "NodeJs" },
  ];

  const phoenixTechs: Tech[] = [
    { key: "java", icon: <JavaIcon height="1.3rem" width="1.3rem" />, name: "Java" },
    { key: "next", icon: <NextjsIcon height="1.3rem" width="1.3rem" />, name: "Next.js" },
    { key: "ts", icon: <Typescript height="1.3rem" width="1.3rem" />, name: "TypeScript" },
    { key: "node", icon: <Nodejs height="1.3rem" width="1.3rem" />, name: "NodeJs" },
    { key: "ws", icon: <Websocket height="1.3rem" width="1.3rem" />, name: "WebSockets" },
    { key: "pg", icon: <Postgresql height="1.3rem" width="1.3rem" />, name: "PostGreSql" },
    { key: "docker", icon: <Docker height="1.3rem" width="1.3rem" />, name: "Docker" },
  ];

  const portfolioTechs: Tech[] = [
    { key: "next", icon: <NextjsIcon height="1.3rem" width="1.3rem" />, name: "Next.js" },
    { key: "ts", icon: <Typescript height="1.3rem" width="1.3rem" />, name: "TypeScript" },
    { key: "node", icon: <Nodejs height="1.3rem" width="1.3rem" />, name: "NodeJs" },
    { key: "vscode", icon: <Vscode height="1.3rem" width="1.3rem" />, name: "VScode" },
  ];

  const personalProjects = [
    {
      id: "uno",
      title: t("projects.uno.title"),
      description: t("projects.uno.description"),
      imageUrl: "/images/unovinci.png",
      githubUrl: "https://github.com/Steedlan/steedlan.github.io",
      websiteUrl: "https://steedlan.github.io",
      techs: unoTechs,
      popUp: {
        title: "UnoVinci",
        description: [
          t("projects.uno.seeMore.line1"),
          t("projects.uno.seeMore.line2"),
          t("projects.uno.seeMore.line3"),
          t("projects.uno.seeMore.line4"),
          t("projects.uno.seeMore.line5"),
          t("projects.uno.seeMore.line6"),
        ],
        imageUrl: "/images/unovinci.png",
        techs: unoTechs,
      },
    },
    {
      id: "phoenix",
      title: t("projects.phoenix.title"),
      description: t("projects.phoenix.description"),
      imageUrl: "/images/phoenix.png",
      websiteUrl: "https://phoenixresort.net",
      techs: phoenixTechs,
      popUp: {
        title: "Phoenix Resort",
        description: [
          t("projects.phoenix.seeMore.line1"),
          t("projects.phoenix.seeMore.line2"),
          t("projects.phoenix.seeMore.line3"),
          t("projects.phoenix.seeMore.line4"),
          t("projects.phoenix.seeMore.line5"),
        ],
        imageUrl: "/images/phoenix.png",
        techs: phoenixTechs,
      },
    },
    {
      id: "portfolio",
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      imageUrl: "/images/portfolio.png",
      githubUrl: "https://github.com/Steedlan/portfolio",
      techs: portfolioTechs,
    },
  ];

  return (
    <VStack
      pt="2rem"
      bg="#1b1b1b"
      w="full"
      h="auto"
      justifyContent="center"
      alignItems="center"
      position="relative"
      zIndex="5"
      dropShadow="dark-lg"
      shadow="inner"
    >
      <SectionTitle title={t("navbar.projects")} isPhoneDisplay={isPhoneDisplay} />

      <TextFont {...(isPhoneDisplay ? fonts.T1.T24px.Bold : fonts.T1.T32px.Bold)}>
        {t("projects.pro")}
      </TextFont>

      <Project
        title={t("projects.eachstapp.title")}
        description={t("projects.eachstapp.description")}
        imageUrl="/images/eachstapp.png"
        technologies={eachstappTechs.map(badge)}
        setDisplayedProject={setDisplayedProject}
        popUp={{
          title: t("projects.eachstapp.title"),
          description: [
            t("projects.eachstapp.seeMore.line1"),
            t("projects.eachstapp.seeMore.line2"),
            t("projects.eachstapp.seeMore.line3"),
          ],
          imageUrl: "/images/eachstapp.png",
          technologies: eachstappTechs.map(badge),
        }}
        websiteUrl="https://www.eachstapp.com/"
        isPhoneDisplay={isPhoneDisplay}
      />

      <TextFont {...(isPhoneDisplay ? fonts.T1.T24px.Bold : fonts.T1.T32px.Bold)} mt="1rem">
        {t("projects.perso")}
      </TextFont>

    <HStack w="full" h="auto" mt="0.2rem" mb="1rem" justifyContent="center" alignItems="center">
    <Wrap
    w="full"
    justify="center"
    align="start"
    >
    {personalProjects.map((p) => (
        <WrapItem
        key={p.id}
        // Option B du message précédent pour un vrai centrage quand il n'y en a qu’un
        flex={{ base: "0 1 560px", md: "0 1 48%", xl: "0 1 31%" }}
        display="flex"
        justifyContent="center"
        >
        <Project
            title={p.title}
            description={p.description}
            imageUrl={p.imageUrl}
            githubUrl={p.githubUrl}
            websiteUrl={p.websiteUrl}
            technologies={(p.techs ?? []).map(badge)}
            setDisplayedProject={setDisplayedProject}
            popUp={
            p.popUp && {
                title: p.popUp.title,
                description: p.popUp.description,
                imageUrl: p.popUp.imageUrl,
                technologies: p.popUp.techs.map(badge),
            }
            }
            isPhoneDisplay={isPhoneDisplay}
        />
        </WrapItem>
    ))}
    </Wrap>
        </HStack>
    </VStack>
  );
}
