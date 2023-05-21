import { FC } from "react";
import header from "./style/header.css";
import Link from "next/link";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { LinkType, snslinklist } from "@/data/SNSlink";
type Props={
  link:string;
}
const Header:FC<Props> = ({link}) => {
  return (
    <>
      <header className={header.contants}>
        <h1 className={header.title}>TERUSIの技術勉強まとめ部屋(主に座学)</h1>
        <div>
          {snslinklist.map((item:LinkType,index:number)=>(
            <div key={index} className={header.linkstyle}>
              <Link href={item.link} target="_blank" key={index} className={header.linktxt}>
                {item.icon}<br/>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
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