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
                      <TextFont {...fonts.T1.T16px.Bold}>Bachelor in computer science</TextFont>
                      <TextFont {...fonts.T1.T10px.Bold}>(Application Development)</TextFont>
                      <TextFont {...fonts.T1.T14px.Bold}>2022 - 2025</TextFont>
                      <TextFont {...fonts.T1.T16px.Bold}>Léonard de Vinci University College, Brussels</TextFont>
                    </VStack>
                  </HStack>
                  <HStack w="95.35%">
                    <Box h="8rem" w="0.34rem" bg="#868686ff" mt="-2rem"/>
                  </HStack>
                  <HStack w="full" mt="-2rem">
                    <Box h="1.5rem" w="1.5rem" bg="#868686ff" borderRadius="10rem"/>
                    <VStack gap="0" alignItems="start">
                      <TextFont {...fonts.T1.T16px.Bold}>General secondary Schooling</TextFont>
                      <TextFont {...fonts.T1.T14px.Bold}>2016 - 2022</TextFont>
                      <TextFont {...fonts.T1.T16px.Bold}>De l&apos;Autre Côté de l&apos;École, Brussels</TextFont>
                    </VStack>
                  </HStack>
                </VStack>
              </HStack>
    )
}