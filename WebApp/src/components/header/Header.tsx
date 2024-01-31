import React, {useEffect, useState} from 'react';

const Header = () =>{
    const [data, setData] = useState({} as any);

     useEffect(()=>{
        const fetchData = async() =>{
            await fetch("https://api.weather.gov/points/41.12091997761644,-73.81694739810774")
                .then(r => r.text())
                .then(res => console.log(res));
                //Have to navigate to a selected forcast and then fetch that
         }
        fetchData();
     })

    const weather = () =>{
        return <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    }
    
    return (
        <div className="h-1/5 border-2 border-stone-950">{weather()}</div>
    )
}

export default Header;