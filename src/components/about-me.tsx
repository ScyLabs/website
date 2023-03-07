import { useMemo } from "react";
import { website } from "utils/contracts";
import { useContractReads } from "wagmi";
import TagsCanvas from "react-tags-canvas";

import styled from "styled-components";
import ContentBox from "./content-box";

const AboutMe = () => {
  const { data, error } = useContractReads({
    contracts: [
      {
        ...website,
        functionName: "about",
      },
      {
        ...website,
        functionName: "getSkills",
      },
    ],
  });

  const [about, skills] = useMemo(() => {
    const about: string = data && data[0] ? data[0].toString() : "";
    const skills: any[] = data && data[1] ? data[1] : [];

    return [about, skills];
  }, [data]);

  return (
    <ContentBox
      content={about.split("\n").map((p) => (
        <p className="block my-4">{p}</p>
      ))}
      title={"About me"}
    />
  );
};

export default AboutMe;
