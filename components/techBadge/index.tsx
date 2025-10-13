import { HStack } from "@chakra-ui/react";
import TechBadgeProps from "./props";
import TextFont from "../textFont";
import fonts from "../../utils/fonts";

const TechBadge = ({icon, techName}: TechBadgeProps) => {
    return (
        <HStack w="auto" h="2rem" bg="#3d3d3dff" alignItems="center" p="0.5rem" gap="0.5rem" borderRadius="0.5rem">
            {icon}
            <TextFont {...fonts.T1.T16px.Regular}>{techName}</TextFont>
        </HStack>
    );
};
export default TechBadge;