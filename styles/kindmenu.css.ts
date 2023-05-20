import {style} from '@vanilla-extract/css';

const kindstyle={
  content:style({
    '@media':{
      'screen and (min-width:406px)':{
        width:"75%",
        margin:"auto",
      }
    }
  }),
  title:style({
    textAlign:"center",
  }),
  linktxt:style({
    color:"#2196f3",
    textDecoration:"none",
    textAlign:"left",
  }),
  stillpost:style({
    textAlign:"center",
  })
}

export default kindstyle;