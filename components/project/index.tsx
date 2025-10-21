import { HStack, Image, VStack } from "@chakra-ui/react";
import { ProjectProps } from "./props";
import TextFont from "../textFont";
import fonts from "../../utils/fonts";
import ExternalLink from "../icons/externalLink";
import GithubSolid from "../icons/github";
import { useTranslation } from "react-i18next";

export default function Project({description, imageUrl, technologies, title, githubUrl, websiteUrl, setDisplayedProject, popUp} : ProjectProps) {
    const { t } = useTranslation();
    return (
        <VStack w="30rem" h="auto" bg="#2b2b2b" borderRadius="1rem" p="1rem" m="1rem" alignItems="flex-start" boxShadow="lg">
            <HStack w="full" alignItems="center" justifyContent="center">
                <TextFont {...fonts.T1.T24px.Bold}>{title}</TextFont>
            </HStack>
            <Image src={imageUrl} alt={title} objectFit="cover" borderRadius="1rem" />
            <VStack w="full" h="full">
                <TextFont {...fonts.T1.T16px.Regular} textAlign="center">
                    {description}
                </TextFont>
                <HStack  
                    w="full"
                    h="auto"
                    flexWrap="wrap"
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                    mt="0.5rem"
                >
                    {technologies.map((tech) => tech)}
                </HStack>
                {popUp && (
                    <HStack 
                        w="auto" 
                        h="auto" 
                        bg="#575757ff" 
                        mt="0.5rem"
                        onClick={() => setDisplayedProject && setDisplayedProject(popUp!)}
                        cursor="pointer"
                        _hover={{ bg: "#868686ff" }}
                        transition={"0.3s"}
                        borderRadius="1rem"
                    >
                        <TextFont {...fonts.T1.T14px.Bold} p="0.5rem">{t("projects.seeMore")}</TextFont>
                    </HStack>
                )}
                <HStack w="80%" h="0.1rem" bg="#8686862c" mt="0.2rem"/>
                <HStack w="full" justifyContent={"center"} h="full" alignItems="end" mt="0.2rem">
                    {githubUrl &&                         
                            <a href={githubUrl} target="_blank">
                                <HStack bg="#575757ff" _hover={{ bg: "#868686ff" }} transition={"0.3s"} p="0.5rem" borderRadius="1rem" w="auto">
                                    <GithubSolid />
                                    <TextFont {...fonts.T1.T14px.Regular}>{t("projects.github")}</TextFont>
                                </HStack>
                            </a>
                    }
                    {websiteUrl && 
                            <a href={websiteUrl} target="_blank">
                                <HStack bg="#575757ff" p="0.5rem" _hover={{ bg: "#868686ff" }} transition={"0.3s"} borderRadius="1rem" w="auto">
                                    <ExternalLink />
                                    <TextFont {...fonts.T1.T14px.Regular}>{t("projects.website")}</TextFont>
                                </HStack>
                            </a>
                    }
                </HStack>
            </VStack>
        </VStack>
    )
}