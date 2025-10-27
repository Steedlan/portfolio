import React from "../../icons/react";
import JavaIcon from "../../icons/java";
import NextjsIcon from "../../icons/nextjs";
import Javascript from "../../icons/js";
import Typescript from "../../icons/ts";
import Nodejs from "../../icons/nodejs";
import Html5 from "../../icons/html";
import Css3 from "../../icons/css";
import Postgresql from "../../icons/postgresql";
import Spring from "../../icons/spring";
import Dotnet from "../../icons/dotnet";
import C from "../../icons/c";
import Mongodb from "../../icons/mongodb";
import Angularjs from "../../icons/angular";
import Docker from "../../icons/docker";
import Flutter from "../../icons/flutter";
import Unity from "../../icons/unity";
import Websocket from "../../icons/websocket";
import { Git } from "../../icons/git";
import GithubSolid from "../../icons/github";
import Vscode from "../../icons/vscode";
import Intellij from "../../icons/intellij";
import AdobePhotoshop from "../../icons/photoshop";
import Premiere from "../../icons/premierepro";
import TechBadge from "../../techBadge";
import Microsoftsqlserver from "../../icons/sqlserver";
import { HStack, VStack } from "@chakra-ui/react";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";
import SectionTitle from "../../sectionTitle";
import { useTranslation } from "react-i18next";
import Sqlite from "../../icons/sqlite";
import Agile from "../../icons/agile";
import Python from "../../icons/python";

export interface SectionSkillsProps {
  isPhoneDisplay: boolean;
}

