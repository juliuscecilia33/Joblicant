import styled from "styled-components/macro";

export const Container = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 3rem;
  padding-bottom: 7vh;
  margin: 3rem auto;

  .MuiPaper-root {
    background: linear-gradient(
      268.95deg,
      #33384e 4.06%,
      #1c2031 41.85%,
      #33384e 99.53%
    );
  }

  .MuiPaper-rounded {
    border-radius: 20px;
  }

  .MuiPaper-elevation1 {
    box-shadow: 0px 46px 69px #17122b;
  }

  .makeStyles-background-1028 {
    background: linear-gradient(180deg, #2a2f45 0%, #2a2f45 100%);
  }
`;
