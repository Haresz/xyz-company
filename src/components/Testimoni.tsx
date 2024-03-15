import { Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import OurTestimoni from "./OurTestimonial";

export default function Testimoni(props: any) {
  return (
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
      <div className="lg:grid flex flex-col items-center lg:items-stretch lg:grid-rows-2 grid-flow-col gap-1">
        {props.datas
          .filter((item: any, index: number) => index < 6)
          .map((item: any, index: number) => {
            return (
              <OurTestimoni
                key={index}
                testimoni="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo consectetur adipisci. Dignissimos, hic asperiores."
                name={`- ${item.name.first}`}
              />
            );
          })}
      </div>
    </div>
  );
}
