import React from "react";
import { Thermometer, Wind, Droplet, Clock as ClockIcon } from "lucide-react";

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) {
        return <p>Ingresa una ciudad para ver el clima.</p>;
    }

    const { name, main, weather, wind, timezone } = weatherData;
    const description = weather[0].description;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white bb-1">
                    {name}
                </h2>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 capitalize">
                    <img
                        src={iconUrl}
                        alt={description}
                        className="w-12 h-12 inline-block mr-1"
                    />
                    <span>{description}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
                    {/* Temperatura */}
                    <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Thermometer className="h-6 w-6 mb-1 text-red-500" />
                        <span className="font-semibold text-xl text-gray-800 dark:text-gray-100">
                            {main.temp.toFixed(1)}°C
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Temperatura
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                            (Sensación: {main.feels_like.toFixed(1)}°C)
                        </span>
                    </div>

                    {/* Humedad */}
                    <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Droplet className="h-6 w-6 mb-1 text-blue-500" />
                        <span className="font-semibold text-xl text-gray-800 dark:text-gray-100">
                            {main.humidity}%
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Humedad
                        </span>
                    </div>

                    {/* Viento */}
                    <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Wind className="h-6 w-6 mb-1 text-gray-500" />
                        <span className="font-semibold text-xl text-gray-800 dark:text-gray-100">
                            {(wind.speed * 3.6).toFixed(1)} km/h
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Viento
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
