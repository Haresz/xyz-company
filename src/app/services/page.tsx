import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import Hero from "@/components/Hero";
import Pakacge from "@/components/Pakacge";

export default function Srvices() {
  return (
    <div>
      <Hero src="hero-services.webp" />
      <div className="lg:mx-20 mx-8 mt-20">
        <div className="lg:flex">
          <Image
            width={{ lg: "480px", base: "300px" }}
            src="smart-home.webp"
            alt="smart home"
            loading="lazy"
          />
          <div className="desc text-primary text-justify lg:ml-20">
            <div className="w-fit font-bold">
              <Title title="Smart Home Solutions" />
            </div>
            <Text
              style={{ lineHeight: 1.5 }}
              className="lg:text-3xl text-xl text-black mt-12"
            >
              Smart Home is a service solution for controlling various devices
              such as TVs, air conditioners, lights, curtains, as well as
              security sensors such as IP CCTV, smoke detectors, LPG detectors,
              and other devices through an application, allowing users to
              monitor and customize scheduling, use timers, and interact between
              sensors/devices in real-time.
            </Text>
          </div>
        </div>
        <div className="w-fit mt-20">
          <Title title="Benefit" />
        </div>
        <ol className="list-decimal lg:text-3xl text-xl text-justify font-normal space-y-4 ml-8 mt-12">
          <li>
            Integrated security that can provide notifications to the owner and
            security personnel if anomalies are detected.
          </li>
          <li>
            Can control multiple sensors simultaneously based on predetermined
            conditions.
          </li>
          <li>
            Can be accessed anywhere and anytime via a smartphone even when the
            user is not in the same network.
          </li>
        </ol>
        <div className="flex justify-center gap-16 flex-wrap pakacge-home-services mt-52 mb-52">
          <Pakacge
            title={"Basic Smart Home Starter Pack"}
            list1={"Smart Bulb Starter Kit"}
            list2={"Smart Plug"}
            list3={"Smart Speaker"}
            price={"$199.99"}
          />
          <Pakacge
            title={"Enhanced Home Security Bundle"}
            list1={"Smart Security Camera"}
            list2={"Door/Window Sensors"}
            list3={"Smart Doorbell"}
            price={"$349.99"}
          />
          <Pakacge
            title={"Comfort & Convenience Package"}
            list1={"Smart Thermostat"}
            list2={"Smart Lock"}
            list3={"Smart Garage Door Opener"}
            price={"$299.99"}
          />
          <Pakacge
            title={"Family Entertainment Bundle"}
            list1={"Smart TV"}
            list2={"Streaming Device"}
            list3={"Smart Soundbar"}
            price={"$449.99"}
          />
          <div className="border--primary sm:w-6/12 lg:w-[30%] w-full pt-12 px-4 pb-8 text-white bg-primary">
            <Text className="lg:text-3xl text-xl  text-center font-bold">
              Complete Package
            </Text>
            <ul className="list-disc ml-12 lg:text-xl font-medium my-16">
              <li>All-In-One Smart Home Hub</li>
              <li>Smart Home Assistant</li>
              <li>Smart Sensorsr</li>
            </ul>
            <Heading
              textDecoration="line-through"
              fontWeight="medium"
              textAlign="start"
              as="h2"
              size="2xl"
            >
              $799.99
            </Heading>
            <Heading fontWeight="medium" textAlign="end" as="h2" size="4xl">
              $599.99
            </Heading>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mx-8 mb-52">
        <div className="lg:flex">
          <Image
            alt="software"
            boxSize={{ lg: "480px", base: "300px" }}
            src="software.webp"
            loading="eager"
          />
          <div className="desc text-primary text-justify lg:ml-20">
            <div className="w-fit font-bold">
              <Title title="Business Software Suite" />
            </div>
            <Text
              style={{ lineHeight: 1.5 }}
              className="lg:text-3xl text-xl text-black mt-12"
            >
              Business Software Suite is a comprehensive package of software
              solutions designed to streamline and optimize various aspects of
              business operations, providing a one-stop solution for businesses
              to enhance efficiency, productivity, and profitability. It
              includes a range of applications tailored to meet the diverse
              needs of modern businesses, such as:
            </Text>
          </div>
        </div>
        <ol
          style={{ lineHeight: 1.5 }}
          className="list-decimal lg:text-3xl text-xl text-justify font-normal space-y-4 ml-8 mt-12"
        >
          <li>
            Accounting Software: Manage financial transactions, track expenses,
            generate invoices, and prepare financial reports with ease.
          </li>
          <li>
            Customer Relationship Management (CRM) Software: Organize customer
            data, track interactions, manage leads, and improve customer
            relationships for enhanced sales and service.
          </li>
          <li>
            Human Resource Management (HRM) Software: Streamline HR processes
            such as payroll management, employee attendance tracking,
            performance evaluation, and recruitment.
          </li>
          <li>
            Project Management Software: Plan, execute, and monitor projects
            efficiently by assigning tasks, setting deadlines, and tracking
            progress in real-time.
          </li>
          <li>
            Enterprise Resource Planning (ERP) Software: Integrate core business
            processes such as finance, inventory management, procurement, and
            production planning for improved efficiency and collaboration across
            departments.
          </li>
          <li>
            Communication and Collaboration Tools: Facilitate seamless
            communication and collaboration among team members through email,
            instant messaging, video conferencing, and document sharing.
          </li>
        </ol>
        <div className="flex justify-center gap-16 flex-wrap pakacge-home-services mt-52 mb-52">
          <Pakacge
            title={"Starter Business Suite"}
            list1={"Accounting Software"}
            list2={"CRM Software"}
            list3={"Communication Tools"}
            price={"$99.99"}
            month="/Month"
          />
          <Pakacge
            title={"Professional Business Suite"}
            list1={"Accounting Software"}
            list2={"CRM Software"}
            list3={"HRM Software"}
            price={"$249.99"}
            month="/Month"
          />
          <Pakacge
            title={"Professional Business Suite"}
            list1={"Accounting Software"}
            list2={"CRM Software"}
            list3={"HRM Software"}
            custom="Price: Tailored to fit your business needs."
          />
        </div>
      </div>
    </div>
  );
}
