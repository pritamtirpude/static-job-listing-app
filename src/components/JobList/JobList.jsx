import { JobCard } from "../../components";

import { useJobContext } from "../../context/job.context";
import { FilterCard } from "../../components";
import { motion, AnimatePresence } from "framer-motion";

const JobList = () => {
  const { jobs, filterList } = useJobContext();

  return (
    <motion.div
      layout
      className={`max-w-5xl w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto py-14 ${
        filterList.length > 0 && "md:pt-40"
      } relative flex flex-col gap-5 md:gap-12`}
    >
      <FilterCard />
      <AnimatePresence key="anim">
        {jobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobList;
