import { HStack } from "@chakra-ui/react";
import fonts from "../../utils/fonts";
import TextFont from "../textFont";

export default function SectionTitle({title}: {title: string}) {
    return (
            <HStack w="full" justifyContent="center" alignItems="center" position="relative">
              <TextFont {...fonts.T1.T32px.Bold} position={"relative"} zIndex={2} fontSize={60}>
                {title}
              </TextFont>
              <TextFont {...fonts.T1.T48px.Bold} position={"absolute"}
                WebkitMaskImage="linear-gradient(90deg, #ffffff02 5rem, #ffffff1f)"
                zIndex={2} fontSize={100}
              >
                {title}
              </TextFont>
            </HStack>
    );
}