import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import ProjectPopupProps from "./props";
import TextFont from "../textFont";
import fonts from "../../utils/fonts";
import CrossMark from "../icons/cross";

export default function ProjectPopup({description, imageUrl, technologies, title, youtubeUrl, setDisplayedProject} : ProjectPopupProps) {
    return (
        <>
            <VStack h="100%" w="100%" bg="#0000009f" borderRadius="2rem" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="100" />
            
            <VStack 
                h="auto" 
                p="1rem" 
                w="75%" 
                bg="#2b2b2bff" 
                borderRadius="2rem" 
                position="fixed" 
                top="50%" 
                left="50%" 
                transform="translate(-50%, -50%)" 
                zIndex="200"
                boxShadow="dark-lg"
                border={"0.2rem solid #1b1b1b1a"}
                maxH="80%"
                overflowY="auto"
            >
                <HStack h="10%" w="full" borderTopRadius="2rem" justifyContent="center" alignItems="center">
                    <TextFont {...fonts.T1.T20px.Bold}>{title}</TextFont>
                    <Box position="absolute" right="2rem" cursor="pointer" onClick={() => setDisplayedProject && setDisplayedProject(null)}>
                        <CrossMark/>
                    </Box>
                </HStack>

                <HStack h="full" w="90%" borderRadius="1rem" justifyContent="center" alignItems="center">
                    <VStack h="auto" w="full" p="1rem" overflowY="auto" alignItems="center" justifyContent="center">
                        {description.map((desc, index) => (
                            <TextFont key={index} {...fonts.T1.T16px.Regular} textAlign="center" w="full">
                                {desc}
                            </TextFont>
                        ))}

                        <Box h="1px" w="80%" bg="#ffffff34" my="0.5rem"/>
                        <HStack w="full" justifyContent="center" flexWrap="wrap" gap="0.5rem">
                            {technologies.map((tech, index) => (
                                <Box key={index}>
                                    {tech}
                                </Box>
                            ))}
                        </HStack>
                    </VStack>
                    <Image src={imageUrl} alt={title} borderRadius="1rem" maxW="500px" maxH="300px" objectFit="cover" />
                    {youtubeUrl && (
                        <iframe
                            width="560"
                            height="315"
                            src={youtubeUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '1rem', maxWidth: '500px', width: '100%' }}
                        ></iframe>
                    )}
                </HStack>
            </VStack>
        </>
    )
}