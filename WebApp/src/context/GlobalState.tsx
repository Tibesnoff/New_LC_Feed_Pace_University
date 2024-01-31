import React, { PropsWithChildren } from "react";
import context from "./context";

const GlobalState:  React.FC<PropsWithChildren> = ({ children }) => {  
    return (
        <context.Provider value={{}}>
            {children}
        </context.Provider>
    );
};

export default GlobalState;