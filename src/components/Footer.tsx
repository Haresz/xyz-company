import React from "react";
import { Image, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col items-baseline justify-between md:items-center bg-primary text-white py-16 px-20">
      <Text fontWeight={"bold"} fontSize="5xl">
        XYZ Company
      </Text>
      <div className="flex flex-col md:mt-0 mt-20">
        <Text fontWeight={"bold"} fontSize="lg">
          Our Services
        </Text>
        <Text my={4} fontSize="lg">
          Smart Home Solution
        </Text>
        <Text fontSize="lg">Businise Sofware Suite</Text>
        <div className="flex justify-between mt-4 ">
          <Image width={"30px"} src="facebook.png" alt="Dan Abramov" />
          <Image width={"30px"} src="instagram.png" alt="Dan Abramov" />
          <Image width={"30px"} src="linkin.png" alt="Dan Abramov" />
        </div>
      </div>
      <div className="flex flex-col self-start md:mt-0 mt-20">
        <Text fontWeight={"bold"} fontSize="lg">
          XYZ Company
        </Text>
        <Text mt={4} fontSize="lg">
          xyz@gmail.com
        </Text>
        <Text fontSize="lg">+62 822 2538 4814</Text>
        <Text mt={4} fontSize="lg">
          Jepara, Central Java, Indonesia
        </Text>
      </div>
    </footer>
  );
}
