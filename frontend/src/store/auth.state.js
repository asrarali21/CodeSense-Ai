import { atom } from "recoil";



export const AuthState = atom({
    key:"AuthState",
    default:{
        IsloggedIn : false,
        user:null
    }
})