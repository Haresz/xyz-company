import React from "react";
import { Text } from "@chakra-ui/react";

export default function Title(props: { title: string }) {
  return (
    <Text className="text-center underline md:text-5xl text-3xl">
      {props.title}
    </Text>
  );
}
