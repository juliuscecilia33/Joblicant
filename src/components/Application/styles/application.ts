import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border-radius: 20px 20px 0px 0px;
  padding: 0 2rem;
  border-bottom: 1px solid #495586;
  position: relative;
`;

export const SearchField = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
`;

export const SearchIDField = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  align-items: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;

    span {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      color: #acacac;
    }
  }
`;

export const NoSearchField = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
`;

export const NoFilterField = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3%;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Actions = styled.div`
  dispaly: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  right: 1%;
  margin: auto 0;

  button {
    background: none;
    outline: none;
    border: none;
    i {
      color: #acacac;
      transition: 0.3s ease all;
      margin-right: 1rem;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        color: #50e3c2;
      }
    }
  }
`;
