import Hero from "@/components/Hero";
import OurTestimoni from "@/components/OurTestimonial";
import Title from "@/components/Title";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import VisionMision from "./component/VisionMision";
import OurCulture from "./component/OurCulture";
import OurTeams from "./component/OurTeams";

export default function About() {
  return (
    <div>
      <Hero src={"hero-about.png"} />
      <div className="mx-20">
        <Text
          fontWeight={"semibold"}
          textAlign={"center"}
          backgroundColor={"white"}
          className="relative -mt-[10%] lg:w-8/12 w-auto lg:px-8 px-4 mx-auto md:py-10 py-5 lg:mb-52 mb-32 border-2 border--primary lg:text-3xl text-lg"
        >
          XYZ Company is a company that focuses on technological innovation and
          superior service. We are committed to providing industry-leading
          solutions and serving customers with unmatched excellence.
        </Text>
      </div>
      <VisionMision />
      <OurCulture />
      <OurTeams />
    </div>
  );
}
