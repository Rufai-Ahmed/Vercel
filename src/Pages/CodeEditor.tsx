import { styled } from "styled-components";
import maincode from "../Assets/code.png";
import Writeups from "../Components/Writeups";
import { BsTerminal, BsTools } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";

const CodeEditor = () => {
  return (
    <div>
      <Container>
        <Code>
          <Img src={maincode} />
        </Code>
        <Components>
          <Writeups
            MainIcon={BsTools}
            MainWriteup="Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations."
            Texts="The complete toolkit for the Web"
          />
          <Writeups
            MainIcon={GrStorage}
            MainWriteup="Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.
            "
            Texts="Easy integration with your backend"
          />
          <Writeups
            MainIcon={BsTerminal}
            MainWriteup="From caching to Serverless Functions, all our cloud primitives work perfectly on localhost. "
            Texts="End-to-end testing on Localhost
            "
          />
        </Components>
      </Container>
    </div>
  );
};

export default CodeEditor;

const Img = styled.img`
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 260px;
  }
`;

const Components = styled.div`
  width: 50%;
  height: 85vh;
  //   background-color: blue;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Code = styled.div`
  width: 50%;
  height: 45vh;
  display: flex;
  align-items: start;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: start;
  background-color: black;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    padding-bottom: 100px;
  }
`;
