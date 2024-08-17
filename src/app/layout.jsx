import "@/styles/reset.css"
import { Providers } from "./provider";
import NavBar from "@/components/NavBar";
import MenuDrawer from "@/components/MenuDrawer";
import theme from "@/theme/theme";
import {IBM_Plex_Mono} from "next/font/google";
import { MenuProvider } from "@/context/menuContext";
import Footer from "@/components/Footer";

const font = IBM_Plex_Mono({subsets: ["latin"], weight: ["100"]});
export const metadata = {
  title: "Portafolio || LNSolutions",
  description: "Generated by Next.js",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};
//Navegacion principal del sitio web
export default function RootLayout({ children }) {

  const bodyStyle = {
    backgroundColor: `${theme.colors.secondary}`,
    fontFamily: theme.fonts.main
  }

  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body style={bodyStyle}>
        <Providers>
          <MenuProvider>
            <NavBar />
            <MenuDrawer />
          </MenuProvider>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

