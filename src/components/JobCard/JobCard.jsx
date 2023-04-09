import React from "react";
import { useJobContext } from "../../context/job.context";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { fadeAnim } from "../../animation";

const JobCard = ({ job, index }) => {
  const { addToFilterList } = useJobContext();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      variants={fadeAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      layout="position"
      className={`flex justify-between items-center md:flex-col md:items-start p-5 md:p-10 md:px-5 w-full bg-white rounded-md shadow-xl relative md:gap-5 ${
        index === 0
          ? "border-l-4 border-l-desatDarkCyan"
          : index === 1
          ? "border-l-4 border-l-desatDarkCyan"
          : ""
      }`}
    >
      <div className="flex gap-3 items-center md:flex-col md:items-start ">
        <img
          src={job.logo}
          alt={job.company}
          className="md:absolute md:w-[60px] md:h-[60px] md:top-[-2rem]"
        />

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-desatDarkCyan">{job.company}</h1>
            {job.new && (
              <div className="pt-1 px-3 flex bg-desatDarkCyan  justify-center items-center rounded-2xl ">
                <span className="uppercase text-[0.7rem] m-0 text-white">
                  New!
                </span>
              </div>
            )}
            {job.featured && (
              <div className="pt-1 px-3 flex bg-veryDarkGrayCyan  justify-center items-center rounded-2xl ">
                <span className="uppercase text-[0.7rem] m-0 text-white">
                  Featured
                </span>
              </div>
            )}
          </div>
          <h2 className="text-veryDarkGrayCyan hover:text-desatDarkCyan cursor-pointer transition-all text-lg font-bold">
            {job.position}
          </h2>
          <div className="flex items-center">
            <span className="inline-block text-darkGrayCyan">
              {job.postedAt} &#x2022; {job.contract} &#x2022; {job.location}
            </span>
          </div>
        </div>
      </div>
      {isMobile && <div className="w-full h-[0.05rem] bg-[#d3d3d3]"></div>}
      <div className="flex gap-3 flex-wrap">
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          className="pt-1 px-2 rounded-md cursor-pointer flex justify-center items-center bg-lightGrayCyanTag hover:bg-desatDarkCyan group transition-all"
          onClick={() => addToFilterList(job.role)}
        >
          <span className="text-desatDarkCyan group-hover:text-white font-bold tracking-normal">
            {job.role}
          </span>
        </motion.div>
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          className="pt-1 px-2 cursor-pointer hover:bg-desatDarkCyan group transition-all rounded-md flex justify-center items-center bg-lightGrayCyanTag "
          onClick={() => addToFilterList(job.level)}
        >
          <span className="text-desatDarkCyan group-hover:text-white font-bold tracking-normal">
            {job.level}
          </span>
        </motion.div>
        {job.tools.map((tool) => (
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
            onClick={() => addToFilterList(tool)}
            className="pt-1 px-2 cursor-pointer transition-all hover:bg-desatDarkCyan group rounded-md flex justify-center items-center bg-lightGrayCyanTag "
            key={tool}
          >
            <span className="text-desatDarkCyan font-bold group-hover:text-white  tracking-normal">
              {tool}
            </span>
          </motion.div>
        ))}
        {job.languages.map((language) => (
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
            onClick={() => addToFilterList(language)}
            className="pt-1 px-2 cursor-pointer rounded-md transition-all hover:bg-desatDarkCyan group flex justify-center items-center bg-lightGrayCyanTag "
            key={language}
          >
            <span className="text-desatDarkCyan font-bold group-hover:text-white tracking-normal">
              {language}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default JobCard;
