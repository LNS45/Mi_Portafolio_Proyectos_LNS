import { Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import theme from "@/theme/theme";


export default function Footer() {

    return (
        <Box position={"relative"} display={"flex"} h={"auto"} w={"100%"} alignItems={"center"} gap={"1rem"} backgroundColor={theme.colors.dark} boxShadow={"0px -.5px 10px black"} justifyContent={"space-around"}>
            <Image src={"/images/logo_text.png"} boxSize={"5rem"}/>
            <Text textAlign={"center"} textShadow={`1px 1px 2px black, 2px 2px 2px ${theme.colors.highlight}`} color={theme.colors.main}>Desarrollado por Lorenzo Chávez</Text>
            <Flex gap={"1rem"}>
                <Link href="https://github.com/LNS45" boxSize={"3rem"}>
                    <Image src="/images/logo_github.png"/>
                </Link>
                <Link href="https://www.linkedin.com/in/lorenzo-chavez-ingsc" boxSize={"3rem"}>
                    <Image src="/images/logo_linkedin.png"/>
                </Link>
            </Flex>
        </Box>
    )
}