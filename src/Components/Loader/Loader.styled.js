import styled from "styled-components";

const Wrapper = styled.div`
  background: #a2a2a2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  .loading {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .loading img {
    width: 240px;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Wrapper;