import { HStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import { useTranslation } from "react-i18next";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";

export default function SectionContact() {
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
                <SectionTitle title={t("navbar.contact")}/>
                <TextFont {...fonts.T1.T20px.Regular}>Get in touch</TextFont>

                <TextFont {...fonts.T1.T14px.Regular}>I&apos;m available for full time opportunities.</TextFont>
                <TextFont {...fonts.T1.T14px.Regular}>My inbox is always open</TextFont>
                
                <HStack w="auto" h="auto" p="1rem" bg="#3f3f3fff" borderRadius="1rem">
                    <TextFont {...fonts.T1.T16px.Regular}>Let&apos;s chat</TextFont>
                </HStack>
              </HStack>
    )
}