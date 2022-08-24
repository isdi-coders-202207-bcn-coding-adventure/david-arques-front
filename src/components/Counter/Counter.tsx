import { keyDate } from "../../data/keyDate";
import useCounter from "../../hooks/useCounter";
import { CounterSectionStyled } from "./CounterStyled";

const Counter = (): JSX.Element => {
  const date: Date = keyDate;
  const [days, hours, minutes, seconds] = useCounter(date);

  if (days + hours + minutes + seconds <= 0) {
    return <h1>Sa acabat</h1>;
  } else {
    return (
      <CounterSectionStyled className="counter">
        <div className="counter__container">
          <div className="counter__number">{days}</div>
          <span className="counter__text">days</span>
        </div>
        <div className="counter__container">
          <div className="counter__number">{hours}</div>
          <span className="counter__text">hours</span>
        </div>
        <div className="counter__container">
          <div className="counter__number">{minutes}</div>
          <span className="counter__text">minutes</span>
        </div>
        <div className="counter__container">
          <div className="counter__number">{seconds}</div>
          <span className="counter__text">seconds</span>
        </div>
      </CounterSectionStyled>
    );
  }
};
export default Counter;
