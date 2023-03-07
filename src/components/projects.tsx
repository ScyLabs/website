import { website } from "utils/contracts";
import { useContractRead } from "wagmi";
import styled from "styled-components";
import { slug } from "utils/slug";

const Name = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.8rem;
  transform: rotate(-90deg) translate(50%, -100%);
  color: #fff;
  letter-spacing: 0.2em;
`;
const Projects = () => {
  const { data } = useContractRead({
    ...website,
    functionName: "getProjects",
  });

  return (
    <div className="p-12">
      <h2 className="mb-4">Projects</h2>
      <ul className="flex">
        {data &&
          data.map((project: any, index) => {
            const { image, title } = project;

            const content = (
              <span className="block relative">
                <Name className="name">{title}</Name>
                <img src={image} />
              </span>
            );
            return (
              <li className="w-1/5 p-2">
                <a
                  href={`/projects/${slug(title)}`}
                  //target="_blank"
                  //rel="noreferrer"
                  className="block border-solid border-b-4 border-yellow"
                >
                  {content}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Projects;
