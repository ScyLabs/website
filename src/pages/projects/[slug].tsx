import Layout from "components/layout";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { website } from "utils/contracts";
import { useContractRead, useContractReads } from "wagmi";
import { slug } from "utils/slug";
import ContentBox from "components/content-box";
import FloatLine from "components/floatline";

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};
const Project = () => {
  const { slug: urlSlug } = useRouter().query;

  const [project, setProject] = useState<Project | null>(null);
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [skills, setSkills] = useState<string[]>([]);

  const readOptions = useMemo(() => {
    const reads: any = [
      {
        ...website,
        functionName: "getProjects",
      },
    ];

    if (null !== projectIndex) {
      reads.push({
        ...website,
        functionName: "getProjectSkills",
        args: [projectIndex],
      });
    }

    return reads;
  }, [projectIndex]);

  const { data }: any = useContractReads({
    contracts: readOptions,
  });

  useEffect(() => {
    if (!data || (data && !data[0])) return;

    const project = data[0].find((p: any) => slug(p.title) === urlSlug);
    const projectIndex = data[0].findIndex(
      (p: any) => slug(p.title) === urlSlug
    );

    if (!project) return;

    setProject(project);
    setProjectIndex(projectIndex);
    if (data[1]) setSkills(data[1]);
  }, [data, urlSlug]);

  if (!project) return null;
  const { title, description, image, url } = project;
  return (
    <Layout>
      <div className="p-24  justify-center text-4xl md:text-6xl">
        <h1>{title}</h1>
        <ul className="text-sm flex">
          {skills.map((skill) => (
            <li className="mx-4">{skill}</li>
          ))}
        </ul>
        <a href="#contact" className="contactme text-2xl">
          Contact me
        </a>
      </div>
      <ContentBox title={""} content={description} />
    </Layout>
  );
};

export default Project;
