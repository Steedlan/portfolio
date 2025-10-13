import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";
import { useTranslation } from "react-i18next";

export default function SectionAbout() {
    const { t } = useTranslation();
    return (
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
                <SectionTitle title={t("about.title")}/>
                <HStack w="auto" mt="-1rem" gap="1rem">
                  <Image src="/images/photo.jpeg" boxSize="10rem" borderRadius="full" fit="cover" alt="Photo" shadow="inner"/>
                  <VStack alignItems="flex-start" w="auto">
                    <TextFont {...fonts.T1.T16px.Regular} w="45rem" textAlign="left">
                      {t("about.description")}
                    </TextFont>
                    <TextFont {...fonts.T1.T16px.Regular} w="45rem" textAlign="left">
                      {t("about.description2")}
                    </TextFont>
                  </VStack>
                </HStack>
              </HStack>
    )
}