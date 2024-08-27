import styled, { createGlobalStyle } from 'styled-components';
import {motion} from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
    body{
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        min-height: 100vh;
        margin: 0;
        padding 0;
        height: 100%;
        font-family: Arial, Helvetica, Sans-serif;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    color:  #646464;
    text-align: center;
    text-shadow: 
        1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000;
    margin: 20px 0;
`;

export const FrameDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    top: 0px;
    left: 0px;
`;

export const PostitDiv = styled(motion.div)`
    width: 250px,
    height: 350px,
    borderRadius: 3,
    background: #f6ff66,
    justifyContent: center,
`;

export const ButtonCreate = styled(motion.button)`
    width: 80px;
    height: 80px;
    top: 50px;
    left: 50px;
    border: 1px solid black;
    border-radius: 50%;
    background: rgb(238,174,202);
    position: fixed;
    font-size: 4rem;
    color: #dfdfdf;
    text-shadow: 
        1px 1px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000;
    z-index: 99;
`;

export const TitleNamePostit = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    background: transparent;
    font-size: 1rem;
    border: none;
    color: #333;
    box-sizing: border-box;
    cursor: default;
    &:focus {
        outline: none;
    }
`;

export const SeparatorHr = styled.hr`
    margin-top: -5px;
`;

export const TextAreaPostit = styled.textarea`
    width: 245px;
    height: 290px;
    resize: none;
    overflow: auto;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    cursor: default;
`;

const ButtonStyled = styled(motion.button)`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
    background: rgb(238,174,202);
    position: absolute;
    background-color: #f6ffb0;
    z-index: 1;
`;

export const ButtonDelete = styled(ButtonStyled)`
    top: -5px;
    right: -5px;
`;

export const ButtonUpdate = styled(ButtonStyled)`
    top: -5px;
    right: 26px;
`;