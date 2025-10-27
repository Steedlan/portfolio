import { HStack } from "@chakra-ui/react"
import TextFont from "../textFont"
import fonts from "../../utils/fonts"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export interface HeaderProps {
  isPhoneDisplay: boolean
}

const Header = ({ isPhoneDisplay }: HeaderProps) => {
  const { t, i18n } = useTranslation()
  const toggleLang = () => i18n.changeLanguage(i18n.language?.startsWith("en") ? "fr" : "en")


  // tailles responsives
  const navHeight = isPhoneDisplay ? "2rem" : "2.5rem"
  const itemMargin = isPhoneDisplay ? "full" : "1rem"
  const fontMobile = fonts.T1.T12px.Bold
  const fontDesktop = fonts.T1.T16px.Bold

  return (
    <>
      {/* barres dégradées */}
      <HStack w="full" h="5rem" position="fixed" zIndex="100" top="0"
              bgImage="linear-gradient(180deg, rgba(0,0,0,1), rgba(255,255,255,0))" />
      <HStack w="full" h="5rem" position="fixed" zIndex="10" bottom="0" opacity="0.5"
              bgImage="linear-gradient(0deg, rgba(0,0,0,1), rgba(255,255,255,0))" />

      <HStack>
        {/* NAV */}
        <HStack
          position="fixed"
          zIndex="110"
          top="2rem"
          left="50%"
          transform="translateX(-50%)"
          bg="linear-gradient(180deg, #2b2b2b, #252525)"
          boxShadow="xl"
          h={navHeight}
          px={isPhoneDisplay ? "0.25rem" : "0.5rem"}
          borderRadius="2rem"
          opacity="0.9"
          whiteSpace="nowrap"
          w={isPhoneDisplay ? "95vw" : "auto"}
          overflow="hidden"
          justifyContent="center"
          gap="0.5rem"
        >
          {[
            ["#home", t("navbar.home")],
            ["#about", t("navbar.about")],
            ["#skills", t("navbar.skills")],
            ["#projects", t("navbar.projects")],
            ["#studies", t("navbar.studies")],
            ["#contact", t("navbar.contact")],
          ].map(([href, label]) => (
            <Link key={href} href={`/${href}`} prefetch={false} scroll>
              <HStack h="full">
                <TextFont
                  m={itemMargin}
                  {...(isPhoneDisplay ? fontMobile : fontDesktop)}
                  transition=".3s"
                  _hover={{ letterSpacing: "0.06rem" }}
                >
                  {label}
                </TextFont>
              </HStack>
            </Link>
          ))}
        </HStack>

        {/* LANG SWITCHER */}
        {isPhoneDisplay ? (
          <HStack
            position="fixed"
            zIndex="110"
            top={`calc(2rem + ${navHeight})`}
            left="50%"
            transform="translateX(-50%)"
            mt="0.4rem"
            onClick={toggleLang}
            cursor="pointer"
            w="full"
            justifyContent="end"
          >
            <TextFont {...fonts.T1.T14px.Regular} transition=".3s" _hover={{ letterSpacing: "0.06rem" }} mr="2rem">
              {i18n.language?.startsWith("en") ? "FR" : "EN"}
            </TextFont>
          </HStack>
        ) : (
          // ➡️ à droite sur desktop
          <HStack position="fixed" top="2rem" zIndex="110" right="2rem" onClick={toggleLang} cursor="pointer">
            <TextFont {...fonts.T1.T16px.Regular} transition=".3s" _hover={{ letterSpacing: "0.06rem" }}>
              {i18n.language?.startsWith("en") ? "FR" : "EN"}
            </TextFont>
          </HStack>
        )}
      </HStack>
    </>
  )
}

export default Header
