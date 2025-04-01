/*
//HW 01.04.25
import { useState } from "react";
import axios from "axios";

export default function JokeJokes() {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");

    const Jokes = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                setJoke({response.data});
                setError("");
            })
            .catch(() => {
                setError("Интернет ұстамауда!!!");
            });
    };

    return (
        <div>
            <h2>Әзіл</h2>
            <button onClick={Jokes}>Ozgertilme</button>
            {joke && <p>{jokes}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
*/










/*import {useState, useEffect } from "react";
import axios from "axios";

export default function WeatherApp(){
    const [weather, setWeather ] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")//Api kate
        .then((response) => {
            setWeather(response.data);
        })
    }, [])
    return (
        <div>
            <p>auaRAii: {weather || "аяқталуда!" }</p>
        </div>
    )
}*/
\
/*
import { useState, useEffect } from "react";
import axios from "axios";

export default function GameList() {
    const [error, setError] = useState("");
    const [games, setGames] = useState([]);


    const fetchGames = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setGames(response.data.slice(0, 3)); 
                setError(""); 
            })
            .catch(() => {
                setError("Internet katip zhatir");
            });
    };

    
    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div>
            <h2>Game List</h2>
            <button onClick={fetchGames}>Қайта жүктеу</button>
            <div>
                {games.map((game) => (
                    <p key={game.id}>{game.title}</p>
                ))}
            </div>
            {error && <p>{error}</p>}
        </div>
    );
}*/
























/*

import { useState } from "react";
import axios from "axios";

export default function JokeGenerator() {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");

    const Jokes = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                setJoke(`${response.data.setup} — ${response.data.punchline}`);
                setError("");
            })
            .catch(() => {
                setError("Әзілің өтпей қалды  (Интернет ұстамауда!!!)");
            });
    };

    return (
        <div>
            <h2>Әзіл</h2>
            <button onClick={Jokes}>Жаңа әзіл ал!</button>
            {joke && <p>{jokes}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
*/