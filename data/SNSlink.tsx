import { ReactNode } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
export type LinkType={
  link:string;
  name:string;
  icon:ReactNode;
}

export const snslinklist:LinkType[]=[
  {
    link:"https://github.com/teru12012000",
    name:"My github",
    icon:(<GitHubIcon/>)
  },
  {
    link:"https://twitter.com/TERUSI1201",
    name:"技術垢",
    icon:(<TwitterIcon/>)
  },
]