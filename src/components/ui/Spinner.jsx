import { useLayoutEffect, useMemo, useState } from "react";
import { PulseLoader } from "react-spinners";

function Spinner() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { size, margin } = isSmallScreen
    ? { size: 13, margin: 4 }
    : { size: 20, margin: 10 };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 0",
        margin: "40px 0",
      }}
    >
      <PulseLoader
        color='#25201fe7'
        loading={true}
        speedMultiplier={1.15}
        size={size}
        margin={margin}
      />
    </div>
  );
}

export default Spinner;
