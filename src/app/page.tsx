"use client";
import React, { useEffect, useRef } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import Title from "@/components/Title";
import OurTeams from "@/components/OurTeams";
import { actionGetTeams } from "@/lib/features/teams/teamsSlice";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { useAppStore } from "@/lib/hooks";
import Testimoni from "@/components/Testimoni";
import OurServises from "@/components/OurServises";
import Hero from "@/components/Hero";

const IMAGE_SIZE = "16%";
const INITIAL_TEAM_COUNT = 7;

export default function Home() {
  const teams = useSelector((state: RootState) => state.teamsSlice.teams);
  const dispatch = useDispatch();
  const store = useAppStore();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      store.dispatch(actionGetTeams(16));
      initialized.current = true;
    }
  }, [dispatch]);

  return (
    <div>
      <Hero src={"hero.webp"} />
      <div>
        <Box className="flex justify-between items-center my-16 md:mx-20 mx-6">
          <Text
            fontWeight={"semibold"}
            textAlign={"justify"}
            className="md:w-8/12 w-full lg:px-8 px-4 mx-auto md:py-10 py-5 border--primary md:text-3xl text-md"
          >
            &quot;At XYZ Company, we&apos;ve been leading the industry since
            2005 with a dedicated team of experts in technology and customer
            service. Our culture is built on collaboration, creativity, and a
            passion for innovation.&quot;
          </Text>
          <Image
            className="hidden lg:inline-block"
            width={IMAGE_SIZE}
            src="founder.webp"
            alt="Dan Abramov"
          />
        </Box>
      </div>
      <OurServises />
      <div className="our-teams mt-24">
        <Title title="Our Teams" />
        <Marquee className="our-teams flex gap-12 overflow-x-scroll pb-8 mt-16">
          {teams
            ?.slice(0, INITIAL_TEAM_COUNT)
            .map((item: any, index: number) => (
              <OurTeams
                key={index}
                img={item.picture.large}
                name={`${item.name.first} ${item.name.last}`}
              />
            ))}
        </Marquee>
        <Testimoni datas={teams} />
        <Text
          className="text-center mt-32 mb-16"
          fontSize={{ lg: "5xl", base: "3xl" }}
        >
          “ Your satisfaction is our priority “
        </Text>
      </div>
    </div>
  );
}
