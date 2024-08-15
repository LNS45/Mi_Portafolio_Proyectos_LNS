"use client"
import theme from "@/theme/theme";
import { Box, Flex, Text, useBreakpointValue, Link, Button, chakra, ButtonGroup } from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"



export default function ContactSection() {
    const paddingFlex = useBreakpointValue({ base: "1rem 2rem", md: "1rem", lg: "1rem 2rem"})
    const fontSize = useBreakpointValue({base: "1.5rem", md: ".8rem" , lg: "1.5rem", xl: "1.5rem"})
    const flexDirectionResponsive = useBreakpointValue({base: "column", md: "column", lg: "row",})

    return (
        <Box display={"flex"} h={"50vh"} w={"100%"} flexDirection={"column"} p={paddingFlex} alignItems={"center"} gap={"1rem"} id="Contacto" backgroundColor={theme.colors.dark} marginTop={"3rem"} borderTopRadius={"4rem"} animation={"shadowColorAnimated 1s ease-in-out infinite"}>
            <Text as={"h2"} fontSize={"1.85rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Contacto</Text>
            <Box w={"100%"} h={"auto"} display={"flex"} flexDirection={flexDirectionResponsive} justifyContent={"start"}>
                <Flex flexDirection={"column"} color={theme.colors.main} flex={"1"} gap={"1rem"}>
                    <Text as={"h5"} fontSize={fontSize}>Mándame un mensaje</Text>
                    <Button backgroundColor={"red"} w={"20rem"} variant={"link"} color={theme.colors.main} leftIcon={<EmailIcon />}>lorenzochavezxd@gmail.com</Button>
                    <Button variant={"link"} color={theme.colors.main} leftIcon={<PhoneIcon />}>+52 671 110 8595</Button>
                </Flex>
                <Flex flex={"1"}>
                    <Text color={"white"}>Formulario</Text>
                </Flex>
            </Box>
        </Box>
    )
}