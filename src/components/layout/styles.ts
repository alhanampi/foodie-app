import styled from "styled-components";

export const HeaderFoodie = styled.header`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 4em;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  padding: 0.5em;

  a {
    text-decoration: none;
    color: #df6555;
    display: flex;
    align-items: center;
  }

  img {
    height: 80%;
  }
`;

export const BoxLeft = styled.div`
  display: flex;
  width: 80%;`

export const BoxRight = styled.div`
  display: flex;
  justify-content: flex-end;
  `

export const Text = styled.h2`
  display: inline;
  font-family: "Edu NSW ACT Foundation", cursive;
  font-size: 2em;
  padding: 0 1em;
`;

export const SubText = styled(Text)`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1em;
`

export const Main = styled.main`
  margin-top: 7em;
`;

export const FooterFoodie = styled.footer`
  display: flex;
  justify-content: left;
  width: 100%;
  height: 3em;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  position: fixed;
  bottom: 0;
  font-family: 'Fira Sans', sans-serif;
`;
