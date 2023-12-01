import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <BrowserView>
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        </BrowserView>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
