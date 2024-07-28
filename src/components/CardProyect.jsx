import { Card, CardBody, CardFooter, CardHeader, useBreakpointValue, Text, Image, ButtonGroup, Button, Flex } from "@chakra-ui/react";
import theme from "@/theme/theme";


export default function CardProyect(){
    const CardSizeResponsive = useBreakpointValue({ base: "20rem", md: "sm", lg: "50rem",});
    const CardDirectionResponsive = useBreakpointValue({ base: "column", md: "column", lg: "row",})
    const ImageSizeResponsive = useBreakpointValue({ base: "20rem", md: "20rem", lg: "5rem",})

    return (
        <Card boxSize={CardSizeResponsive} h={"auto"} animation={"shadowColorAnimated 1s ease-in-out infinite"} backgroundColor={theme.colors.dark} >
            <CardHeader>
                <Text as={"h5"} fontSize={"1.2rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>
                    Proyecto
                </Text>
            </CardHeader>
            <CardBody display={"flex"} gap={"2rem"} flexDirection={"column"}>
                <Flex flexDirection={CardDirectionResponsive} gap={"1rem"}>
                    <Text flex={"1"} as={"p"} fontSize={".8rem"} color={theme.colors.main} textShadow={"2px 2px 1px black"} textAlign={"justify"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    <Image src="/images/Backgrounds/background.jpg" flex={"1"} w={ImageSizeResponsive} borderRadius={"10px"} boxShadow={` 1px 1px 2px black, 5px 5px 1px ${theme.colors.secondary}`}/>
                </Flex>
                <ButtonGroup h={"auto"}>
                    <Button  boxShadow={`0px 0px 5px ${theme.colors.highlight}`} textShadow={"1px 1px 1px black"} color={theme.colors.highlight} backgroundColor={theme.colors.secondaryDark}>Demo</Button>
                    <Button boxShadow={`0px 0px 5px ${theme.colors.highlight}`} textShadow={"1px 1px 1px black"} color={theme.colors.highlight} backgroundColor={theme.colors.secondaryDark}>Repositorio</Button>
                </ButtonGroup> 
            </CardBody>
            <CardFooter display={"flex"} flexDirection={"column"} gap={".5rem"}>
                <Text as={"p"} fontSize={".8rem"} color={theme.colors.main}>Tecnologías usadas:</Text>
                <Flex gap={".5rem"}>
                    <Image src="/images/icons/icon_css.png" w={"2rem"} />
                    <Image src="/images/icons/icon_js.png" w={"2rem"} />
                    <Image src="/images/icons/icon_sqlite.png" w={"2rem"} />
                </Flex>
            </CardFooter>
        </Card>
    )
}