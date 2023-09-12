import { styled } from "styled-components";
import { BsChat } from "react-icons/bs";

interface iComponent {
  text: string;
  text1: string;
  I: any;
}

const InnerComponent: React.FC<iComponent> = ({ text, text1, I }) => {
  return (
    <div>
      <Container>
        <Icon>
          <I /> <p>{text}</p>
        </Icon>
        <P>{text1}</P>
      </Container>
    </div>
  );
};

export default InnerComponent;

const P = styled.p`
  width: fit-content;
  font-size: 17px;
  color: grey;
  margin: 0;
  font-weight: 500;
`;

const Icon = styled.div`
  font-size: 25px;
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;

  p {
    font-size: 17px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 500;
    margin-right: 0;
    margin-buttom: 0;
  }
`;

const Container = styled.div``;
