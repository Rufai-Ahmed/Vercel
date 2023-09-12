import { BsTools } from "react-icons/bs";
import { styled } from "styled-components";

type iWriteups = {
  Texts: string;
  MainIcon: any;
  MainWriteup: string;
};

const Writeups: React.FC<iWriteups> = ({ Texts, MainIcon, MainWriteup }) => {
  return (
    <div>
      <Container>
        <Icon>
          <MainIcon />
        </Icon>
        <Text>{Texts}</Text>
        <WriteUp>{MainWriteup}</WriteUp>
      </Container>
    </div>
  );
};

export default Writeups;

const WriteUp = styled.div`
  width: 520px;
  font-weight: 400;
  font-size: 18px;
  color: grey;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 260px;
  }
`;

const Text = styled.div`
  font-size: 25px;
  color: white;
  font-weight: 700;
  margin: 10px 0px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 250px;
  }
`;

const Icon = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  background-color: #333333ff;
  color: #888888ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Container = styled.div`
  height: 250px;

  width: 100%;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    height: 260px;
  }
`;
