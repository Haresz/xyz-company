"use client";
import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Hero(props: any) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRendered(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {rendered ? (
        <Image
          boxSize="full"
          src={props.src}
          alt="Dan Abramov"
          fallback={
            <Box className="w-full lg:h-96 h-64 bg-gray-400 animate-pulse" />
          }
        />
      ) : (
        <Box className="w-full lg:h-96 h-64 bg-gray-400 animate-pulse" />
      )}
    </>
  );
}

// export const Hero = (props: any) =>
//   setTimeout(() => HeroRender(props.src), 1000);
