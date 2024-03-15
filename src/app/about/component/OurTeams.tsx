import OurTestimoni from "@/components/OurTestimonial";
import Title from "@/components/Title";
import React from "react";

export default function OurTeams() {
  return (
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
  );
}
