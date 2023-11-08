const initialState = {
    loggedin:false,
    email:""
};
function rootReducer(state = initialState ,action:any){
    if(action.type==="LOGGED_IN") {
        return{
        loggedin: true,
        email : action.email
    }
    } else if(action.type==="LOGGED_OUT"){
        return{
            loggedin:false
        }
    }
    else {
        return state
    }
}

export default rootReducer