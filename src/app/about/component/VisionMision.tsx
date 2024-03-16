import Title from "@/components/Title";
import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function VisionMision() {
  return (
    <div className="lg:flex justify-center lg:mx-20 mx-10">
      <div className="vision flex-1">
        <Box
          fontWeight={"semibold"}
          textAlign={"justify"}
          backgroundColor={"white"}
          className="w-full lg:px-20 px-10 py-10 border-2 border--primary lg:text-3xl text-xl"
        >
          <Title title="Vision" />
          <Text className="mt-16">
            At XYZ Company, our vision is to become a global leader in
            innovation, providing groundbreaking solutions that transform
            industries and enrich lives. We aspire to push the boundaries of
            what&apos;s possible, driving positive change and shaping a brighter
            future for generations to come.
          </Text>
        </Box>
        <Image
          className="w-full my-10 lg:inline-block hidden"
          src="mision.webp"
          alt="Dan Abramov"
          fallback={<Box className="h-auto w-auto bg-gray-400 animate-pulse" />}
        />
      </div>
      <div className="mision flex-1 lg:mt-0 mt-16">
        <Image
          className="h-auto w-auto my-10 lg:inline-block hidden"
          src="vision.webp"
          alt="Dan Abramov"
          fallback={<Box className="h-auto w-auto bg-gray-400 animate-pulse" />}
        />
        <Box
          fontWeight={"semibold"}
          textAlign={"justify"}
          backgroundColor={"white"}
          className="w-full lg:px-20 px-10 py-10 lg:pb-36 border-2 border--primary lg:text-3xl text-xl"
        >
          <Title title="Mission" />
          <Text className="mt-16">
            At XYZ Company, we empower through technology and exceptional
            service. We build lasting relationships based on trust, integrity,
            and innovation. Striving for excellence, we set new standards in
            quality and reliability.
          </Text>
        </Box>
      </div>
    </div>
  );
}
