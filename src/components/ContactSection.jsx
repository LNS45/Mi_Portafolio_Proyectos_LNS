"use client"
import theme from "@/theme/theme";
import { Box, Flex, Text, useBreakpointValue, Button, Input, FormControl, Textarea, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactSection() {
    const paddingFlex = useBreakpointValue({ base: "1rem 2rem", md: "1rem", lg: "1rem 2rem"})
    const fontSize = useBreakpointValue({base: "1.5rem", md: ".8rem" , lg: "1.5rem", xl: "1.5rem"})
    const flexDirectionResponsive = useBreakpointValue({base: "column", md: "column", lg: "row",})
    const [isMessageSending, setIsMessageSending] = useState({
        active: "none",
        status: "info",
        text: ""
    })
    //Validacion del formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            asunto: "",
            email: '',
            mensaje: '',
        },
        onSubmit: values => {
            
            emailjs.send(
                "service_portafolio_lns",
                "template_ybe639j",
                values,
                "cAM7wowKf7mtKjjDb"
            ).then(
                () => {
                    setIsMessageSending({active: "block", status: "success", text: "Mensaje enviado correctamente!"})
                        setTimeout(() => {
                            setIsMessageSending({ active: "none", status: "info", text: "" });
                        }, 4000);
                },
                () => {
                    setIsMessageSending({active: "block", status: "error", text: "Hubo un error al enviar el mensaje."})
                        setTimeout(() => {
                            setIsMessageSending({ active: "none", status: "info", text: "" });
                        }, 4000);
                }
            )
        }
    });

    return (
        <Box position={"relative"} display={"flex"} h={"auto"} w={"100%"} flexDirection={"column"} p={paddingFlex} alignItems={"center"} gap={"1rem"} id="Contacto" backgroundColor={theme.colors.dark} marginTop={"3rem"} borderTopRadius={"4rem"} animation={"shadowColorAnimated 1s ease-in-out infinite"}>
            <Text as={"h2"} fontSize={"1.85rem"} color={theme.colors.highlight} textShadow={"2px 2px 1px black"}>Contacto</Text>
            <Box w={"100%"} h={"100%"} display={"flex"} flexDirection={flexDirectionResponsive} justifyContent={"start"} gap={"2rem"}>
                <Flex flexDirection={"column"} color={theme.colors.main} flex={"1"} gap={"1rem"}>
                    <Text as={"h5"} fontSize={fontSize}>Mándame un mensaje</Text>
                    <Text  color={theme.colors.main}>Email: lorenzochavezxd@gmail.com</Text>
                    <Text  color={theme.colors.main}>Whatsapp: +52 671 110 8595</Text>
                </Flex>
                <FormControl as={"form"} onSubmit={formik.handleSubmit} color={theme.colors.main} flex={"1"} backgroundColor={theme.colors.secondary} width={"100%"} h={"100%"} borderRadius={"1rem"} animation={"shadowColorAnimated 1s ease-in-out infinite"} p={"1rem"} gap={"1rem"} display={"flex"} flexDirection={"column"}>
                    <Input required name="nombre" onChange={formik.handleChange} value={formik.values.nombre} variant={"Filled"} placeholder="Nombre" backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} ></Input>
                    <Input required type="email" name="email" onChange={formik.handleChange} value={formik.values.email} variant={"Filled"} placeholder="Email" backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} ></Input>
                    <Input required type="asunto" name="asunto" onChange={formik.handleChange} value={formik.values.asunto} variant={"Filled"} placeholder="Asunto" backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} ></Input>
                    <Textarea required name="mensaje" minLength={"5"} onChange={formik.handleChange} value={formik.values.mensaje} variant={"Filled"} placeholder={"Mensaje"} backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"}></Textarea>
                    <Button type="submit" backgroundColor={theme.colors.dark} color={theme.colors.highlight} boxShadow={"2px 2px 5px black"} _hover={{boxShadow: `2px 2px 5px ${theme.colors.highlight}`}}>Enviar</Button>
                </FormControl>
            </Box>
            <Alert status={isMessageSending.status} display={isMessageSending.active} position={"absolute"} top={"50%"} w={"auto"} borderRadius={"1rem"}>
                <Flex alignItems={"center"} flexDirection={"column"}>
                    <AlertIcon />
                    <AlertTitle>{isMessageSending.text}</AlertTitle>
                </Flex>
            </Alert>
        </Box>
    )
}