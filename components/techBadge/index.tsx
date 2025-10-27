import { HStack } from "@chakra-ui/react";
import TechBadgeProps from "./props";
import TextFont from "../textFont";
import fonts from "../../utils/fonts";

const TechBadge = ({icon, techName, isPhoneDisplay}: TechBadgeProps) => {
    return (
        <HStack w="auto" h="2rem" bg="#3d3d3dff" alignItems="center" p={isPhoneDisplay ? "0.3rem" : "0.5rem"} gap={isPhoneDisplay ? "0.3rem" : "0.5rem"} borderRadius="0.5rem">
            {icon}
            <TextFont {...( isPhoneDisplay ? fonts.T1.T14px.Regular : fonts.T1.T14px.Regular)}>{techName}</TextFont>
        </HStack>
    );
};
export default TechBadge;