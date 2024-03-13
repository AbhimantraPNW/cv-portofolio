"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/Leetcode.PNG",
    category: "Javascript",
    name: "Leetcode",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "https://leetcode.com/Abhimantra_PNW/",
    github: "/",
  },
  {
    image: "/work/web-cv.PNG",
    category: "React JS",
    name: "Web CV",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "/",
    github: "/",
  },
  {
    image: "/work/todo-list.PNG",
    category: "Tailwind",
    name: "Todo-List App",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "/",
    github: "/",
  },
  {
    image: "/work/network-call.png",
    category: "Tailwind",
    name: "Network Call Register App",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center 
            xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items center
            xl:items-start"
        >
          <h2 className="section-title mb-4 mx-auto">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
                slidesPerView: 2
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0,4).map((project, index) => {
              return <SwiperSlide key={index}>
                        <ProjectCard project={project} />
                    </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
