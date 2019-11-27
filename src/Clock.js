import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const dt = new Date();
      setDate(dt.toLocaleDateString());
      setTime(dt.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className="jsv-datetime">
      <section className="jsv-date">{date}</section>
      <section className="jsv-time">{time}</section>
    </section>
  );
};

export default Clock;
