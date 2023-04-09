import { Fragment } from "react";
import { iconRemove } from "../../assets";
import { useJobContext } from "../../context/job.context";
import { motion } from "framer-motion";

const FilterCard = () => {
  const { filterList, clearFilterList, clearAllFilters } = useJobContext();

  return (
    <Fragment>
      {filterList.length > 0 && (
        <motion.div
          layout
          key="anim"
          className="flex justify-between items-center py-5 px-8 md:px-4 md:py-2 bg-white shadow-xl w-full rounded-md absolute top-[-2rem]"
        >
          <motion.div layout className="w-full flex gap-4 md:flex-wrap">
            {filterList.map((filter) => (
              <motion.div layout className="flex items-center" key={filter}>
                <div className="pt-1 px-2 bg-lightGrayCyanTag rounded-md">
                  <span className="inline-block text-desatDarkCyan font-bold">
                    {filter}
                  </span>
                </div>
                <div
                  className="pt-1 px-2 bg-desatDarkCyan h-full cursor-pointer rounded-tr-md rounded-br-md flex justify-center items-center hover:bg-veryDarkGrayCyan transition-all"
                  onClick={() => clearFilterList(filter)}
                >
                  <img
                    src={iconRemove}
                    alt="remove"
                    className="w-[12px] h-[12px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div layout className="flex justify-end w-[10%]">
            <h3
              onClick={clearAllFilters}
              className="cursor-pointer text-darkGrayCyan hover:text-desatDarkCyan font-semibold transition-all  hover:underline"
            >
              Clear All
            </h3>
          </motion.div>
        </motion.div>
      )}
    </Fragment>
  );
};

export default FilterCard;
