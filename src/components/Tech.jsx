import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <div className="m-5">
        <motion.div >
          <p className={`text-center mb-14   text-4xl font-bold`}>
            Tech Skill
          </p>

        </motion.div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");