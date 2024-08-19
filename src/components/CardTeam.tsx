import { Box, Text, Heading } from '@chakra-ui/react';

export default function CardTeam(props: any) {
  return (
    <Box
      className="group flex flex-col border--primary mx-8 my-8"
      width={300}
      height={440}
    >
      <Box
        className="w-full h-[300px] rounded-t-md"
        bgImage={props.img}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
      >
        <Text className="transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-100 h-[294px] pt-[120px] px-4 text-white bg-black bg-opacity-70 font-bold text-center">
          {props.description}
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
