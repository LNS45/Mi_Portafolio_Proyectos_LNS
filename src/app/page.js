import AcercaSection from "@/components/AcercaSection"
import HomeSection from "@/components/HomeSection"
import { Box } from "@chakra-ui/react"

//Pagina principal, para agregar mas rutas se requiere crear mas carpetas con su page.jsx en la carpeta app
export default function Page(){
    return (
        <Box w={"100%"} position={"relative"}>
            <HomeSection />
            <AcercaSection />
            <Box w={"50%"} h={"900px"}> </Box>
        </Box>
    )
}