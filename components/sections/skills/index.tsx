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

export default function SectionSkills() {
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
    <SectionTitle title={t("navbar.skills")}/>
    <TextFont {...fonts.T1.T16px.Regular} w="70%" mt="1rem" textAlign="center">
      During my studies and personal projects, I have acquired a diverse set of technical skills that I continually strive to enhance. Here are all the technologies I already worked with:
    </TextFont>
    <HStack w="70%" h="auto" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="1rem" mt="3rem">
      <HStack w="full" justifyContent="center">
          <VStack w="49%" gap="0" h="full">
            <TextFont {...fonts.T1.T16px.Regular} textAlign="center">Primary Stack</TextFont>
            <HStack w="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap="1rem"  padding="1rem" borderRadius="1rem">
              <TechBadge icon={<JavaIcon height="1.3rem" width="1.3rem" />} techName="Java" />
              <TechBadge icon={<React height="1.3rem" width="1.3rem" />} techName="React" />
              <TechBadge icon={<NextjsIcon height="1.3rem" width="1.3rem" />} techName="Next.js" />
              <TechBadge icon={<Javascript height="1.3rem" width="1.3rem" />} techName="JavaScript" />
              <TechBadge icon={<Typescript height="1.3rem" width="1.3rem" />} techName="TypeScript" />
              <TechBadge icon={<Nodejs height="1.3rem" width="1.3rem" />} techName="NodeJs" />
              <TechBadge icon={<Html5 height="1.3rem" width="1.3rem" />} techName="HTML" />
              <TechBadge icon={<Css3 height="1.3rem" width="1.3rem" />} techName="CSS" />
              <TechBadge icon={<Postgresql height="1.3rem" width="1.3rem" />} techName="PostGreSql" />
              <TechBadge icon={<Git height="1.3rem" width="1.3rem" />} techName="Git" />
              <TechBadge icon={<GithubSolid height="1.3rem" width="1.3rem" />} techName="Github" />
              <TechBadge icon={<Vscode height="1.3rem" width="1.3rem" />} techName="VScode" />
              <TechBadge icon={<Intellij height="1.3rem" width="1.3rem" />} techName="IntelliJ" />
            </HStack>
          </VStack>
        </HStack>
      <VStack w="49%" h="full" gap="0">
        <TextFont {...fonts.T1.T16px.Regular} textAlign="center">Proficient</TextFont>
        <HStack w="full" h="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap="1rem" padding="1rem" borderRadius="1rem">
          <TechBadge icon={<Microsoftsqlserver height="1.3rem" width="1.3rem" />} techName="SQLServer" />
          <TechBadge icon={<Websocket height="1.3rem" width="1.3rem" />} techName="WebSockets" />
          <TechBadge icon={<Docker height="1.3rem" width="1.3rem" />} techName="Docker" />
          <TechBadge icon={<Dotnet height="1.3rem" width="1.3rem" />} techName=".NET" />
          <TechBadge icon={<AdobePhotoshop height="1.3rem" width="1.3rem" />} techName="Photoshop" />
          <TechBadge icon={<Premiere height="1.3rem" width="1.3rem" />} techName="Premiere Pro" />
          <TechBadge icon={<Spring  height="1.3rem" width="1.3rem" />} techName="Spring" />
        </HStack>
      </VStack>
        <VStack w="49%" gap="0">
          <TextFont {...fonts.T1.T16px.Regular} textAlign="center">Familiar</TextFont>
          <HStack w="full" justifyContent="center" alignItems="center" flexWrap="wrap" gap="1rem" padding="1rem" borderRadius="1rem">
            <TechBadge icon={<Sqlite height="1.3rem" width="1.3rem" />} techName="SQLite" />
            <TechBadge icon={<C height="1.3rem" width="1.3rem" />} techName="C" />
            <TechBadge icon={<Flutter height="1.3rem" width="1.3rem" />} techName="Flutter" />
            <TechBadge icon={<Mongodb height="1.3rem" width="1.3rem" />} techName="MongoDB" />
            <TechBadge icon={<Angularjs height="1.3rem" width="1.3rem" />} techName="Angular" />
            <TechBadge icon={<Unity height="1.3rem" width="1.3rem" />} techName="Unity" />
          </HStack>
        </VStack>
      </HStack>
    </HStack>
  );
}