import styled, { keyframes } from 'styled-components';

const animateBackground = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const Body = styled.body`
  background-image: linear-gradient(to bottom, #7D0633, #3E0319);
  background-size: cover;
  animation: ${animateBackground} 10s ease-in-out infinite alternate;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  bottom: 10px;

  padding: 16px;
`;

function Wrapper(props) {
  return (
    <Body>
      {props.children}
    </Body>
  );
}


export default Wrapper;