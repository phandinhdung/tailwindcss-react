import { useEffect, useState } from "react";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect( () => {
    const timer = setTimeout( () => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return String(number).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span className="capitalize bg-white px-2 py-1 rounded-md" key={interval}>
          {formatNumber(timeLeft[interval])}{' '}
          <span className="text-gray-400 font-bold">{interval}</span>
        </span>
      )
    }
  });

  return timerComponents;
}

export default CountdownTimer