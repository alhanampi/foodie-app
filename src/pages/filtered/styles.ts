import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Text = styled.h3`
  font-family: "Edu NSW ACT Foundation", cursive;
  font-size: 2em;
  padding: 0 3em;
  text-decoration: none;
  color: #df6555;
  text-align: right;
  cursor: pointer;
`;

export const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 1rem 3rem;
  box-shadow: 3px 4px 5px 0px rgba(240, 237, 237, 0.61);
  padding: 1em;
  width: 20em;

  img {
    border-radius: 2rem;
    left: 0;
    width: 20em;
  }

  h3 {
    color: #df6555;
    text-align: right;
    font-weight: 600;
    font-size: 1.3em;

    display: flex;
    justify-content: right;
  }
`;
