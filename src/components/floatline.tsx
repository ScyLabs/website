import { useContractReads } from "wagmi";
import { website } from "utils/contracts";
import { useMemo } from "react";

const FloatLine = ({ title }) => {
  return (
    <div className="p-24  justify-center text-4xl md:text-6xl">
      <h1>{title}</h1>
      <a href="#contact" className="contactme text-2xl">
        Contact me
      </a>
    </div>
  );
};

export default FloatLine;
