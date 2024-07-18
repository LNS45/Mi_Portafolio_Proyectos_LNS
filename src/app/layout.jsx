import "@/styles/reset.css"
import { Providers } from "./provider";
import NavBar from "@/components/NavBar";
import MenuDrawer from "@/components/MenuDrawer";
import theme from "@/theme/theme";
import {Open_Sans} from "next/font/google";
import { MenuProvider } from "@/context/menuContext";

const opensans = Open_Sans({subsets: ["latin"]});
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
    fontFamily: opensans.className
  }

  return (
    <html lang="es">
      <body style={bodyStyle}>
        <Providers>
          <MenuProvider>
            <NavBar />
            <MenuDrawer />
          </MenuProvider>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

