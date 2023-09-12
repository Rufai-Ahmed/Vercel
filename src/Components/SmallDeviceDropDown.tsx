import { styled } from "styled-components";
import { BsChat, BsStack } from "react-icons/bs";
import { IoAnalyticsOutline, IoGlobe } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { GrStorage } from "react-icons/gr";

const SmallDeviceDropDown = () => {
  return (
    <div>
      <Container>
        <Inner>
          <BsChat style={{ color: "grey", marginRight: "20px" }} />
          Preview
        </Inner>
        <Inner>
          <BsStack style={{ color: "grey", marginRight: "20px" }} />
          Infrastructure
        </Inner>
        <Inner>
          <IoGlobe style={{ color: "grey", marginRight: "20px" }} />
          Edge Function
        </Inner>
        <Inner>
          <SiNextdotjs style={{ color: "grey", marginRight: "20px" }} />
          Next.js
        </Inner>
        <Inner>
          <IoAnalyticsOutline style={{ color: "grey", marginRight: "20px" }} />
          Analytics
        </Inner>
        <Inner>
          <GrStorage
            style={{
              color: "grey",
              marginRight: "20px",
              backgroundColor: "grey",
            }}
          />
          Storage
        </Inner>
      </Container>
    </div>
  );
};

export default SmallDeviceDropDown;

const Inner = styled.div`
  width: 97%;
  height: 40px;
  display: flex;
  align-items: center;
  color: grey;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;grey
`;
