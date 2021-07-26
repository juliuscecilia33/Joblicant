import styled from "styled-components/macro";

interface ActiveProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  background: #1c2031;
  padding: 0 1.5rem;
  position: relative;
`;

export const Logo = styled.div`
  cursor: pointer;
  position: absolute;
  margin: auto 0;
  left: 1.3%;

  img {
    width: 160px;
    height: auto;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Tab = styled.button<ActiveProps>`
  width: 280px;
  height: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: ${({ active }) => (active ? "#2A2F45" : "#1C2031")};
  border: none;
  outline: none;
  border-bottom: ${({ active }) => (active ? "3px solid #50E3C2" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    font-size: 26px;
    color: #50e3c2;
    margin-right: 1rem;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
  }
`;
