import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 0;
  background: linear-gradient(
    268.95deg,
    #33384e 4.06%,
    #1c2031 41.85%,
    #33384e 99.53%
  );
  // padding-right: 11.5%;
  padding-left: 2rem;
  box-shadow: 0px 0px 50px rgba(23, 18, 43, 0.75);
  transition: 0.5s ease all;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
`;

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 9%;
`;

export const Actions = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  height: 100%;
`;

export const Action = styled.button<ActiveProps>`
  height: 42px;
  padding: 0 2rem;
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  margin-left: 2rem;
  cursor: pointer;

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
    margin-right: 0.7rem;
  }
`;

export const Cancel = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.53);
  transition: 0.5s ease all;
  font-family: Roboto;
  font-style: normal;

  &:hover {
    color: #ffffff;
  }
`;

export const MdField = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;

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

export const FieldContainer = styled.div`
  width: 13.5%;
  position: relative;
  padding-right: 3rem;

  .MuiFormControl-root {
    z-index: 5;
    position: absolute;
    top: 50%;
    transform: translateY(-10%);
    left: 0;
    opacity: 0;
    width: 80%;
    height: 75%;
    cursor: pointer;
  }

  .MuiInputBase-input {
    cursor: pointer;
  }
`;

export const MdFieldContainer = styled.div`
  width: 18%;
  position: relative;
  padding-right: 3rem;

  .MuiFormControl-root {
    z-index: 5;
    position: absolute;
    top: 50%;
    transform: translateY(-10%);
    left: 0;
    opacity: 0;
    width: 80%;
    height: 75%;
    cursor: pointer;
  }

  .MuiInputBase-input {
    cursor: pointer;
  }
`;

export const SmField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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
    cursor: pointer;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }

      i {
        color: #ffffff;
      }
    }
  }

  i {
    position: absolute;
    top: 60%;
    right: 7%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const SmMdField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  // padding-right: 3rem;

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
    cursor: pointer;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }

      i {
        color: #ffffff;
      }
    }
  }

  i {
    position: absolute;
    top: 60%;
    right: 9%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const LgField = styled.div`
  width: 56.2%;
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
    width: 100%;
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
