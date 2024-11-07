import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LottieBackground = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://lottie.host/62385efb-17e7-4c92-8196-269ddb9cb1f3/cTwI0oS68a.json",
    });

    return () => Lottie.destroy();
  }, []);

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        transform: "scale(1.5)",
        transformOrigin: "center",
        objectFit: "cover",
      }}
    />
  );
};

export default LottieBackground;
