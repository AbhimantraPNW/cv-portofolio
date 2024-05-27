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
    image: "/work/web-cv.PNG",
    category: "Javascript",
    name: "Web CV",
    description:
      "This project is a visually captivating online portfolio that showcases my skills and experience in web development. It presents my professional journey in an engaging and memorable way",
    link: "/",
    github: "/",
  },
  {
    image: "/work/company_profile.PNG",
    category: "Typescript",
    name: "Company Profile",
    description:
      "This project exemplifies my dedication as a web developer to blend traditional techniques with contemporary designs. Dive into company's story and user-friendly website experience.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/blog.PNG",
    category: "Typescript",
    name: "Personal Blog",
    description:
      "Embark on a journey into the world of web development through my personal blog, where I share insights, experiences, and discoveries. Join me in exploring my blog",
    link: "/",
    github: "/",
  },
  {
    image: "/work/mini_project.PNG",
    category: "Typescript",
    name: "Website Event Ticketing",
    description:
      "This event ticketing website is a mini project showcasing my skills in web development. Designed to provide a seamless ticket purchasing experience and real-time event updates.",
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
          <p className="subtitle mb-8">My projects until the present</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
