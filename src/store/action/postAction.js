import {USER_POST,USER_POST_SUCCESS,USER_POST_FAILED} from './actionType';

export const userPost = payload => ({
type:USER_POST,
payload
})

export const userPostSuccess = payload => ({
    type:USER_POST_SUCCESS,
    payload
    })


 export const userPostFailed = payload => ({
        type:USER_POST_FAILED,
        payload
        })