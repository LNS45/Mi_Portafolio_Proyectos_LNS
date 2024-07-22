"use client"
import { useBreakpointValue, Box, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import theme from "@/theme/theme"

export default function SkillsSection(){
    const paddingFlex = useBreakpointValue({ base: "1rem", md: "0 5rem", lg: "0 5rem"})
    const sizeResponsive = useBreakpointValue({ base: "16rem", md: "20rem", lg: "25em", xl:"25rem"})
    const marginTopResponsive = useBreakpointValue({ base: "1rem", md : "1rem", lg : "5rem", xl : "5rem" })
    const flexDirection = useBreakpointValue({ base: "column", md: 'column', lg: "column", xl: "column"})
    const justifyContentResponsive = useBreakpointValue({ base: "center", md: 'space-around', lg: "space-between", xl: "space-between"})
    const skills = [
        {
            id: "1",
            tech: "Javascript",
            icon: "",
        },
        {
            id: "2",
            tech: "React JS",
            icon: "",
        },
        {
            id: "3",
            tech: "Java",
            icon: "",
        },
        {
            id: "4",
            tech: "MySQL",
            icon: "",
        },
        {
            id: "5",
            tech: "CSS3",
            icon: "",
        },
        {
            id: "6",
            tech: "SQLite",
            icon: "",
        },
        {
            id: "7",
            tech: "Android Studio",
            icon: "",
        },
        {
            id: "8",
            tech: "MongoDB",
            icon: "",
        },
        {
            id: "9",
            tech: "Figma",
            icon: "",
        },
        {
            id: "10",
            tech: "Notion",
            icon: "",
        },
        {
            id: "11",
            tech: "Next JS",
            icon: "",
        },
    ];
    
    return (
        <Box display={"flex"} h={"100vh"} w={"100%"} flexDirection={flexDirection} p={paddingFlex} alignItems={"center"} justifyContent={justifyContentResponsive} id="Skills">
            <Text marginTop={marginTopResponsive} as={"h2"} fontSize={"2rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Skills</Text>
            <UnorderedList styleType={"none"} display={"flex"}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
        </Box>
    )
};