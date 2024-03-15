import Title from "@/components/Title";
import React from "react";

export default function OurCulture() {
  return (
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
          and foster an environment where creativity thrives. We&apos;re more
          than colleagues; we&apos;re a family united by our passion for
          innovation and our commitment to making a difference. Join us and
          experience a workplace where your talents are valued, and you&apos;re
          empowered to succeed.
        </div>
      </div>
    </div>
  );
}
