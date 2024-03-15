"use client";
import React, { useRef } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import Title from "@/components/Title";
import { useQuery } from "react-query";
import OurTeams from "@/components/OurTeams";
import OurTestimoni from "@/components/OurTestimonial";
import { actionGetTeams } from "@/lib/features/teams/teamsSlice";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useAppStore } from "@/lib/hooks";

export default function Home() {
  const teams: any = useSelector((state: RootState) => state.teamsSlice.teams);
  const store = useAppStore();
  const initialized = useRef(false);
  const { data, error, isLoading } = useQuery("post", async () => {
    const res = await store.dispatch(actionGetTeams(16));
    initialized.current = true;
    return res;
  });

  return (
    <div>
      <Image
        boxSize="full"
        src="/hero.png"
        alt="Dan Abramov"
        fallback={<Box className="w-full h-96 bg-gray-400 animate-pulse" />}
      />
      <div>
        <Box className="flex justify-between items-center my-16 mx-20">
          <Text
            fontWeight={"semibold"}
            textAlign={"justify"}
            className="md:w-8/12 w-full px-8 py-10 border--primary md:text-3xl text-xl"
          >
            &quot;At XYZ Company, we&apos;ve been leading the industry since
            2005 with a dedicated team of experts in technology and customer
            service. Our culture is built on collaboration, creativity, and a
            passion for innovation.&quot;
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
        <Title title="Our Services" />
        <div className="flex md:flex-row flex-col md:justify-between items-center mt-32">
          <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-16">
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
              Experience the future of home automation with our cutting-edge
              smart home products.
            </Text>
          </Box>
          <Box className="flex flex-col text-center border--primary w-fit md:py-8 py-4 md:px-32 px-16 md:mt-0 mt-8">
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
              Streamline your operations with our comprehensive suite of
              business software solutions.
            </Text>
          </Box>
        </div>
      </div>
      <div className="our-teams mt-24">
        <Title title="Our Teams" />
        <Marquee className="our-teams flex gap-12 overflow-x-scroll pb-8 mt-16">
          {teams.map((item: any, index: number) => {
            console.log(index);
            if (index < 7) {
              return (
                <OurTeams
                  key={index}
                  img={item.picture.large}
                  name={`${item.name.first} ${item.name.first} ${item.name.last}`}
                />
              );
            }
          })}
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
          {!isLoading ? (
            teams
              .filter((item: any, index: number) => index < 6)
              .map((item: any, index: number) => {
                return (
                  <OurTestimoni
                    key={index}
                    testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo consectetur adipisci. Dignissimos, hic asperiores."
                    name={`- ${item.name.first}`}
                  />
                );
              })
          ) : (
            <Box
              minWidth={"400px"}
              maxWidth={"400px"}
              className=" bg-gray-400 animate-pulse"
            />
          )}
        </div>
        <Text className="text-center mt-32 mb-16" fontSize="5xl">
          “ Your satisfaction is our priority “
        </Text>
      </div>
    </div>
  );
}
