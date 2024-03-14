// app/layout.tsx
"use client";
import { fonts } from "./fonts";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Providers from "./providers";
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={fonts.montserrat.variable}>
      <body>
        <Providers>
          <StoreProvider>
            <ChakraProvider>
              <Navbar />
              {children}
              <Footer />
            </ChakraProvider>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
