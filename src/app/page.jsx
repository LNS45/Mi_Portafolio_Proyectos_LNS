import AcercaSection from "@/components/AcercaSection"
import HomeSection from "@/components/HomeSection"
import { Box, Divider } from "@chakra-ui/react"
import "@/components/animations.css"
import SkillsSection from "@/components/SkillsSection"

//Pagina principal, para agregar mas rutas se requiere crear mas carpetas con su page.jsx en la carpeta app
export default function Page(){
    return (
        <Box w={"100%"} position={"relative"}>
            <HomeSection />
            <Divider color={"black"}/>
            <AcercaSection/>
            <Divider color={"black"}/>
            <SkillsSection />
        </Box>
    )
}