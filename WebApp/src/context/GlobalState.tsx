import React, { PropsWithChildren, useEffect } from "react";
import context from "./context";

const GlobalState:  React.FC<PropsWithChildren> = ({ children }) => {  

    useEffect(()=>{
        const fetchData = async() =>{
            await fetch("https://api.weather.gov/points/41.12091997761644,-73.81694739810774")
                .then(r => r.text())
                .then(res => console.log(res));
                //Have to navigate to a selected forcast and then fetch that
         }
        fetchData();
     })

    return (
        <context.Provider value={{}}>
            {children}
        </context.Provider>
    );
};

export default GlobalState;