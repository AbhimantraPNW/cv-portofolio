"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const hobbyData = [
  {
    avatar: "/hobby/run.png",
    name: "Running",
    review:
      "lorem lorem ipsum ipsum ipsum dolor sit amet constectur adisipicing elit",
  },
  {
    avatar: "/hobby/cycling.png",
    name: "Cycling",
    review:
      "lorem lorem ipsum ipsum ipsum dolor sit amet constectur adisipicing elit",
  },
  {
    avatar: "/hobby/futsal-soccer.png",
    name: "Futsal Soccer",
    review:
      "lorem lorem ipsum ipsum ipsum dolor sit amet constectur adisipicing elit",
  },
];

const Hobby = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Hobby</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {hobbyData.map((name, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-2 min-h-[300px] ">
                  <CardHeader className='p-0 mb-6 justify-center items-center'>
                    <div className="items-center gap-x-4">
                        {/* image */}
                        <Image
                        src={name.avatar}
                        width={130}
                        height={130}
                        alt=""
                        priority
                        />
                        {/* name */}
                        <div className="flex flex-col justify-center items-center">
                            <CardTitle className='mt-4'>{name.name}</CardTitle>
                        </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">{name.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hobby;
