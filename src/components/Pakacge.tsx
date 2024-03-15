import { Text, Heading } from "@chakra-ui/react";

export default function Pakacge(props: any) {
  return (
    <div className="border--primary sm:w-6/12 lg:w-[30%] w-full  py-12 px-4">
      <Text className="lg:text-3xl text-xl text-primary text-center font-bold">
        {props.title}
      </Text>
      <ul className="list-disc ml-12 lg:text-xl font-medium my-16">
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
      </ul>
      <div className="flex items-end justify-center">
        <Heading fontWeight="medium" textAlign="center" as="h2" size="4xl">
          {props.price}
        </Heading>
        <Text fontSize="3xl">{props.month}</Text>
      </div>
      <Text fontWeight="bold" fontSize="xl" textColor="red">
        {props.custom}
      </Text>
    </div>
  );
}
