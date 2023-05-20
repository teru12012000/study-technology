import { FC } from "react";
import header from "./style/header.css";
import Link from "next/link";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
type Props={
  link:string;
}
const Header:FC<Props> = ({link}) => {
  return (
    <>
      <header className={header.contants}>
        <h1 className={header.title}>TERUSIの技術勉強まとめ部屋(主に座学)</h1>
      </header>
      {link?(
        <div className={header.iconbox}>
          <Link href={link}>
            <IconButton aria-label="delete" size="large">
              <KeyboardBackspaceIcon fontSize="inherit" color="primary" />
            </IconButton>
          </Link>
        </div>
      ):null}
    </>
  );
}

export default Header;