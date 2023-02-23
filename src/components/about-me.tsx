import { useMemo } from "react";
import { website } from "utils/contracts";
import { useContractReads } from "wagmi";
import TagsCanvas from "react-tags-canvas";

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

  console.log("🚀 ~ file: about-me.tsx:18 ~ AboutMe ~ data", data);

  const [about, skills] = useMemo(() => {
    const about: string = data && data[0] ? data[0].toString() : "";
    const skills: any[] = data && data[1] ? data[1] : [];

    return [about, skills];
  }, [data]);

  return (
    <div className="bg-bg1 p-8">
      <h2 className="text-6xl mb-8">About me </h2>
      <p>{about}</p>
      {/*<TagsCanvas 
      tags={skills.map(() => ({
        value: 
      })} />*/}
    </div>
  );
};

export default AboutMe;
