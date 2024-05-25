// app/layout.tsx
import { fonts } from "./fonts";
import "./globals.css";

import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Providers from "./providers";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "xyz company",
  description: "A Frontend Developer Portfolio",
  icons: {
    icon: "",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={fonts.montserrat.variable}>
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Providers>
          <StoreProvider>
            <ChakraProvider>
              {children}
              <Footer />
            </ChakraProvider>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
