import { Box, HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react"
import ProjectPopupProps from "./props"
import TextFont from "../textFont"
import fonts from "../../utils/fonts"
import CrossMark from "../icons/cross"

export default function ProjectPopup({
  description,
  imageUrl,
  technologies,
  title,
  youtubeUrl,
  isPhoneDisplay,
  setDisplayedProject,
}: ProjectPopupProps) {

  return (
    <>
      <VStack
        h="100%"
        w="100%"
        bg="#0000009f"
        borderRadius="2rem"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="100"
      />

      <VStack
        p="1rem"
        w={isPhoneDisplay ? "100%" : "75%"}
        bg="#2b2b2bff"
        borderRadius="2rem"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="200"
        boxShadow="dark-lg"
        border="0.2rem solid #1b1b1b1a"
        maxH="80%"
        overflowY="auto"
        gap={isPhoneDisplay ? "1rem" : "1.5rem"}
      >
        {isPhoneDisplay
        ? <VStack w="full" h="3rem" justifyContent="center" position="relative" gap="2rem">
          <Box
            position="absolute"
            right="1.5rem"
            cursor="pointer"
            onClick={() => setDisplayedProject && setDisplayedProject(null)}
            h="3rem"
            >
            <CrossMark />
          </Box>
          <TextFont mt="2rem" h="full" {...fonts.T1.T20px.Bold}>{title}</TextFont>
        </VStack>
        : <HStack w="full" justifyContent="center" position="relative">
            <TextFont {...fonts.T1.T20px.Bold}>{title}</TextFont>
            <Box
                position="absolute"
                right="1.5rem"
                cursor="pointer"
                onClick={() => setDisplayedProject && setDisplayedProject(null)}
            >
                <CrossMark />
            </Box>
            </HStack>
        }

        <VStack
          w="full"
          gap={isPhoneDisplay ? "1rem" : "1.5rem"}
          alignItems="center"
          justifyContent="center"
        >

          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              borderRadius="1rem"
              maxW={isPhoneDisplay ? "100%" : "500px"}
              maxH={isPhoneDisplay ? "90%" : "300px"}
              objectFit="cover"
            />
          )}

          {youtubeUrl && (
            <iframe
              width="560"
              height="315"
              src={youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "1rem",
                maxWidth: isPhoneDisplay ? "100%" : "500px",
                width: "100%",
              }}
            ></iframe>
          )}

          <VStack w="full" alignItems="center" justifyContent="center" gap="0.5rem">
            {description.map((desc, index) => (
              <TextFont
                key={index}
                {...fonts.T1.T16px.Regular}
                textAlign="center"
                w="full"
              >
                {desc}
              </TextFont>
            ))}
          </VStack>

          <Box h="1px" w="80%" bg="#ffffff34" my="0.5rem" />

          <HStack
            w="full"
            justifyContent="center"
            flexWrap="wrap"
            gap="0.5rem"
          >
            {technologies.map((tech, index) => (
              <Box key={index}>{tech}</Box>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}
