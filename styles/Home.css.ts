import {style} from '@vanilla-extract/css'

const home={
  content:style({
    textAlign:"center",
    width:"100%",
  }),
  about:style({
    fontWeight:"bold",
    fontSize:24,
  }),
  menucontent:style({
    width:"50%",
    margin:"auto",
    textAlign:"left",
  }),
  menutxt:style({
    margin:3
  }),
  menulist:style({
    width:"100%",
    border:"1px solid black",
    borderRadius:5,
  }),
  alist:style({
    textAlign:"left",
    fontSize:18,
    margin:5
  }),
  linktxt:style({
    color:"#2196f3",
    textDecoration:"none",
  })
}

export default home;