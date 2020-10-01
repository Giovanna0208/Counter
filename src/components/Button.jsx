import React from 'react';
import styled from 'styled-components';

const Sbutton = styled.button`
    background-color: wheat;
    font-size: 25px;
    font-family: fantasy;
    border-radius: 10px;
    border: 2px solid wheat;
    transition-duration: 0.7s;
    color: #282c34;

    &:hover {
        background-color: #282c34;
        color: wheat;
    }
`;

export const Button = ({ onClick, name }) => (
    <Sbutton onClick={onClick}>{name}</Sbutton>
);