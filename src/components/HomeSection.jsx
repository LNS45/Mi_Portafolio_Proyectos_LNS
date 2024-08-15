"use client"
import { Box, Image,useBreakpointValue, Text } from "@chakra-ui/react"
import theme from "@/theme/theme"
import { useEffect, useState } from "react"


export default function HomeSection() {
    const boxTextWidth = useBreakpointValue({base: "auto" , md: "auto" , lg: "50rem", xl:"50rem"})
    const boxTextMgTop = useBreakpointValue({base: "50%" , md: "50%" , lg: "10rem"})
    const boxTextMgLeft = useBreakpointValue({base: "0.5rem" , md: "80%" , lg: "6rem"})
    const fontSize = useBreakpointValue({base: "1.5rem", md: "3rem" , lg: "2.8rem", xl: "3rem"})
    const heightBox = useBreakpointValue({base: "auto", lg: "10rem", md: "10rem"})
    const [especialidad, setEspecialidad] = useState(["Front-End","Mobile"]);
    const [indexEspecialidad, setIndexEspecialidad] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            (indexEspecialidad == (especialidad.length - 1)) ? setIndexEspecialidad(0) : setIndexEspecialidad(indexEspecialidad + 1);
        }, 3000)
        return () => {clearInterval(interval)}
    }, [indexEspecialidad])
    
    return (
        <Box w={"100%"} h={"calc(100vh - 5rem)"} position={"relative"} zIndex={"2"} id="Inicio">
            <Box w={boxTextWidth} h={heightBox} position={"absolute"} backgroundColor={"#000000"} zIndex={"2"} margin={`${boxTextMgTop} 0rem 0rem ${boxTextMgLeft}`} boxShadow={`5px 5px 5px ${theme.colors.highlight}`} outline={`1px solid ${theme.colors.main}`} color={"white"} p={"0px 1rem"} maxWidth={"95vw"}>
                <Text fontSize={fontSize} color={theme.colors.main}>¡Hola! Soy Lorenzo...</Text>
                <Text fontSize={fontSize} color={theme.colors.highlight} animation={"textColorAnimated 1s ease-in-out infinite"} >Desarrollador {especialidad[indexEspecialidad]}</Text>
            </Box>
            <Box w={"100%"} h={"calc(100vh - 5rem)"} position={"absolute"} bgGradient={`linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 65%, ${theme.colors.secondary} 100%)`} zIndex={"1"}></Box>
            <Image src="/images/Backgrounds/Background.jpg" w={"100%"} h={"calc(100vh - 5rem)"} objectFit={"cover"} position={"absolute"} zIndex={"0"}/>
        </Box>
    )
};