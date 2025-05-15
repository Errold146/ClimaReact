import { useState, useEffect } from "react"; //importo useState para los estados y useEffect para los efectos
import axios from "axios";

import "./App.css";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
    const [city, setCity] = useState(""); //estado para guardar la ciudad a consultar
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchWeather = async (cityName) => {
        setError(null); //reseteamos errores previos
        setWeatherData(null); //limpiamos datos anteriores

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        try {
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
            console.log(weatherData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWeather("San Jose");
    }, []);

    //console.log(weatherData);

    return (
        <div className=" min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Mini App de Consulta al Clima
            </h1>
            <WeatherSearch city={city} setCity={setCity} onSearch={fetchWeather} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
}

export default App;
