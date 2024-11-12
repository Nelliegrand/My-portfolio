import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import animationData from "../assets/Lottie2.json";

const LottieBackground = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    return () => Lottie.destroy();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <div
        ref={container}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default LottieBackground;
