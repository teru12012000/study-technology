import { style } from "@vanilla-extract/css";

const header={
  contants:style({
    height:"5%",
    padding:10,
    backgroundColor:"black",
    color:"white",
  }),
  title:style({
    margin:0,
    marginLeft:5,
    fontSize:30,
    '@media':{
      'screen and (max-width:750px)':{
        fontSize:20,
      }
    }
  }),
  iconbox:style({
    margin:5
  })
}

export default header;