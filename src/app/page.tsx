import React from "react";
import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const OurTeams = () => {
  return (
    <Box
      minWidth={"800px"}
      maxWidth={"800px"}
      className="flex border--primary py-8 px-12 box-border mx-12"
    >
      <Image width={"150px"} src="founder.png" alt="Dan Abramov" />
      <div className="flex-col ml-10">
        <Heading className="text-primary my-6" as="h4" size="lg">
          Vea Lenn
        </Heading>
        <Text className="font-medium mb-8 text-justify" fontSize="lg">
          At XYZ Company, we have a skilled and passionate team dedicated to
          innovation and excellence. Each member brings unique talents,
          fostering creativity and ingenuity in tackling challenges.
        </Text>
        <Text className="text-primary font-medium mb-8 text-end" fontSize="lg">
          - CEO and Founder
        </Text>
      </div>
    </Box>
  );
};

const OurTestimoni = (props: any) => {
  return (
    <Box
      minWidth={"400px"}
      maxWidth={"400px"}
      className="flex border--primary py-8 px-16 box-border mt-12 mx-12"
    >
      <div className="flex-col">
        <Text className="font-medium mb-2 text-justify" fontSize="md">
          {props.testimoni}
        </Text>
        <Text className="text-primary font-medium text-end" fontSize="md">
          {props.name}
        </Text>
      </div>
    </Box>
  );
};

export default function Home() {
  return (
    <div>
      <Image boxSize="full" src="hero.png" alt="Dan Abramov" />
      <div>
        <Box className="flex justify-between items-center my-16 mx-20">
          <Text
            fontWeight={"semibold"}
            textAlign={"justify"}
            className="md:w-8/12 w-full px-8 py-10 border--primary md:text-3xl text-xl"
          >
            "At XYZ Company, we've been leading the industry since 2005 with a
            dedicated team of experts in technology and customer service. Our
            culture is built on collaboration, creativity, and a passion for
            innovation."
          </Text>
          <Image
            className="hidden md:inline-block"
            width={"16%"}
            src="founder.png"
            alt="Dan Abramov"
          />
        </Box>
      </div>
      <div className="our-services mx-20">
        <Text className="text-center underline md:text-5xl text-3xl">
          Our Services
        </Text>
        <div className="flex md:flex-row flex-col md:justify-between items-center mt-32">
          <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-16">
            <Image
              className="place-self-center"
              boxSize="300px"
              src="smart-home.png"
            />
            <Heading className="text-primary my-6" as="h4" size="lg">
              Smart Home Solutions
            </Heading>
            <Text className="font-medium mb-8" w={"340px"} fontSize="lg">
              Experience the future of home automation with our cutting-edge
              smart home products.
            </Text>
          </Box>
          <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-16 md:mt-0 mt-8">
            <Image
              className="place-self-center"
              boxSize="300px"
              src="software.png"
            />
            <Heading className="text-primary my-6" as="h4" size="lg">
              Business Software Suite
            </Heading>
            <Text className="font-medium mb-8" w={"340px"} fontSize="lg">
              Streamline your operations with our comprehensive suite of
              business software solutions.
            </Text>
          </Box>
        </div>
      </div>
      <div className="our-teams">
        <Text className="text-center underline mt-24 mb-16" fontSize="5xl">
          Our Teams
        </Text>
        <Marquee className="our-teams flex gap-12 overflow-x-scroll pb-8">
          <OurTeams />
          <OurTeams />
          <OurTeams />
        </Marquee>
        <div className="testimoni">
          <Marquee
            className="bg-primary py-4 text-white text-xl font-semibold mt-40"
            direction="right"
          >
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
            <Text className="mx-4">Testimonial</Text>
          </Marquee>
        </div>
        <div className="md:grid flex flex-col items-center md:items-stretch md:grid-rows-2   grid-flow-col gap-1">
          <OurTestimoni
            testimoni="XYZ Company's products are top-notch, and their team delivers excellence every time. Highly recommended!"
            name="- Sarah"
          />
          <OurTestimoni
            testimoni="Impressed by XYZ Company's professionalism and efficiency. They truly understand our needs."
            name="- John"
          />
          <OurTestimoni
            testimoni="The quality of service provided by XYZ Company is unmatched. Couldn't be happier!"
            name="- Jack"
          />
          <OurTestimoni
            testimoni="XYZ Company has revolutionized our industry with their cutting-edge solutions. A true game-changer."
            name="- Ines"
          />
          <OurTestimoni
            testimoni="From start to finish, XYZ Company exceeded our expectations. Incredible attention to detail."
            name="- Max"
          />
          <OurTestimoni
            testimoni="Choosing XYZ Company was the best decision we made for our business. Exceptional results every time."
            name="- Rose"
          />
        </div>
        <Text className="text-center mt-32 mb-16" fontSize="5xl">
          “ Your satisfaction is our priority “
        </Text>
      </div>
    </div>
  );
}
