import styled from "styled-components";

function Card(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
const Wrapper = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:16px;
    min-height: 200px;
    min-width: 200px;
`;

export default Card;