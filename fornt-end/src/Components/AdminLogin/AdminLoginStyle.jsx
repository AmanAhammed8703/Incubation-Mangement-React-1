import {makeStyles} from '@material-ui/core'


 const useLoginStyles=makeStyles((theme)=>({
    SignupHeading:{
        color:"#144c91",
        paddingTop:80,
        paddingBottom:30
    },
    UserName:{
        padding:50,
        width:370,
        color:"#144c91"
    } ,
    SignupButton:{
        width:370,
        height:60,
        backgroundColor:"#144c91",
        fontSize:70
    },
    GoSignupLink:{
        cursor:'pointer'
    }
  

}))
export default useLoginStyles;