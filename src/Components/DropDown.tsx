import { styled } from "styled-components";
import InnerComponent from "./InnerComponent";
import { BsChat, BsStack } from "react-icons/bs";
import { IoAnalyticsOutline, IoGlobe } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { GrStorage } from "react-icons/gr";

const DropDown = () => {
  return (
    <div>
      <Container>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Previews"
            text1="Zero config, more innovation"
            I={BsChat}
          />
        </Inner>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Infrastructure"
            text1="Always fast, always online"
            I={BsStack}
          />
        </Inner>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Next.js"
            text1="The native Next.js platform"
            I={SiNextdotjs}
          />
        </Inner>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Edge Functions"
            text1="Dynamic pages, static speed"
            I={IoGlobe}
          />
        </Inner>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Analytics"
            text1="Real-time insights, peak performance"
            I={IoAnalyticsOutline}
          />
        </Inner>
        <Inner bg="rgba(0,0,0,0.7)">
          <InnerComponent
            text="Storage"
            text1="Serverless storage for the frontend"
            I={GrStorage}
          />
        </Inner>
      </Container>
    </div>
  );
};

export default DropDown;

const Inner = styled.div<{ bg: string }>`
  transition: all 350ms;
  padding-left: 20px;
  &:hover {
    background-color: ${({ bg }) => bg};
    border-radius: 10px;
  }
`;
const Container = styled.div`
  width: 650px;
  display: grid;
  grid-template-columns: auto auto;
  height: 300px;
  border-radius: 30px;
  padding: 10px 15px;
  backdrop-filter: blur(10px);
  background-color: rgba(40, 40, 40, 0.6);
  border: 0.5px solid silver;

  :nth-child(even) {
    padding-rightgrey: 10px;
  }
`;
