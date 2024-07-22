"use client"
import { useBreakpointValue, Box, Text, UnorderedList, ListItem, Image } from "@chakra-ui/react"
import theme from "@/theme/theme"

export default function SkillsSection(){
    const paddingFlex = useBreakpointValue({ base: "1rem", md: "0 5rem", lg: "0 5rem"})
    const sizeResponsive = useBreakpointValue({ base: "16rem", md: "20rem", lg: "25em", xl:"25rem"})
    const marginTopResponsive = useBreakpointValue({ base: "1rem", md : "1rem", lg : "5rem", xl : "5rem" })
    const flexDirection = useBreakpointValue({ base: "column", md: 'column', lg: "column", xl: "column"})
    const justifyContentResponsive = useBreakpointValue({ base: "space-around", md: 'space-around', lg: "space-between", xl: "space-between"})
    const skillIconResponsive = useBreakpointValue({ base: "5rem", md: "5rem", lg: "3rem", xl: "3rem"})
    const skills = [
        {
            id: "1",
            tech: "Javascript",
            icon: "/images/icons/icon_js.png",
        },
        {
            id: "2",
            tech: "React JS",
            icon: "/images/icons/icon_react.png",
        },
        {
            id: "3",
            tech: "Java",
            icon: "/images/icons/icon_java.png",
        },
        {
            id: "4",
            tech: "MySQL",
            icon: "/images/icons/icon_mysql.png",
        },
        {
            id: "5",
            tech: "CSS3",
            icon: "/images/icons/icon_css.png",
        },
        {
            id: "6",
            tech: "SQLite",
            icon: "/images/icons/icon_sqlite.png",
        },
        {
            id: "7",
            tech: "Android Studio",
            icon: "/images/icons/icon_android.png",
        },
        {
            id: "8",
            tech: "MongoDB",
            icon: "/images/icons/icon_mongo.png",
        },
        {
            id: "9",
            tech: "Figma",
            icon: "/images/icons/icon_figma.png",
        },
        {
            id: "10",
            tech: "Notion",
            icon: "/images/icons/icon_notion.png",
        },

    ];
    
    return (
        <Box display={"flex"} h={"100vh"} w={"100%"} flexDirection={flexDirection} p={paddingFlex} alignItems={"center"}  id="Skills" gap={"1rem"}>
            <Text marginTop={marginTopResponsive} as={"h2"} fontSize={"2rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Skills</Text>
            <UnorderedList styleType={"none"} display={"flex"} justifyContent={"normal"} flexWrap={"wrap"} gap={"1rem"}>
                {skills.map((skill) => (
                    <ListItem key={skill.id} w={"calc(100vh/5)"} h={"calc(100vh/5)"} backgroundColor={theme.colors.dark} animation={"shadowColorAnimated 1s ease-in-out infinite"} borderRadius={"2rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Image src={skill.icon} w={skillIconResponsive} h={skillIconResponsive}/>
                        <Text fontSize={".8rem"} color={theme.colors.main}>{skill.tech}</Text>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    )
};