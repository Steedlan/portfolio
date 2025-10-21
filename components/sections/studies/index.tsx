import { Box, HStack, VStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import { useTranslation } from "react-i18next";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";

export default function SectionStudies () {
    const {t} = useTranslation();
    return(
        <HStack
                w="full" 
                bg="#141414ff" 
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
                <SectionTitle title={t("navbar.studies")}/>
                
                <VStack alignItems="center" gap="0">
                  <HStack>
                    <Box h="1.5rem" w="1.5rem" bg="#868686ff" borderRadius="10rem"/>
                    <VStack gap="0" alignItems="start">
                      <TextFont {...fonts.T1.T16px.Bold}>{t("studies.vinci.title")}</TextFont>
                      <TextFont {...fonts.T1.T14px.Bold}>{t("studies.vinci.note")}</TextFont>
                      <TextFont {...fonts.T1.T14px.Bold}>{t("studies.vinci.years")}</TextFont>
                      <TextFont {...fonts.T1.T16px.Bold}>{t("studies.vinci.school")}</TextFont>
                    </VStack>
                  </HStack>
                  <HStack w="96.6%">
                    <Box h="8.5rem" pt="0" w="0.34rem" bg="#868686ff" mt="-2.5rem"/>
                  </HStack>
                  <HStack w="full" mt="-2rem">
                    <Box h="1.5rem" w="1.5rem" bg="#868686ff" borderRadius="10rem"/>
                    <VStack gap="0" alignItems="start">
                      <TextFont {...fonts.T1.T16px.Bold}>{t("studies.ace.title")}</TextFont>
                      <TextFont {...fonts.T1.T14px.Bold}>{t("studies.ace.years")}</TextFont>
                      <TextFont {...fonts.T1.T16px.Bold}>{t("studies.ace.school")}</TextFont>
                    </VStack>
                  </HStack>
                </VStack>
              </HStack>
    )
}