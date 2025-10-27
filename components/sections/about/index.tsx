import { HStack, Image, VStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";
import { useTranslation } from "react-i18next";

export interface SectionAboutProps {
  isPhoneDisplay : boolean;
}

export default function SectionAbout({ isPhoneDisplay }: SectionAboutProps) {
  const { t } = useTranslation();
  return (
    <HStack 
      w="full" 
      bg="#141414ff" 
      h="auto" 
      textAlign={"center"} 
      justifyContent="center" 
      alignItems="center" 
      py={isPhoneDisplay ? "3rem" : "5rem"}
      flexDirection="column" 
      position="relative" 
      zIndex="5"
      dropShadow={"dark-lg"}
      shadow="inner"
    >
      <SectionTitle title={t("about.title")} isPhoneDisplay={isPhoneDisplay} />
      {isPhoneDisplay ? (
        <VStack w="auto" mt="-1rem" gap="1rem">
          <Image src="/images/photo.jpeg" boxSize="10rem" mt="2rem" borderRadius="full" fit="cover" alt="Photo" shadow="inner" />
          <VStack alignItems="flex-start" w="20rem">
            <TextFont {...fonts.T1.T14px.Regular} textAlign="left" textWrap="wrap">
              {t("about.description")}
            </TextFont>
            <TextFont {...fonts.T1.T14px.Regular} textAlign="left">
              {t("about.description2")}
            </TextFont>
          </VStack>
        </VStack>
      ) : (
        <HStack w="auto" mt="-1rem" gap="1rem">
          <Image src="/images/photo.jpeg" boxSize="10rem" borderRadius="full" fit="cover" alt="Photo" shadow="inner" />
          <VStack alignItems="flex-start" w="45rem">
            <TextFont {...fonts.T1.T16px.Regular} textAlign="left" textWrap="wrap">
              {t("about.description")}
            </TextFont>
            <TextFont {...fonts.T1.T16px.Regular} textAlign="left">
              {t("about.description2")}
            </TextFont>
          </VStack>
        </HStack>
      )}
    </HStack>
  );
}