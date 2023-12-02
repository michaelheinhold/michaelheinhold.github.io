import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
          <div className='w-20 h-28' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <img src={technology.icon} />
          </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
