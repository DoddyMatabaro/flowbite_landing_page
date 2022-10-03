import React, { useState, useContext, useReducer} from 'react';


const AppContext = React.createContext();

export function AppProvider({ initialState, reducer, children}){
    return(
        <AppContext.Provider 
                value={
                    useReducer(reducer, initialState)
                }
        >
            {children}
        </AppContext.Provider>
    )

};

export const GlobalContext =()=>{
    return useContext(AppContext);
}