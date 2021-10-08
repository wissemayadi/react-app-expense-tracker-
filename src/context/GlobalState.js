import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';
//initial state

const initialState={
transactions:[
{
    id:1 ,text:'flower',amount:-20
},
{
    id:2 ,text:'football',amount:+200
},
{
    id:3 ,text:'shoes',amount:+100
},
{
    id:4 ,text:'cinema',amount:-10
}
]
}

export const GlobalContext = createContext(initialState);

///provider component

export const GlobalProvider=({children})=>{
const [state,dispatch]=useReducer(AppReducer,initialState);
return (<GlobalContext.Provider
value={{transactions:state.transactions}}
>

    {children}
</GlobalContext.Provider>)

}