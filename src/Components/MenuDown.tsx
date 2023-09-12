import { styled } from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import SmallDeviceDropDown from "./SmallDeviceDropDown";
import { useState } from "react";

const MenuDown = () => {
  const [drop, setDrop] = useState<Boolean>(true);
  const showDrop = () => {
    setDrop(!drop);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Login>Log in</Login>
          <Signin>Sign Up</Signin>

          <Hold>
            {drop ? (
              <Nav onClick={showDrop}>
                Features
                <FaAngleDown />
              </Nav>
            ) : (
              <Navf>
                <Div onClick={showDrop}>
                  Features
                  <FaAngleUp />
                </Div>
                <SmallDeviceDropDown />
              </Navf>
            )}
          </Hold>
          <Nav>Docs</Nav>
          <Nav>Templates</Nav>
          <Nav>Integrations</Nav>
          <Nav>Customers</Nav>
          <Nav>Enterprise</Nav>
          <Nav>Pricing</Nav>
          <Nav>Contact</Nav>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MenuDown;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hold = styled.div`
  width: 100%;
  align-items: center;
`;

const Navf = styled.div`
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  border-bottom: 1px solid #1a1a1aff;
  transition: all 350ms;
`;
const Nav = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 1px solid #1a1a1aff;
  transition: all 350ms;
`;

const Signin = styled.button`
  width: 100%;
  height: 45px;
  background-color: white;
  font-weight: 600;
  color: black;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  margin-bottom: 15px;
`;
const Login = styled.button`
  width: 100%;
  border: 0.5px solid silver;
  height: 45px;
  background-color: #0a0a0aff;
  font-size: 15px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 94%;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
`;
