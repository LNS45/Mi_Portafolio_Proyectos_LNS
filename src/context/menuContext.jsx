'use client';
import { createContext, useContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const MenuContext = createContext();

// Proveedor del contexto
export function MenuProvider({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    //Manejo de boton de menu en movil
    const [isMenuActive, setMenuActive] = useState(false);

    return (
        <MenuContext.Provider value={{ isOpen, onOpen, onClose, isMenuActive, setMenuActive }}>
            {children}
        </MenuContext.Provider>
    );
}
//Hook para uso mas sencillo del contexto
export function useMenu(){
    const context = useContext(MenuContext);
    return context;
};