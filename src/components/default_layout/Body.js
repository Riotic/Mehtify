import '../../css/Body.css';
import MusicDisplay from '../MusicDisplay';

import React, { useState, useEffect } from "react";


function Body() {
    const url = "https://mehtify.garon1.repl.co/musics";
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(error => console.error("Erreur lors de la récupération des données :", error));
    }, []); 
    return (
        <body className="App-body">
            {data.map((musicData) => (
                <MusicDisplay
                    imageUrl={musicData.imageUrl}
                    title={musicData.title}
                    author={musicData.author}
                />
            ))}
        </body>
    );
}



export default Body