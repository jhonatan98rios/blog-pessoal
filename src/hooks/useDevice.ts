import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  function deviceVerification() {
    const mobile = window.innerWidth <= 1024
    setMobile(mobile);
  }

  React.useEffect(() => {
    window.addEventListener("resize", deviceVerification);
    return () => window.removeEventListener("resize", deviceVerification);
  }, []);

  return { isMobile }
}