import { HStack } from "@chakra-ui/react";
import fonts from "../../utils/fonts";
import TextFont from "../textFont";

export interface SectionTitleProps {
    title: string;
    isPhoneDisplay: boolean;
}

export default function SectionTitle({ title, isPhoneDisplay }: SectionTitleProps) {
    return (
            <HStack w="full" justifyContent="center" alignItems="center" position="relative">
              <TextFont {...fonts.T1.T32px.Bold} position={"relative"} zIndex={2} fontSize={isPhoneDisplay ? 40 : 60} >
                {title}
              </TextFont>
              <TextFont {...fonts.T1.T48px.Bold} position={"absolute"}
                WebkitMaskImage="linear-gradient(90deg, #ffffff02 1rem, #ffffff1f)"
                zIndex={2} fontSize={isPhoneDisplay ? 60 : 100}
              >
                {title}
              </TextFont>
            </HStack>
    );
}