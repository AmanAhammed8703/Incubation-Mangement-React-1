import {makeStyles} from '@material-ui/core'


 const useStyles=makeStyles((theme)=>({
    SignupHeading:{
        color:"#144c91",
        paddingTop:60,
        paddingBottom:10
    },
    UserName:{
        padding:50,
        width:370,
        color:"#144c91"
    } ,
    SignupButton:{
        width:370,
        height:60,
        backgroundColor:"#144c91"
    },
    GoLoginLink:{
        cursor:'pointer'
    }
    ,
    ErrorMessage:{
        margin:0,
        color:"red"
    }
  

}))
export default useStyles;