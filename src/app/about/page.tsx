import Title from "@/components/Title";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { OurTestimoni } from "../page";

export default function About() {
  return (
    <div>
      <Image boxSize="full" src="hero-about.png" alt="Dan Abramov" />
      <Text
        fontWeight={"semibold"}
        textAlign={"center"}
        backgroundColor={"white"}
        className="relative -mt-[10%] lg:w-8/12 w-auto lg:mx-auto lg:mx-20 mx-10 px-8 py-10 lg:mb-52 mb-32 border-2 border--primary lg:text-3xl text-xl"
      >
        XYZ Company is a company that focuses on technological innovation and
        superior service. We are committed to providing industry-leading
        solutions and serving customers with unmatched excellence.
      </Text>
      <div className="lg:flex justify-center lg:mx-20 mx-10">
        <div className="vision flex-1">
          <Box
            fontWeight={"semibold"}
            textAlign={"justify"}
            backgroundColor={"white"}
            className="w-full lg:px-20 px-10 py-10 border-2 border--primary lg:text-3xl text-xl"
          >
            <Title title="Vision" />
            <Text className="mt-16">
              At XYZ Company, our vision is to become a global leader in
              innovation, providing groundbreaking solutions that transform
              industries and enrich lives. We aspire to push the boundaries of
              what's possible, driving positive change and shaping a brighter
              future for generations to come.
            </Text>
          </Box>
          <Image
            className="w-full my-10 lg:inline-block hidden"
            src="mision.png"
            alt="Dan Abramov"
          />
        </div>
        <div className="mision flex-1 lg:mt-0 mt-16">
          <Image
            className="h-auto w-auto my-10 lg:inline-block hidden"
            src="vision.png"
            alt="Dan Abramov"
          />
          <Box
            fontWeight={"semibold"}
            textAlign={"justify"}
            backgroundColor={"white"}
            className="w-full lg:px-20 px-10 py-10 lg:pb-36 border-2 border--primary lg:text-3xl text-xl"
          >
            <Title title="Mission" />
            <Text className="mt-16">
              At XYZ Company, we empower through technology and exceptional
              service. We build lasting relationships based on trust, integrity,
              and innovation. Striving for excellence, we set new standards in
              quality and reliability.
            </Text>
          </Box>
        </div>
      </div>
      <div className="our-culture mt-52 text-start lg:mx-20 mx-10 mb-52">
        <div className="w-fit mb-6">
          <Title title="Our Culture" />
        </div>
        <div className="lg:flex justify-between mt-10">
          <ul className="list-disc text-2xl font-normal space-y-4 ml-8">
            <li className="pl-2 w-fit">
              <p>Collaboration</p>
              <hr className="-mx-10 -mt-3 h-3 bg-primary opacity-30 rounded-full" />
            </li>
            <li className="pl-2 w-fit">
              <p>Integrity</p>
              <hr className="-mx-10 -mt-3 h-3 bg-primary opacity-30 rounded-full" />
            </li>
            <li className="pl-2 w-fit">
              <p>Excellence</p>
              <hr className="-mx-10 -mt-3 h-3 bg-primary opacity-30 rounded-full" />
            </li>
          </ul>
          <div className="text-xl lg:ml-32 lg:mt-0 mt-10 text-justify">
            At XYZ Company, collaboration, integrity, and excellence are our
            cornerstones. We prioritize open communication, celebrate diversity,
            and foster an environment where creativity thrives. We're more than
            colleagues; we're a family united by our passion for innovation and
            our commitment to making a difference. Join us and experience a
            workplace where your talents are valued, and you're empowered to
            succeed.
          </div>
        </div>
      </div>
      <div className="our-teams mb-52">
        <div className="w-fit mb-6 lg:mx-20 mx-10">
          <Title title="Our Teams" />
        </div>
        <div className="lg:grid flex flex-col items-center lg:items-stretch lg:grid-rows-2  grid-flow-col gap-1">
          <OurTestimoni
            testimoni="XYZ Company's products are top-notch, and their team delivers excellence every time. Highly recommended!"
            name="- Sarah (Sofware Developer)"
          />
          <OurTestimoni
            testimoni="Impressed by XYZ Company's professionalism and efficiency. They truly understand our needs."
            name="- John (Electric Technician)"
          />
          <OurTestimoni
            testimoni="The quality of service provided by XYZ Company is unmatched. Couldn't be happier!"
            name="- Jack (IoT Engineer)"
          />
          <OurTestimoni
            testimoni="XYZ Company has revolutionized our industry with their cutting-edge solutions. A true game-changer."
            name="- Ines (Backend Developer)"
          />
          <OurTestimoni
            testimoni="From start to finish, XYZ Company exceeded our expectations. Incredible attention to detail."
            name="- Max (Desain Interior)"
          />
          <OurTestimoni
            testimoni="Choosing XYZ Company was the best decision we made for our business. Exceptional results every time."
            name="- Rose(UI UX Desain)"
          />
        </div>
      </div>
    </div>
  );
}
