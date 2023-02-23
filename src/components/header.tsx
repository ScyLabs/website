import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import Image from "next/image";

const StyledHeader = styled.header<{ isOpen: boolean }>`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display;flex;
  position: fixed;
  transition: all 500ms ease-in-out;
  transform:translate(-100%);
  ${(props) => props.isOpen && `transform: translate(0)`}
  
`;

const StyledNav = styled.nav`
  width: 250px;
  background-color: #2f3640;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  li {
    //margin: 1rem 0;
    margin-top: 1rem;
    display: block;
    position: relative;
    color: #fff;
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      color: #ff0200;
    }
  }
  /*
  @media (min-width: 768px) {
    width: auto;
    padding: 2rem;
    li {
      font-size: 1rem;
      &::after {
        content: "";
        display: block;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.3);
        height: 1px;
        margin-top: 0.5rem;
      }
    }
  }
  */
`;

const Mask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: header.tsx:67 ~ Header ~ isOpen", isOpen);

  return (
    <>
      <StyledHeader isOpen={isOpen}>
        <Mask onClick={() => setIsOpen(false)}></Mask>
        <StyledNav>
          <Image
            src={"/logo.png"}
            width={70}
            height={70}
            alt="ScyLabs"
            className="rounded-full absolute left-1/2 top-0 translate-x-centered mt-4"
          />
          <div className="flex flex-col justify-center">
            <ul className="block text-2xl tracking-wide">
              <li>About</li>
              <li>My skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </StyledNav>
      </StyledHeader>
      <div className="p-4 fixed left-0 top-0">
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </>
  );
};
export default Header;
