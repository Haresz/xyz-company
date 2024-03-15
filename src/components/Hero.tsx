import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Hero(props: any) {
  return (
    <Image
      boxSize="full"
      src={props.src}
      alt="Dan Abramov"
      fallback={
        <Box className="w-full lg:h-96 h-64 bg-gray-400 animate-pulse" />
      }
    />
  );
}
