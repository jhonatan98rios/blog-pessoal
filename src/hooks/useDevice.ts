import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  function deviceVerification() {
    if (window) {
      const mobile = window.innerWidth <= 1024
      setMobile(mobile);
    }
  }

  React.useEffect(() => {
    deviceVerification()
    window.addEventListener("resize", deviceVerification);
    return () => window.removeEventListener("resize", deviceVerification);
  }, []);

  return { isMobile }
}