import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9vh;
  background: linear-gradient(
    268.95deg,
    #33384e 4.06%,
    #1c2031 41.85%,
    #33384e 99.53%
  );
  border-radius: 20px 20px 0px 0px;
  padding: 0 0.5rem;
  border-bottom: 1px solid #50e3c2;
`;

export const Search = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #50e3c2;
    }

    i {
      color: rgba(255, 255, 255, 0.53);
      font-size: 14px;
      margin: 0 0.5rem;
    }
  }

  input {
    padding: 10px 12px;
    width: 213px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #50e3c2;
    border-radius: 10px;
  }
`;

export const NoSearch = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #50e3c2;
    }

    i {
      color: rgba(255, 255, 255, 0.53);
      font-size: 14px;
      margin: 0 0.5rem;
    }
  }
`;

export const NoFilter = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #50e3c2;
  }
`;
