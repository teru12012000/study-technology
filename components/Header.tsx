import { FC } from "react";
import header from "./style/header.css";

const Header:FC = () => {
  return (
    <header className={header.contants}>
      <h1>TERUSIの技術勉強まとめ部屋(主に座学)</h1>
    </header>
  );
}

export default Header;