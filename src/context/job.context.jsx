import { createContext, useContext, useEffect, useState } from "react";
import { jobListData } from "../data";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(jobListData);
  const [filterList, setFilterList] = useState([]);

  const addToFilterList = (filterTitle) => {
    const existingItem = filterList.find((title) => title === filterTitle);

    if (!existingItem) {
      setFilterList((prevState) => [...prevState, filterTitle]);
    }
  };

  const clearFilterList = (filterTitle) => {
    const filterTagExist = filterList.find((item) => item === filterTitle);

    if (filterTagExist) {
      const filteredTitle = filterList.filter((item) => item !== filterTitle);
      setFilterList(filteredTitle);
    }
  };

  const clearAllFilters = () => {
    setFilterList([]);
    setJobs(jobListData);
  };

  const filteredJobList = () => {
    if (filterList.length > 0) {
      const filterJobs = jobListData.filter((job) => {
        return filterList.every((title) => {
          const language = job.languages.find((language) => language === title);
          const tool = job.tools.find((tool) => tool === title);
          return job.role === title || job.level === title || language || tool;
        });
      });
      setJobs(filterJobs);
    } else {
      setJobs(jobListData);
    }
  };

  useEffect(() => {
    filteredJobList();
  }, [filterList]);

  const value = {
    jobs,
    addToFilterList,
    filterList,
    clearFilterList,
    clearAllFilters,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

const useJobContext = () => {
  return useContext(JobContext);
};

export { useJobContext };
