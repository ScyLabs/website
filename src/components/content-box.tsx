import styled from "styled-components";

const Square = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #272727;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(35%, 50%) rotate(45deg);
  background: #f7ff9d;
  z-index: 4;
`;

const ContentBox = ({ title, content, links = [] }) => {
  return (
    <div
      id="about-me"
      className="p-8 max-w-3xl bg-about about-me relative p-12 py-24 text-md"
    >
      <h2 className="text-6xl mb-8">{title}</h2>
      <p className="block my-4">{content}</p>
      <div className="buttons">
        {links.map(({ title, href }) => {
          return (
            <a href={href} target="_blank">
              {title}
            </a>
          );
        })}
      </div>
      <Square />
    </div>
  );
};

export default ContentBox;
