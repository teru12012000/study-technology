import {style} from '@vanilla-extract/css'


const doc={
  content:style({
    border:"1px solid black",
    borderRadius:5,
    '@media':{
      'screen and (min-width:406px)':{
        width:"75%",
        margin:"auto",
      }
    }
  }),
  titletxt:style({
    textAlign:"center",
    fontWeight:"bold",
  }),
}

export default doc;