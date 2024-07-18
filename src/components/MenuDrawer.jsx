'use client'
import { useMenu } from "@/context/menuContext"
import theme from "@/theme/theme";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerFooter, Link, Image, Box, Text, Flex } from "@chakra-ui/react"
import { useState } from "react"

export default function MenuDrawer() {
    const contexto = useMenu();
    
    const [placement, setPlacement] = useState('left')

    return (
        <Drawer placement={placement} onClose={contexto.onClose} isOpen={contexto.isOpen}>
            <DrawerOverlay />
            <DrawerContent display={"flex"} animation={"shadowColorAnimated 1s ease-in-out infinite"}>
                <DrawerBody fontWeight={"400"} textShadow={"1px 1px 1px black"} boxSizing="border-box" padding={"3rem 0"} display={"flex"} color={theme.colors.main} flex={"5"} textAlign={"center"} flexDirection={"column"} alignItems={"center"} fontSize={"1.8rem"}  backgroundColor={theme.colors.dark} >
                        <Link display={"flex"} alignItems={"center"} justifyContent={"center"} w={"100%"} flex={"1"} href="#Inicio" onClick={contexto.onClose} ><Text>INICIO</Text></Link>
                        <Link display={"flex"} alignItems={"center"} justifyContent={"center"}  w={"100%"} flex={"1"} href="#Acerca" onClick={contexto.onClose}><Text>ACERCA DE MI</Text></Link>
                        <Link display={"flex"} alignItems={"center"} justifyContent={"center"}  w={"100%"} flex={"1"} href="#Inicio" onClick={contexto.onClose}><Text>PROYECTOS</Text></Link>
                        <Link display={"flex"} alignItems={"center"} justifyContent={"center"}  w={"100%"} flex={"1"} href="#Inicio" onClick={contexto.onClose}><Text>SKILLS</Text></Link>
                        <Link display={"flex"} alignItems={"center"} justifyContent={"center"}  w={"100%"} flex={"1"} href="#Inicio" onClick={contexto.onClose}><Text>CONTACTO</Text></Link>
                </DrawerBody>
                <DrawerFooter flex={"2"} display={"flex"} flexDirection={"column"} alignItems={"center"} backgroundColor={theme.colors.dark} >
                    <Flex flexDirection={"row"} justifyContent={"space-around"} w={"100%"}>
                        <Link href="https://www.linkedin.com/in/lorenzo-chavez-ingsc">
                            <Image w={"4rem"} h={"4rem"} src="/images/logo_linkedin.png" alt="Logo"/>
                        </Link>
                        <Link href="https://github.com/LNS45">
                            <Image w={"4rem"} h={"4rem"} src="/images/logo_github.png" alt="Logo"/>
                        </Link>
                    </Flex>
                    <Image w={"10rem"} h={"8rem"} src="/images/logo_text.png" alt="Logo"/>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}