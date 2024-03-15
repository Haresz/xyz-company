"use client";
import React from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Hero from "@/components/Hero";
import CardTeam from "@/components/CardTeam";

export default function Teams() {
  const teams: any = useSelector((state: RootState) => state.teamsSlice.teams);
  return (
    <div>
      <Hero src="hero-teams.png" />
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
