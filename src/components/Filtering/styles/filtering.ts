import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 10vh;
  background: linear-gradient(
    268.95deg,
    #33384e 4.06%,
    #1c2031 41.85%,
    #33384e 99.53%
  );
  border-radius: 20px 20px 0px 0px;
  padding: 0 2rem;
  border-bottom: 1px solid #50e3c2;
`;

export const DateFilterContainer = styled.div`
  width: 17%;
  position: relative;

  .MuiFormControl-root {
    z-index: 5;
    position: absolute;
    top: 50%;
    transform: translateY(-17%);
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

export const DateSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  position: relative;

  div {
    display: flex;

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      color: #50e3c2;
      margin-bottom: 0.5rem;
    }

    i {
      color: rgba(255, 255, 255, 0.53);
      font-size: 16px;
      margin-left: 0.5rem;
      transition: 0.3s ease all;
      cursor: pointer;

      &:hover {
        color: #50e3c2;
      }
    }
  }

  input {
    padding: 10px 12px;
    // width: 213px;
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
    cursor: pointer;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }
    }
  }

  button {
    position: absolute;
    top: 58.7%;
    right: 21.5%;
    outline: none;
    border: none;
    z-index: 100;
    background: none;
    cursor: pointer;

    i {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.15);
      transition: 0.5s ease all;

      &:hover {
        color: #ff708a;
      }
    }
  }
`;

export const Search = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  position: relative;

  div {
    display: flex;

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      color: #50e3c2;
      margin-bottom: 0.5rem;
    }

    i {
      color: rgba(255, 255, 255, 0.53);
      font-size: 16px;
      margin-left: 0.5rem;
      transition: 0.3s ease all;
      cursor: pointer;

      &:hover {
        color: #50e3c2;
      }
    }
  }

  input {
    padding: 10px 12px;
    // width: 213px;
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

  button {
    position: absolute;
    top: 55%;
    right: 21.5%;
    outline: none;
    border: none;
    z-index: 100;
    background: none;
    cursor: pointer;

    i {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.15);
      transition: 0.5s ease all;

      &:hover {
        color: #ff708a;
      }
    }
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
      font-weight: 600;
      font-size: 15px;
      color: #50e3c2;
    }

    i {
      color: rgba(255, 255, 255, 0.53);
      font-size: 16px;
      margin-left: 0.5rem;
      transition: 0.3s ease all;
      cursor: pointer;

      &:hover {
        color: #50e3c2;
      }
    }
  }
`;

export const NoFilter = styled.div`
  width: 11.5%;
  height: 100%;
  display: flex;
  align-items: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #50e3c2;
  }
`;
