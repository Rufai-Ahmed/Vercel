import { styled } from "styled-components";

interface iButton {
  text: string;
  bcc: string;
  color: string;
  br: string;
  border: string;
}

const Button: React.FC<iButton> = ({ text, bcc, color, br, border }) => {
  return (
    <div>
      <Buttonn border={border} color={color} bcc={bcc} br={br}>
        {text}
      </Buttonn>
    </div>
  );
};

export default Button;

const Buttonn = styled.button<{
  bcc: string;
  color: string;
  br: string;
  border: string;
}>`
  background-color: ${({ bcc }) => bcc};
  font-weight: 600;
  padding: 10px 20px;
  margin-top: 10px;
  display: flex;
  border: ${({ border }) => border};
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ br }) => br}px;
  color: ${({ color }) => color};
  cursor: pointer;
`;
