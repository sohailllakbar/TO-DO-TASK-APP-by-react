import React,{createContext} from "react";

const MyContext = createContext();

const MyProvider = ({children,value}) =>{
    return(
        <MyContext.Provider value={value}>
        {children}
        </MyContext.Provider>
    )
}
export  {MyContext,MyProvider}