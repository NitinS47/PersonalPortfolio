import React from "react";
import { workExperience } from "@/data";
import { Timeline } from "./ui/timeline";
import Image from "next/image"; // Import the Image component from next/image

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-black-100">work experience</span>
      </h1>

      {/* Content Section with bg-black-100 */}
      <div className="mt-16 bg-black-100 rounded-xl py-12">
          <Timeline
            data={workExperience.map(({ year, details }) => ({
              title: `${year}: ${details.title}`,
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    {details.desc}
                  </p>
                  {/* Replace <img> with <Image> from next/image */}
                  <Image
                    src={details.thumbnail}
                    alt={details.title}
                    className="h-32 w-32 rounded-lg object-cover shadow-md"
                    width={128} // Set the width of the image
                    height={128} // Set the height of the image
                    priority // Optionally add `priority` for images above the fold
                  />
                </div>
              ),
            }))}
          />
      </div>
    </div>
  );
};

export default Experience;
