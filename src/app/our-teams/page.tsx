"use client";
import { getDataTeams } from "@/api/teams";
import { UseAppDispatch, useAppSelector } from "@/lib/hooks";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { RootState } from "@/lib/store";
import { actionGetTeams } from "@/lib/features/teams/teamsSlice";

function CardTeam(props: any) {
  return (
    <Box
      className="group flex flex-col border--primary mx-8 my-8"
      width={300}
      height={440}
    >
      <Box
        className="w-full h-[300px] rounded-t-md"
        bgImage={props.img}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Text className="transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100 h-[294px] pt-[120px] px-4 text-white bg-black bg-opacity-70 font-bold text-center">
          “Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
          perferendis.”
        </Text>
      </Box>
      <div className="content border-t-2 border-primary pt-4 pl-4">
        <Heading fontWeight="medium" size="lg">
          {props.name}
        </Heading>
        <Text className="text-primary text-md">Position</Text>
      </div>
      <div className="w-0 h-0 border-s-[70px] border-transparent border-b-[64px] border-b-primary rounded-br-md self-end md:mt-0 mt-1"></div>
    </Box>
  );
}

export default function Teams() {
  const teams: any = useAppSelector(
    (state: RootState) => state.teamsSlice.teams
  );

  const dispatch = UseAppDispatch();
  const { data, error, isLoading } = useQuery("post", async () => {
    const res = await dispatch(actionGetTeams(16));
    return res;
  });

  return (
    <div>
      <Image boxSize="full" src="hero-teams.png" alt="Dan Abramov" />
      <div className="flex flex-wrap justify-center my-52">
        {teams.map((item: any, index: number) => {
          return (
            <CardTeam
              key={index}
              img={item.picture.large}
              name={item.name.first}
            />
          );
        })}
      </div>
    </div>
  );
}
