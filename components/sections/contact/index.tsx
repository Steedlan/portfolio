import { HStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import { useTranslation } from "react-i18next";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";
import Link from "next/link";

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
                <TextFont {...fonts.T1.T20px.Regular}>{t("contact.title")}</TextFont>

                <TextFont {...fonts.T1.T14px.Regular}>{t("contact.description")}</TextFont>
                <TextFont {...fonts.T1.T14px.Regular}>{t("contact.inbox")}</TextFont>
                
                <HStack w="auto" h="auto" p="1rem" bg="#3f3f3fff" borderRadius="1rem">
                  <Link href="mailto:contact@arnaud-schellekens.be" target="_blank">
                    <TextFont {...fonts.T1.T16px.Regular}>{t("contact.button")}</TextFont>
                  </Link>
                </HStack>
              </HStack>
    )
}