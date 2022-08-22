const Counter = (): JSX.Element => {
  return (
    <section className="counter">
      <div className="counter__container">
        <div className="counter__number">02</div>
        <span className="counter__text">days</span>
      </div>
      <div className="counter__container">
        <div className="counter__number">20</div>
        <span className="counter__text">hours</span>
      </div>
      <div className="counter__container">
        <div className="counter__number">34</div>
        <span className="counter__text">minutes</span>
      </div>
      <div className="counter__container">
        <div className="counter__number">09</div>
        <span className="counter__text">seconds</span>
      </div>
    </section>
  );
};
