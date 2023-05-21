import { style } from "@vanilla-extract/css";

const header={
  contants:style({
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    '@media':{
      'screen and (min-width:890px)':{
        display:"flex",
        justifyContent:"space-between",
      }
    }
  }),
  title:style({
    fontSize:30,
    '@media':{
      'screen and (max-width:750px)':{
        fontSize:20,
      }
    }
  }),
  iconbox:style({
    margin:5
  }),
  linkstyle:style({
    display:"inline-block",
    textAlign:"center",
    marginTop:"20px",
    marginLeft:"10px",
  }),
  linktxt:style({
    color:"white",
    textDecoration:"none",
  })
}

export default header;