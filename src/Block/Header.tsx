import { styled } from "styled-components";
import Button from "./Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import DropDown from "../Components/DropDown";
import MenuDown from "../Components/MenuDown";
import { ImCancelCircle } from "react-icons/im";

const Header = () => {
  const [drop, setDrop] = useState<Boolean>(false);

  const showDrop = () => {
    setDrop(!drop);
  };

  const [show, setShow] = useState(false);
  const change = () => {
    if (window.pageYOffset > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", change);

  return (
    <div>
      {show ? (
        <Container bkf="20" bcc="rgba(30, 30,30, 0.2)" pos="fixed" border="1">
          <Wrapper>
            <Wrap>
              <Holder>
                {" "}
                <svg
                  width="56"
                  height="45"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>
                <h1>Vercel</h1>
              </Holder>
              <NavHolder>
                <Nhold onMouseEnter={showDrop} onMouseLeave={showDrop}>
                  {drop ? (
                    <Navf onMouseEnter={showDrop} onMouseLeave={showDrop}>
                      Features
                      {drop ? <Dropup /> : <Dropdown />}
                    </Navf>
                  ) : (
                    <Nav onMouseEnter={showDrop} onMouseLeave={showDrop}>
                      Features
                      {drop ? <Dropup /> : <Dropdown />}
                    </Nav>
                  )}
                </Nhold>
                <Nav>Docs</Nav>
                <Nav>Templates</Nav>
                <Nav>Integrations</Nav>
                <Nav>Customers</Nav>
                <Nav>Enterprise</Nav>
                <Nav>Pricing</Nav>
              </NavHolder>
            </Wrap>
            <ButtonHolder>
              <p>Contact</p>
              <Button
                bcc="black"
                text="Login"
                color="white"
                br="10"
                border=" 1px solid grey"
              />
              <Button
                bcc="white"
                text="Sign Up"
                color="black"
                br="10"
                border="none"
              />
            </ButtonHolder>
            {drop ? (
              <Menuholder1 onClick={showDrop}>
                <ImCancelCircle />
              </Menuholder1>
            ) : (
              <Menuholder>
                <Ham onClick={showDrop} />
              </Menuholder>
            )}
          </Wrapper>
        </Container>
      ) : (
        <Container bcc="black" bkf="0">
          <Wrapper>
            <Wrap>
              <Holder>
                {" "}
                <svg
                  width="56"
                  height="45"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>
                <h1>Vercel</h1>
              </Holder>
              <NavHolder>
                <Nhold onMouseEnter={showDrop} onMouseLeave={showDrop}>
                  {drop ? (
                    <Navf onMouseEnter={showDrop} onMouseLeave={showDrop}>
                      Features
                      {drop ? <Dropup /> : <Dropdown />}
                    </Navf>
                  ) : (
                    <Nav onMouseEnter={showDrop} onMouseLeave={showDrop}>
                      Features
                      {drop ? <Dropup /> : <Dropdown />}
                    </Nav>
                  )}
                </Nhold>
                <Nav>Docs</Nav>
                <Nav>Templates</Nav>
                <Nav>Integrations</Nav>
                <Nav>Customers</Nav>
                <Nav>Enterprise</Nav>
                <Nav>Pricing</Nav>
              </NavHolder>
            </Wrap>
            <ButtonHolder>
              <p>Contact</p>
              <Button
                bcc="black"
                text="Login"
                color="white"
                br="10"
                border=" 1px solid grey"
              />
              <Button
                bcc="white"
                text="Sign Up"
                color="black"
                br="10"
                border="none"
              />
            </ButtonHolder>
            {drop ? (
              <Menuholder1 onClick={showDrop}>
                <ImCancelCircle />
              </Menuholder1>
            ) : (
              <Menuholder>
                <Ham onClick={showDrop} />
              </Menuholder>
            )}
          </Wrapper>
        </Container>
      )}
      {drop ? (
        <Hold onMouseEnter={showDrop} onMouseLeave={showDrop}>
          <DropDown />
        </Hold>
      ) : null}
      {drop ? (
        <Small>
          <MenuDown />
        </Small>
      ) : null}
    </div>
  );
};

export default Header;

const Small = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Ham = styled(AiOutlineMenu)``;

const Menuholder1 = styled.div`
  display: none;
  // width: 40%;
  font-size: 30px;
  margin-top: 15px;
  color: grey;
  justify-content: end;
  align-items: center;
  position: absolute;
  right: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
`;
const Menuholder = styled.div`
  display: none;
  // width: 40%;
  font-size: 20px;
  margin-top: 15px;
  color: grey;
  justify-content: end;
  align-items: center;
  position: absolute;
  right: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0.2px solid silver;
    padding: 5px;
  }
`;

const Dropup = styled(FaAngleUp)`
  coloe: grey;
`;

const Nhold = styled.div``;

const Hold = styled.div`
  position: absolute;
  left: 200px;
`;

const Dropdown = styled(FaAngleDown)`
  color: grey;
`;

const ButtonHolder = styled.div`
  display: flex;
  width: 40%;
  /* background-color: aliceblue; */
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }

  p {
    color: grey;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    margin-right: 30px;

    &:hover {
      color: white;
    }
  }
  display: flex;
  width: 40%;
  /* background-color: aliceblue; */
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }

  p {
    color: grey;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    margin-right: 30px;

    &:hover {
      color: white;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  /* background-color: antiquewhite; */
  align-items: center;
`;

const Navf = styled.div`
  color: grey;
  margin-right: 45px;
  transition: all ease-in-out 350ms;
  display: flex;
  align-items: end;
  gap: 3px;
  background-color: gray;
  border-radius: 40px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;
const Nav = styled.div`
  color: grey;
  margin-right: 45px;
  transition: all ease-in-out 350ms;
  display: flex;
  align-items: end;
  gap: 3px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  h1 {
    color: #fff;
    margin-right: 15px;
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  align-items: center;
`;

const Container = styled.div<{
  bkf?: string;
  bcc?: string;
  pos?: string;
  border?: string;
}>`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  background-color: ${({ bcc }) => bcc};
  justify-content: center;
  backdrop-filter: blur(${({ bkf }) => bkf}px);
  position: ${({ pos }) => pos};
  border-bottom: ${({ border }) => border}px solid #1b1e1fff;
  scroll: smooth;
`;
