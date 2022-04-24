import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    /* const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = !!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|WPDesktop/i) */
    const mobile = window.innerWidth <= 768
    setMobile(mobile);
  }, []);

  return { isMobile }
}