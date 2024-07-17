'use client'
import "./animations.css"
import theme from "@/theme/theme";
import { useBreakpointValue } from '@chakra-ui/react';
import { Flex, Image, Link, ListItem, UnorderedList} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const NavBar = () => {
    //Manejo de boton de menu en movil
    let [isMenuActive, setMenuActive] = useState(false);
    //Breakpoints para la responsividad
    const displayFlex = useBreakpointValue({base: "none", md: "flex", lg: "flex"})
    const widthList = useBreakpointValue({ base: "100vw", md: "100%", lg: "100%",})
    const displayIcon = useBreakpointValue({ base:"block", md: "none", lg: "none",})
    const paddingFlex = useBreakpointValue({ base: "1rem", md: "0 5rem", lg: "0 5rem"})
    const colorFlex = useBreakpointValue({ base: theme.colors.dark, md: "none", lg: "none",})
    const linkHover = {
        color: "#40E0D0",
        transition: "ease-in-out .1s",
    }
    //Click del boton menu en movil
    const menuHandler = () => {
        setMenuActive(!isMenuActive);

    }
    //Color del boton menu segun su actividad
    let colorBtn = isMenuActive ? theme.colors.highlight : theme.colors.main;
    console.log("TEST");
    
    return (
        <Flex  w={"100%"} h={"5rem"} p={paddingFlex} alignItems={"center"} justifyContent={"space-between"} color={"white"} backgroundColor={colorFlex} position={"fixed"} zIndex={"5"}>
            <Link href='/'><Image src="images/logo_text.png" alt='Logo' width={"8rem"}/></Link>
                <UnorderedList listStyleType={"none"} display={displayFlex}>
                    <Flex direction={"row"} gap={"2rem"} alignItems={"center"} width={widthList} >
                        <ListItem><Link href='#Inicio' _hover={linkHover}>INICIO</Link></ListItem>
                        <ListItem><Link href='#Acerca' _hover={linkHover}>ACERCA DE MI</Link></ListItem>
                        <ListItem><Link href='#Proyectos' _hover={linkHover}>PROYECTOS</Link></ListItem>
                        <ListItem><Link href='#Skills' _hover={linkHover}>SKILLS</Link></ListItem>
                        <ListItem><Link href='#Contacto' _hover={linkHover} backgroundColor={theme.colors.dark} borderRadius={"10px"} padding={"0.5rem"} boxShadow={`0px 0px 5px ${theme.colors.highlight}`}>CONTACTO</Link></ListItem>
                    </Flex>    
                </UnorderedList>
                <HamburgerIcon display={displayIcon} w={"2.5rem"} h={"2.5rem"} onClick={menuHandler} color={colorBtn} animation={isMenuActive ? "rotateMenu .5s ease-in-out" : ""}/>
        </Flex>
    )
};

export default NavBar;