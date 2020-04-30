import axios from "axios"
import { userPost, userPostSuccess, userPostFailed } from "../action/postAction";


const SERVER_URL = "https://jsonplaceholder.typicode.com/posts"

export const postMiddleware = ()=>{
    return dispatch => {
        axios.get(SERVER_URL).then(res=>{
            dispatch(userPost())
            console.log(res)
            dispatch(userPostSuccess(res.data));
            console.log(res.data)
        }).catch(error =>{
            dispatch(userPostFailed());
            console.log('Data error');
        })
    };
};