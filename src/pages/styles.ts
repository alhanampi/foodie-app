import styled from "styled-components";

export const Main = styled.div`
  margin: 5% 10%;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  `;

export const MainRegister = styled(Main)`
background-color: #fefafa;
height: 80vh;
justify-content: center;
box-shadow: 3px 4px 5px 0px rgba(240, 237, 237, 0.61);
margin: 2em;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const Title = styled.h1`
  font-family: "Edu NSW ACT Foundation", cursive;
  font-size: 3rem;
`;

export const FormBox = styled.form`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    border: 0;
    border-bottom: 2px solid #df6555;
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;
    margin-top: 1em;
    margin: 1em 0;
  }

  label {
    width: 40%;
    margin: 1em; 
    font-size: 1.5em;
  }
`;

export const Button = styled.button`
    background-color: #df6555;
    color: white;
    border: 2px solid #df6555;
    border-radius: 20px;
    width: 20%;
    height: 3em;
    cursor: pointer;
    font-size: 1em;
    
    a {
      text-decoration: none;
      color: white;
    }
  `;
