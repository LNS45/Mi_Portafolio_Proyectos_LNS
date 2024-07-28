"use client"
import theme from "@/theme/theme";
import { Box, Image, useBreakpointValue, Text, Flex, Button } from "@chakra-ui/react";
import {EmailIcon, AttachmentIcon} from "@chakra-ui/icons";



export default function AcercaSection() {
    const paddingFlex = useBreakpointValue({ base: "1rem", md: "0 5rem", lg: "0 5rem"})
    const sizeResponsive = useBreakpointValue({ base: "16rem", md: "20rem", lg: "25em", xl:"25rem"})
    const flexDirection = useBreakpointValue({ base: "column", md: 'column', lg: "row", xl: "row"})
    const justifyContentResponsive = useBreakpointValue({ base: "center", md: 'space-around', lg: "space-between", xl: "space-between"})
    const fontSize = useBreakpointValue({base: ".8rem", md: ".8rem" , lg: "1rem", xl: "1rem"})
    const heightResponsive = useBreakpointValue({ base: "58vh", md : "60vh" , lg : "80vh", xl: "70vh"})

    return (
        <Box display={"flex"} h={"100vh"} w={"100%"} flexDirection={flexDirection} p={paddingFlex} alignItems={"center"} justifyContent={justifyContentResponsive} id="Acerca">
            <Image src="/images/perfil.png" boxSize={sizeResponsive} objectFit={"contain"} alt="Logo" animation={"shadowColorAnimated 1s ease-in-out infinite"}/>
            <Box backgroundColor={theme.colors.secondaryDark} w={'auto'} maxW={sizeResponsive} h={'auto'} p={"1rem"} borderRadius={"2rem"} animation={"shadowColorAnimated 1s ease-in-out infinite"}>
                <Text as={"h2"} fontSize={"1.85rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Acerca de mi</Text>
                <Text as={"p"} fontSize={fontSize} color={theme.colors.main} textAlign={"justify"}>¡Hola! Soy Lorenzo Noé Chávez Cerda, estudiante de ingeniería en sistemas computacionales en la UVEG, donde actualmente me especializo en programación móvil. Además, soy graduado del programa Oracle One Next Education, con enfoque en desarrollo front-end. Mi pasión por la tecnología y el desarrollo de software me impulsa a explorar nuevas soluciones innovadoras y a mejorar constantemente mis habilidades en el campo. Estoy emocionado por colaborar en proyectos desafiantes que marquen la diferencia en el mundo digital.</Text>
                <Flex justifyContent={"center"} gap={"2rem"} marginTop={".5rem"} >
                    <Button leftIcon={<EmailIcon />}  backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} _hover={{boxShadow: `2px 2px 5px ${theme.colors.highlight}`}}>Contrátame</Button>
                    <Button leftIcon={<AttachmentIcon />} backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} _hover={{boxShadow: `2px 2px 5px ${theme.colors.highlight}`}}>CV</Button>
                </Flex>
            </Box>
        </Box>
    )
}