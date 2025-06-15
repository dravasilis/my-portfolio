import { useEffect, useRef } from "react";
import { Timeline } from "../../models/timeline";
import "./experience.css";
function Experience() {
  const timestamps: Timeline[] = [
    {
      description:
        "Started studying at Department of Information and Electronic Engineering",
    },
    {
      description: "Started developing personal projects",
    },
    {
      description:
        "Started working at SmartUp IKE - a software company that develops applications",
    },
  ];
  const timestampRefs = useRef<(HTMLDivElement | null)[]>([]);
  const yearLabelRef = useRef<HTMLDivElement>(null);
  const yearLabelRef2 = useRef<HTMLDivElement>(null);
  const yearLabelRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visibleTimestamp");
          } else {
            entry.target.classList.remove("visibleTimestamp");
          }
        });
      },
      {
        threshold: 1,
      }
    );

    timestampRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    if (yearLabelRef.current) observer.observe(yearLabelRef.current);
    if (yearLabelRef2.current) observer.observe(yearLabelRef2.current);
    if (yearLabelRef3.current) observer.observe(yearLabelRef3.current);
  }, []);
  return (
    <div className=" flex flex-col ">
      <span className="text-5xl bg-black max-mobile:text-4xl  max-[430px]:text-[2rem] max-[430px]:p-3  text-teal-200 font-bold neon-sign-purple w-max rounded-xl -mt-[6.5rem] p-4  ">
        {" "}
        &lt; Experience / &gt;
      </span>
      <div className=" w-max  ml-[36rem] max-laptop:ml-[22rem] max-mobile:ml-[12rem] max-mobileXS:ml-[11rem] max-mobileXXS:ml-[7rem] top-[3800px] max-tablet:top-[2900px] max-mobile:top-[225rem] max-mobileXS:top-[255rem] absolute  flex flex-col gap-[20rem]">
        <span
          ref={yearLabelRef}
          className="neon-sign-purple opacity-0    text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl"
        >
          2018
        </span>
        <span
          ref={yearLabelRef2}
          className="neon-sign-purple opacity-0     text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl"
        >
          2021
        </span>
        <span
          ref={yearLabelRef3}
          className="neon-sign-purple opacity-0   text-white w-max py-4 px-12 duration-1000 z-[1] text-3xl bg-slate-900  rounded-xl"
        >
          2022
        </span>
      </div>
      <div className=" flex flex-col gap-[20rem] py-[20rem] max-mobile:py-[17rem]">
        {timestamps.map((timestamp, index) => (
          <div
            key={index}
            ref={(el) => (timestampRefs.current[index] = el)}
            className={`flex relative ${
              index === (1 || 3)
                ? " -right-[32rem] max-laptop:-right-[3rem] max-mobileXS:right-0"
                : " max-laptop:w-[35rem] "
            } bg-slate-900 z-[1] flex-col gap-2 items-center neon-sign-blue max-mobileXS:!w-full -ml-44 max-laptop:!-ml-4 duration-1000 opacity-0 p-8 max-mobileXS:p-4 w-max rounded-2xl `}
          >
            <span className="text-white text-xl max-mobileXS:text-base text-center">
              {timestamp.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
