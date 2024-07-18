'use client';
import { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

const MenuContext = createContext();

// Proveedor del contexto
export function MenuProvider({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <MenuContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </MenuContext.Provider>
    );
}
//Hook para uso mas sencillo del contexto
export function useMenu(){
    const context = useContext(MenuContext);
    return context;
};