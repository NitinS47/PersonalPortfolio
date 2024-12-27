"use client";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image"; // Import Image from next/image

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-black-100">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 px-6">
        {projects.map((item) => (
          <div
            className="flex items-center justify-center"
            key={item.id}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-black-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  {/* Replacing <img> with <Image> for optimization */}
                  <Image
                    src={item.img}
                    alt="thumbnail"
                    height={600}  // Adjust the height accordingly
                    width={600}   // Adjust the width accordingly
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => (window.location.href = item.link)}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Check Repository
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
