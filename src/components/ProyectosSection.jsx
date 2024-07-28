"use client"
import theme from "@/theme/theme";
import { Box, Image, useBreakpointValue, Text, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import CardProyect from "./CardProyect";

export default function ProyectosSection() {
    const paddingFlex = useBreakpointValue({ base: "1rem", md: "0 5rem", lg: "0 5rem"})
    const sizeResponsive = useBreakpointValue({ base: "16rem", md: "20rem", lg: "25em", xl:"25rem"})
    const justifyContentResponsive = useBreakpointValue({ base: "center", md: 'space-around', lg: "space-between", xl: "space-between"})
    const fontSize = useBreakpointValue({base: ".8rem", md: ".8rem" , lg: "1rem", xl: "1rem"})
    const heightResponsive = useBreakpointValue({ base: "58vh", md : "60vh" , lg : "80vh", xl: "70vh"})
    const [isActiveLink, setActiveLink] = useState("1");
    //Manejador del click
    const handleLinkClick = (id) => {
        setActiveLink(id);
    };
    const categorias = [
        {
            id: "1",
            name: "Website",
        },
    ];
    //Estructura de cada proyecto
    const proyectos = [
        {
            id: "1",
            name: "",
            description: "",
            linkDemo: "",
            linkRepo: "",
            techIcons: [],
        },
    ];

    return (
        <Box display={"flex"} h={"auto"} w={"100%"} flexDirection={"column"} p={paddingFlex} alignItems={"center"} id="Proyectos" gap={"2rem"} marginTop={"2rem"}>
            <Flex flexDirection={"column"} alignItems={"center"} w={"100%"} gap={"1rem"}>
                <Text as={"h2"} fontSize={"1.85rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Proyectos</Text>
                <Flex justifyContent={"center"} gap={"1.5rem"}>
                    {categorias.map(c => (
                        <Button textShadow={"1px 1px 1px black"} key={c.id} variant={"link"} color={isActiveLink === c.id ? theme.colors.highlight : theme.colors.main} onClick={() => handleLinkClick(c.id)}>{c.name}</Button>
                    ))}
                </Flex>
            </Flex>
            <CardProyect />
        </Box>
    )
}