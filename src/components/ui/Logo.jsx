import Img from "./Img";
import logo from "../../../public/images/logo.svg";
import logo2 from "../../../public/images/logo2.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useMemo, useState } from "react";

function Logo() {
  const pathname = useRouter().pathname;

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = useMemo(() => {
    if (isSmallScreen <= 768) {
      return { width: 50, height: 41.6 };
    } else if (isSmallScreen <= 1024) {
      return { width: 70, height: 58.3 };
    } else {
      return { width: 90, height: 75 };
    }
  }, [isSmallScreen]);

  return (
    <Link href='/' style={{cursor:'pointer'}}>
      <Img
        src={pathname === "/" ? logo : logo2}
        alt={logo}
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
