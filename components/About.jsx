import Devimg from "./Devimg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Abhimantra PNW",
  },
  {
    icon: <MailIcon size={20} />,
    text: "abhimantrapnw04@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "[+62]813-2886-9619",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 18 Desember 1994",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Mining Engineer",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Ledok Tukangan st. Yogyakarta",
  },
];

const qualificionData = [
  {
    title: "Education",
    data: [
      {
        University: "UPN Veteran Yogyakarta",
        Qualification: "Bachelor of Mining",
        Years: "2013 - 2019",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "CV. Jawara Digital Art",
        Role: "Marketing Staff",
        Years: "2019",
      },
      {
        Company: "Patera Pottery",
        Role: "Marketing Staff",
        Years: "2020 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 justify-center relative">
            <Devimg
              containerStyles=" w-[400px] h-[470px]
             bg-no-repeat right-[110px] relative"
              imgSrc="/about/hello-kid.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 xl:max-w-[520px] 
                    xl:border dark:border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Little Things About Me</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Do you have funny story you could share with me?
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Indonesia, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifitcation */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificionData, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificionData, "Experience").data.map(
                            (item, index) => {
                              const { Company, Role, Years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary
                                    absolute -left-[5px] group-hover:translate-y-[84px] transition-all
                                    duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {Company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {Role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {Years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificionData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificionData, "Education").data.map(
                            (item, index) => {
                              const { University, Qualification, Years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary
                                    absolute -left-[5px] group-hover:translate-y-[84px] transition-all
                                    duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {University}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {Qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {Years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto
                              xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "Tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;