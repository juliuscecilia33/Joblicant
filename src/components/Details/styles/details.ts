import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15vh;
  background: linear-gradient(
    268.95deg,
    #33384e 4.06%,
    #1c2031 41.85%,
    #33384e 99.53%
  );
  padding-right: 11.5%;
  padding-left: 2rem;
  box-shadow: 0px 0px 50px rgba(23, 18, 43, 0.75);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`;

export const Action = styled.button<ActiveProps>`
  height: 42px;
  padding: 0 2rem;
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
  }

  i {
    font-size: 15px;
    color: #ffffff;
  }
`;

export const MdField = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #50e3c2;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 10px 12px;
    width: 213px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #50e3c2;
    border-radius: 10px;
    outline: none;
    color: #ffffff;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    transition: 0.3s ease all;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;

export const SmField = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #50e3c2;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 10px 12px;
    width: 139px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #50e3c2;
    border-radius: 10px;
    outline: none;
    color: #ffffff;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    transition: 0.3s ease all;
    position: relative;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }
    }
  }

  i {
    position: absolute;
    top: 0;
    right: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
  }
`;

export const LgField = styled.div`
  width: 21.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #50e3c2;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 10px 12px;
    width: 139px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #50e3c2;
    border-radius: 10px;
    outline: none;
    color: #ffffff;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    transition: 0.3s ease all;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;