export default function SectionSkills({ isPhoneDisplay }: SectionSkillsProps) {
  const { t } = useTranslation();
  return (
    <HStack 
        w="full" 
        bg="#1f1f1fff" 
        h="auto" 
        textAlign={"center"} 
        justifyContent="center" 
        alignItems="center" 
        py="4rem" 
        flexDirection="column" 
        position="relative" 
        zIndex="5"
        dropShadow={"dark-lg"}
        shadow="inner"
      >
    <SectionTitle title={t("navbar.skills")} isPhoneDisplay={isPhoneDisplay}/>
    {isPhoneDisplay
      ? <TextFont {...fonts.T1.T14px.Regular} w="70%" mt="1rem" textAlign="center">
          {t("skills.description")}
        </TextFont>
      : <TextFont {...fonts.T1.T16px.Regular} w="70%" mt="1rem" textAlign="center">
          {t("skills.description")}
        </TextFont>
    }
    <HStack w="70%" h="auto" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="1rem" mt={isPhoneDisplay ? "1rem" : "3rem"}>
      <HStack w="full" justifyContent="center">
          <VStack w={isPhoneDisplay ? "full" : "49%"} gap="0" h="full">
            <>
              <TextFont {...fonts.T1.T20px.Regular} textAlign="center">{t("skills.primary")}</TextFont>
              <TextFont {...(isPhoneDisplay ? fonts.T1.T12px.Regular : fonts.T1.T14px.Regular)} textAlign="center">{t("skills.primary.description")}</TextFont>
            </>
            <HStack w="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap={isPhoneDisplay ? "0.6rem" : "1rem"}  padding="1rem" borderRadius="1rem">
              <TechBadge icon={<JavaIcon height="1.3rem" width="1.3rem" />} techName="Java" isPhoneDisplay={true}/>
              <TechBadge icon={<React height="1.3rem" width="1.3rem" />} techName="React" isPhoneDisplay={true}/>
              <TechBadge icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" isPhoneDisplay={true}/>
              <TechBadge icon={<Javascript height="1.3rem" width="1.3rem" />} techName="JavaScript" isPhoneDisplay={true}/>
              <TechBadge icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" isPhoneDisplay={true}/>
              <TechBadge icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" isPhoneDisplay={true}/>
              <TechBadge icon={<Html5 height="1.3rem" width="1.3rem" />} techName="HTML" isPhoneDisplay={true}/>
              <TechBadge icon={<Css3 height="1.3rem" width="1.3rem" />} techName="CSS" isPhoneDisplay={true}/>
              <TechBadge icon={<Postgresql height="1.3rem" width="1.3rem" />} techName="PostGreSql" isPhoneDisplay={true}/>
              <TechBadge icon={<Git height="1.3rem" width="1.3rem" />} techName="Git" isPhoneDisplay={true}/>
              <TechBadge icon={<GithubSolid height="1.3rem" width="1.3rem" />} techName="Github" isPhoneDisplay={true}/>
              <TechBadge icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" isPhoneDisplay={true}/>
              <TechBadge icon={<Intellij height="1.3rem" width="1.3rem" />} techName="IntelliJ" isPhoneDisplay={true}/>
            </HStack>
          </VStack>
        </HStack>
      <VStack w={isPhoneDisplay ? "full" : "49%"} h="full" gap="0">
              <TextFont {...fonts.T1.T20px.Regular} textAlign="center">{t("skills.secondary")}</TextFont>
              <TextFont {...(isPhoneDisplay ? fonts.T1.T12px.Regular : fonts.T1.T14px.Regular)} textAlign="center">{t("skills.secondary.description")}</TextFont>
        <HStack w="full" h="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap={isPhoneDisplay ? "0.6rem" : "1rem"} padding="1rem" borderRadius="1rem">
          <TechBadge icon={<Microsoftsqlserver height="1.3rem" width="1.3rem" />} techName="SQLServer" isPhoneDisplay={true}/>
          <TechBadge icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" isPhoneDisplay={true}/>
          <TechBadge icon={<Docker height="1.3rem" width="1.3rem" />} techName="Docker" isPhoneDisplay={true}/>
          <TechBadge icon={<Dotnet height="1.3rem" width="1.3rem" />} techName=".NET" isPhoneDisplay={true}/>
          <TechBadge key={15} icon={<Agile height="1.3rem" width="1.3rem" />} techName="Agile" isPhoneDisplay={true}/>
          <TechBadge icon={<AdobePhotoshop height="1.3rem" width="1.3rem" />} techName="Photoshop" isPhoneDisplay={true}/>
          <TechBadge icon={<Premiere height="1.3rem" width="1.3rem" />} techName="Premiere Pro" isPhoneDisplay={true}/>
          <TechBadge icon={<Spring  height="1.3rem" width="1.3rem" />} techName="Spring" isPhoneDisplay={true}/>
        </HStack>
      </VStack>
        <VStack w={isPhoneDisplay ? "full" : "49%"} gap="0">
            <TextFont {...fonts.T1.T20px.Regular} textAlign="center">{t("skills.familiar")}</TextFont>
            <TextFont {...(isPhoneDisplay ? fonts.T1.T12px.Regular : fonts.T1.T14px.Regular)} textAlign="center">{t("skills.familiar.description")}</TextFont>
          <HStack w="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap={isPhoneDisplay ? "0.6rem" : "1rem"} padding="1rem" borderRadius="1rem">
            <TechBadge icon={<Sqlite height="1.3rem" width="1.3rem" />} techName="SQLite" isPhoneDisplay={true}/>
            <TechBadge icon={<C height="1.3rem" width="1.3rem" />} techName="C" isPhoneDisplay={true}/>
            <TechBadge icon={<Flutter height="1.3rem" width="1.3rem" />} techName="Flutter" isPhoneDisplay={true}/>
            <TechBadge icon={<Mongodb height="1.3rem" width="1.3rem" />} techName="MongoDB" isPhoneDisplay={true}/>
            <TechBadge icon={<Angularjs height="1.3rem" width="1.3rem" />} techName="Angular" isPhoneDisplay={true}/>
            <TechBadge icon={<Unity height="1.3rem" width="1.3rem" />} techName="Unity" isPhoneDisplay={true}/>
            <TechBadge icon={<Python height="1.3rem" width="1.3rem" />} techName="Python" isPhoneDisplay={true}/>
          </HStack>
        </VStack>
      </HStack>
    </HStack>
  );
}