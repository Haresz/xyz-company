// app/layout.tsx
"use client";
import { fonts } from "./fonts";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={fonts.montserrat.variable}>
      <body>
        <ChakraProvider>
          <Navbar />
          {children} <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
