import Header from "./components/Header";
import Footer from "./components/Footer";
import Romch from "./components/Romch";

import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      mql.removeEventListener("change", onChange);
    };

  }, [MOBILE_BREAKPOINT]);

  return !!isMobile;
}


function App() {
  return (
    <div className="osnova">
      <Header />
      <Romch />
      <Footer />


    </div>
  );
}

export default App;
