import { styled } from "styled-components";

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const FormItem = styled.div`
display: flex;
width: 500px;
height: 40px;
margin: 12px auto;
align-items: center;
justify-content: space-between;

& label {
    color: #ffffff;
  }

& input {
    width: 240px;
    height: 100%;
    }
`;