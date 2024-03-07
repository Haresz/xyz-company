// app/providers.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
}
