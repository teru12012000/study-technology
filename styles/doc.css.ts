import {style} from '@vanilla-extract/css'


const doc={
  content:style({
    width:"75%",
    margin:"auto",
    border:"1px solid black",
    borderRadius:5,
  }),
  titletxt:style({
    textAlign:"center",
    fontWeight:"bold",
  }),
  iconbox:style({
    margin:5
  })
}

export default doc;