"use client";
import { Box, HStack, useMediaQuery, VStack } from "@chakra-ui/react";
import TextFont from "../components/textFont";
import fonts from "../utils/fonts";
import { useTranslation } from "react-i18next";
import Particles from "../components/particles";
import { ParticlesType } from "../components/particles/props";
import Header from "../components/header";
import SectionSkills from "../components/sections/skills";
import SectionAbout from "../components/sections/about";
import SectionProject from "../components/sections/projects";
import SectionStudies from "../components/sections/studies";
import SectionContact from "../components/sections/contact";
import ProjectPopup from "../components/projectPopup";
import { useState } from "react";
import ProjectPopupProps from "../components/projectPopup/props";

export default function Home() {
  const { t } = useTranslation();
  const [displayedProject, setDisplayedProject] = useState<ProjectPopupProps | null>(null);
  const [isPhoneDisplay] =  useMediaQuery(["(max-width: 1200px)"]);
  return (    
    <Box>
      <Header isPhoneDisplay={isPhoneDisplay}/>
      <Box id="home">
        <Particles type={ParticlesType.CONNECT} zIndex={-20} id="homeParticles"/>
        <HStack h="100vh" w="full" display="flex">
        <VStack w="full"justifyContent="center" alignItems="center">
          <HStack h="1rem" mt="3rem">
            <Box h="full" w="1rem" position="relative" display="flex" alignItems="center" justifyContent="center">
              <Box
                h="60%"
                w="60%"
                bg="green"
                borderRadius="20rem"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={2}
              />
              <Box
                h="full"
                w="full"
                bg="lime"
                opacity={0.2}
                borderRadius="20rem"
                position="absolute"
                top={0}
                left={0}
                zIndex={1}
              />
            </Box>
            <TextFont {...fonts.T1.T12px.Bold} textShadow="0px 0px 2px lime">{t("openForWork")}</TextFont>
          </HStack>

          <VStack alignItems="center">
            {isPhoneDisplay
              ? <>
                  <TextFont {...fonts.T1.T24px.Bold} textShadow="1px 1px 10px gray" >{t("title")}</TextFont>
                  <TextFont {...fonts.T1.T14px.Regular} mt="-0.5rem" textShadow="1px 1px 4px gray">{t("subsubtitle")}</TextFont>
                  <TextFont {...fonts.T1.T12px.Regular} mt="-0.2rem" textShadow="1px 1px 4px gray">{t("subtitle")}</TextFont>
                </>
              : <>
                  <TextFont {...fonts.T1.T48px.Bold} textShadow="1px 1px 10px gray" >{t("title")}</TextFont>
                  <TextFont {...fonts.T1.T20px.Regular} mt="-0.5rem" textShadow="1px 1px 4px gray">{t("subsubtitle")}</TextFont>
                  <TextFont {...fonts.T1.T14px.Regular} mt="-0.2rem" textShadow="1px 1px 4px gray">{t("subtitle")}</TextFont>
                </>
            }
          </VStack>

          <HStack h="1rem" mb="3rem" w="full" justifyContent="center">
            <TextFont {...fonts.T1.T24px.Bold} mt="38%">V</TextFont>
          </HStack>
        </VStack>
        </HStack>
      </Box>

      <Box id="about"/>
        <SectionAbout isPhoneDisplay={isPhoneDisplay}/>
      <Box id="skills"/>
      <SectionSkills isPhoneDisplay={isPhoneDisplay}/>
      <Box id="projects"/>
      <SectionProject setDisplayedProject={setDisplayedProject} isPhoneDisplay={isPhoneDisplay}/>
      <Box id="studies"/>
      <SectionStudies isPhoneDisplay={isPhoneDisplay}/>
      <Box id="contact"/>
      <SectionContact isPhoneDisplay={isPhoneDisplay}/>

      {displayedProject && <ProjectPopup {...displayedProject} setDisplayedProject={setDisplayedProject}/>}

    </Box>
  );
}
