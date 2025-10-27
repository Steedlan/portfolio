import { HStack } from "@chakra-ui/react"
import TextFont from "../textFont"
import fonts from "../../utils/fonts"
import { useTranslation } from "react-i18next";
import Link from "next/link";

export interface HeaderProps {
    isPhoneDisplay : boolean;
}

const Header = ({ isPhoneDisplay }: HeaderProps) => {
    const { t, i18n } = useTranslation();
    
    const toggleLang = () => {
        const next = i18n.language?.startsWith("en") ? "fr" : "en";
        i18n.changeLanguage(next);
    };

    return(
        <>
              {/* top gradient bar */}
              <HStack w="full" h="5rem" position="fixed" zIndex="100" top="0" bgImage="linear-gradient(180deg,
                    rgba(0, 0, 0, 1),
                    rgba(255, 255, 255, 0))"/>

              <HStack w="full" h="5rem" position="fixed" zIndex="100" bottom="0" bgImage="linear-gradient(0deg,
                    rgba(0, 0, 0, 1),
                    rgba(255, 255, 255, 0))"/>
                <HStack>
                    <HStack position="fixed" zIndex="110" top="2rem" left="50%" bg="linear-gradient(180deg, #2b2b2b, #252525)" boxShadow="xl" w="auto" h="2rem" opacity="0.9" borderRadius={"2rem"}  transform="translateX(-50%)">
                      <Link href="/#home" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                          {isPhoneDisplay 
                            ? <TextFont m="1rem" {...fonts.T1.T12px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.home")}</TextFont>
                            : <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.home")}</TextFont>
                          }
                        </HStack>
                      </Link>
                         <Link href="/#about" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                            <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.about")}</TextFont>
                        </HStack>
                      </Link>
                      <Link href="/#skills" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                            <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.skills")}</TextFont>
                        </HStack>
                      </Link>
                      <Link href="/#projects" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                            <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.projects")}</TextFont>
                        </HStack>
                      </Link>
                      <Link href="/#studies" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                            <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.studies")}</TextFont>
                        </HStack>
                      </Link>
                      <Link href="/#contact" prefetch={false} scroll={true}>
                        <HStack h="full" w="auto" position="relative" display="flex" alignItems="center" justifyContent="center">
                            <TextFont m="1rem" {...fonts.T1.T16px.Bold} transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{t("navbar.contact")}</TextFont>
                        </HStack>
                      </Link>
                    </HStack>
                <HStack position="fixed" top="2rem" zIndex="110" right="2rem" onClick={() => toggleLang()} cursor="pointer">
                  <TextFont {...fonts.T1.T16px.Regular} cursor="pointer"  transition=".5s" _hover={{letterSpacing:"0.1rem"}} >{i18n.language?.startsWith("en") ? "FR" : "EN"}</TextFont>
                </HStack>
              </HStack>
              <HStack w="full" h="5rem" position="fixed" zIndex="10" bottom="0" opacity="0.5" bgImage="linear-gradient(0deg,
                    rgba(0, 0, 0, 1),
                    rgba(255, 255, 255, 0))"
              />
        </>
    )
}

export default Header;