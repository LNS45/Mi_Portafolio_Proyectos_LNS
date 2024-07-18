'use client'
import { useMenu } from "@/context/menuContext"
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader } from "@chakra-ui/react"
import { useState } from "react"

export default function MenuDrawer() {
    const contexto = useMenu();
    
    const [placement, setPlacement] = useState('left')

    return (
        <Drawer placement={placement} onClose={contexto.onClose} isOpen={contexto.isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}