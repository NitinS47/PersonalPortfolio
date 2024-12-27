import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { companies, testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-20" id="testimonials">
      {/* Heading Section */}
      <h1 className="heading">
        Testimonials from{" "}
        <span className="text-black-100">Colleagues and Mentors</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-col items-center max-lg:mt-10">
        <AnimatedTestimonials testimonials={testimonials} />

        {/* Companies Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex items-center md:max-w-60 max-w-32 gap-2"
            >
              {/* Company Logo */}
              <Image
                src={img}
                alt={`${name} logo`}
                className="md:w-48 w-32 object-contain"
                width={192} // Specify width for better optimization
                height={128} // Specify height for better optimization
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
