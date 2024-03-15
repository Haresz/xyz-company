import React from "react";
import Title from "./Title";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function OurServises() {
  return (
    <div className="our-services mx-20">
      <Title title="Our Services" />
      <div className="flex lg:flex-row flex-col md:justify-between items-center mt-32">
        <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-8">
          <Image
            className="place-self-center"
            boxSize="300px"
            src="smart-home.png"
            alt="smart home"
          />
          <Heading className="text-primary my-6" as="h4" size="lg">
            Smart Home Solutions
          </Heading>
          <Text className="font-medium mb-8" w={"340px"} fontSize="lg">
            Experience the future of home automation with our cutting-edge smart
            home products.
          </Text>
        </Box>
        <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-8 md:mt-0 mt-8">
          <Image
            className="place-self-center"
            boxSize="300px"
            src="software.png"
            alt="sofware"
          />
          <Heading className="text-primary my-6" as="h4" size="lg">
            Business Software Suite
          </Heading>
          <Text className="font-medium mb-8" w={"340px"} fontSize="lg">
            Streamline your operations with our comprehensive suite of business
            software solutions.
          </Text>
        </Box>
      </div>
    </div>
  );
}
