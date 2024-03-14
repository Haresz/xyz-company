import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function OurTeams(props: any) {
  return (
    <Box
      minWidth={"800px"}
      maxWidth={"800px"}
      className="flex items-center border--primary py-6 px-12 box-border mx-12"
    >
      <Image
        width={"150px"}
        height={"150px"}
        src={props.img}
        alt="Dan Abramov"
      />
      <div className="flex-col ml-10">
        <Heading className="text-primary my-6" as="h4" size="lg">
          {props.name}
        </Heading>
        <Text className="font-medium mb-8 text-justify" fontSize="lg">
          At XYZ Company, we have a skilled and passionate team dedicated to
          innovation and excellence. Each member brings unique talents,
          fostering creativity and ingenuity in tackling challenges.
        </Text>
        <Text className="text-primary font-medium mb-8 text-end" fontSize="lg">
          - Position
        </Text>
      </div>
    </Box>
  );
}
