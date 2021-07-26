import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 9vh;
  background: linear-gradient(
    268.95deg,
    #33384e 4.06%,
    #1c2031 41.85%,
    #33384e 99.53%
  );
  box-shadow: 0px 46px 69px #17122b;
  padding: 0 3.5rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 0 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: linear-gradient(242.46deg, #16b4eb 9.2%, #50e3c2 89.53%);
  box-shadow: 0px 4px 40px #17122b;
  border-radius: 60px;

  i {
    font-size: 16px;
    color: #ffffff;
    margin-right: 0.7rem;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
  }
`;
