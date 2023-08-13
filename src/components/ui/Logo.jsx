import Img from "./Img";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { style } from './Logo.module.css'

function Logo() {
  return (
    <Link href='/'>
    <Img
      src={logo}
      alt={logo}
      width={100}
      height={90}
      style={style}
    />
    </Link>
  );
}

export default Logo;
