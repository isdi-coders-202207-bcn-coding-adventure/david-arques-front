import styled from "styled-components";

const CounterSectionStyled = styled.section`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 80vh;
  .counter {
    &__number {
      background-color: #fac204;
      width: 300px;
      height: 300px;
      border-radius: 50px;
      font-size: 6em;
      color: #243444;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__text {
      color: white;
      margin-top: 10px;
      font-size: 3em;
    }
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export { CounterSectionStyled };
