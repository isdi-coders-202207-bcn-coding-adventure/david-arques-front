import { useEffect, useState } from "react";

const useCounter = (date: Date) => {
  const futureDate = date.getTime();

  const [countDown, setCountDown] = useState(futureDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(futureDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [futureDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export default useCounter;
