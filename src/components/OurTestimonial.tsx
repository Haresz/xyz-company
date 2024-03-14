import { Box, Text } from "@chakra-ui/react";

export default function OurTestimoni(props: any) {
  return (
    <Box
      minWidth={"400px"}
      maxWidth={"400px"}
      className="flex justify-center items-center border--primary py-8 px-16 box-border mt-12 mx-12"
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
}
