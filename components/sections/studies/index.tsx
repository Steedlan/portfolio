import { Box, HStack, Timeline, VStack } from "@chakra-ui/react";
import SectionTitle from "../../sectionTitle";
import { useTranslation } from "react-i18next";
import TextFont from "../../textFont";
import fonts from "../../../utils/fonts";

export interface SectionStudiesProps {
  isPhoneDisplay: boolean;
}

export default function SectionStudies ({isPhoneDisplay}: SectionStudiesProps) {
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
                <SectionTitle title={t("navbar.studies")} isPhoneDisplay={isPhoneDisplay}/>
            <HStack w="full" justifyContent="center" alignItems="center" mt="2rem">
            <Timeline.Root  w="auto">
                  <Timeline.Item>
                    <Timeline.Connector>
                      <Timeline.Separator
                        bg="#868686ff"
                        w="0.34rem"
                        ml={isPhoneDisplay ? "-0.21rem" : "-0.15rem"}
                      />
                      <Timeline.Indicator>
                        <Box h="1.5rem" w="1.5rem" bg="#868686ff" borderRadius="full" />
                      </Timeline.Indicator>
                    </Timeline.Connector>

                    <Timeline.Content>
                      <VStack align="start" gap="0">
                        <TextFont
                          {...(isPhoneDisplay ? fonts.T1.T14px.Bold : fonts.T1.T16px.Bold)}
                          textAlign="start"
                        >
                          {t("studies.vinci.title")}
                        </TextFont>
                        <TextFont {...(isPhoneDisplay ? fonts.T1.T10px.Bold : fonts.T1.T14px.Bold)}>
                          {t("studies.vinci.note")}
                        </TextFont>
                        <TextFont {...fonts.T1.T14px.Bold}>
                          {t("studies.vinci.years")}
                        </TextFont>
                        <TextFont {...(isPhoneDisplay ? fonts.T1.T14px.Bold : fonts.T1.T16px.Bold)}>
                          {t("studies.vinci.school")}
                        </TextFont>
                      </VStack>
                    </Timeline.Content>
                  </Timeline.Item>

                  {/* ACE */}
                  <Timeline.Item>
                    <Timeline.Connector alignItems="center">
                      <Timeline.Indicator>
                        <Box h="1.5rem" w="1.5rem" bg="#868686ff" borderRadius="full"/>
                      </Timeline.Indicator>

                      <Timeline.Separator
                        bg="#868686ff"
                        w="0.34rem"
                        mx="auto"
                      />
                    </Timeline.Connector>

                    <Timeline.Content>
                      <VStack align="start" gap="0">
                        <TextFont {...(isPhoneDisplay ? fonts.T1.T14px.Bold : fonts.T1.T16px.Bold)}>
                          {t("studies.ace.title")}
                        </TextFont>
                        <TextFont {...fonts.T1.T14px.Bold}>
                          {t("studies.ace.years")}
                        </TextFont>
                        <TextFont {...(isPhoneDisplay ? fonts.T1.T14px.Bold : fonts.T1.T16px.Bold)}>
                          {t("studies.ace.school")}
                        </TextFont>
                      </VStack>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline.Root>
                </HStack>
              </HStack>
    )
}