import styled from "styled-components";

export const Button = styled.button`
font-size: 12px;
display: block;
padding: 6px;
border-radius: 3px;
border: none;
box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
&:hover{
    color: #fff;
    background-color: green;
}
`;

export const Input = styled.input`
&:focus, &:focus-visible {
outline: none;
border: 2px solid green;
border-radius: 3px;
}`;