import React from "react";

const Home = () => {
  const timer = useTimer(new Date());
  const h = timer.getHours();
  const m = timer.getMinutes();
  const s = timer.getSeconds();
  const bg_1 = h === 0 ? 0 : Math.round(255 / h);
  const bg_2 = m === 0 ? 0 : Math.round(255 / m);
  const bg_3 = h === 0 ? 0 : Math.round(255 / s);
  const colors = [bg_1, bg_2, bg_3];
  const bg_r = colors[Math.floor(Math.random() * colors.length)];
  const bg_g = colors[Math.floor(Math.random() * colors.length)];
  const bg_b = colors[Math.floor(Math.random() * colors.length)];
  const font_r = 255 - bg_r;
  const font_g = 255 - bg_g;
  const font_b = 255 - bg_b;

  return (
    <div className="bg">
      <div className="time">
        <div>${timer.toLocaleTimeString()}</div>
        <div>
          (rgb(${bg_r}, ${bg_g}, ${bg_b}))
        </div>
      </div>
      <style jsx>{`
        .bg {
          height: 100vh;
          width: 100vw;
          background-color: rgb(${bg_r}, ${bg_g}, ${bg_b});
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .time {
          text-align: center;
          color: rgb(${font_r}, ${font_g}, ${font_b});
        }
      `}</style>
    </div>
  );
};

function useTimer(currentDate) {
  const [date, setDate] = React.useState(currentDate);
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }
  return date;
}

export default Home;
