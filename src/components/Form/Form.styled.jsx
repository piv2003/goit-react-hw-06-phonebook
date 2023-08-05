import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 260px;
  background: white;
  border-radius: 30px;

  & label {
    display: flex;
    flex-direction: column;
    width: 100%;

    & span {
      margin-bottom: 5px;
      font-weight: bold;
      color: #8005c7;
    }
  }
`;

export const InputName = styled.input`
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
  color: red;
`;

export const InputTel = styled(InputName)`
  font-style: normal;
  color: red;
`;

export const Button = styled.button`
  color: #ee66d0;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 17px;
  line-height: normal;
  margin: 20px;
  border: 2px solid pink;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
  background: radial-gradient(circle, #f1c1bc, #d3e680);
  background-clip: padding-box;
  transition: background-image 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: radial-gradient(circle, #d3e680, #f1c1bc);
    color: darkblue;
    transform: scale(1.1);
  }
`;
