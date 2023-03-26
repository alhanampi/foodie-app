import styled from "styled-components";

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
  flex-wrap: wrap;
  align-items: center;

  `;
  export const LinkTo = styled.a`
    text-decoration: none;
    color: #df6555;
    padding: 0 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: .9em;
  `

export const Icon = styled.span`
  svg {
    display: block;
    height: 1em;
    width: 1em;
  }
`;
