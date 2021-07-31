import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border-radius: 20px 20px 0px 0px;
  padding: 0 2rem;
  border-bottom: 1px solid #50e3c2;
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
  width: 9.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
  }
`;

export const Actions = styled.div`
  dispaly: flex;
  justify-content: space-between;
  align-items: center;
  width: 2%;

  i {
    color: #acacac;
    transition: 0.3s ease all;

    &:hover {
      color: #50e3c2;
    }
  }
`;
