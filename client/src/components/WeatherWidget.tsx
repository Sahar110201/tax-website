import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";

interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Using OpenWeatherMap API - you'll need to add your API key
        // For now, we'll use a mock location (New York)
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "demo";
        const lat = 40.7128;
        const lon = -74.0060;

        // Mock weather data for demonstration
        const mockWeather: WeatherData = {
          temp: 72,
          description: "Partly Cloudy",
          humidity: 65,
          windSpeed: 12,
          icon: "cloud",
        };

        // If you have a real API key, uncomment the following:
        /*
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        
        if (!response.ok) throw new Error("Failed to fetch weather");
        
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed),
          icon: data.weather[0].icon,
        });
        */

        setWeather(mockWeather);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load weather");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <Card className="p-4 bg-white/10 border-white/20 backdrop-blur">
        <div className="text-white text-sm">Loading weather...</div>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="p-4 bg-white/10 border-white/20 backdrop-blur">
        <div className="text-white text-sm">Weather unavailable</div>
      </Card>
    );
  }

  return (
    <Card className="p-4 bg-white/10 border-white/20 backdrop-blur text-white">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-emerald-50">Weather</p>
            <p className="text-2xl font-semibold">{weather.temp}°F</p>
            <p className="text-sm text-emerald-100">{weather.description}</p>
          </div>
          <div className="text-4xl">
            {weather.icon === "cloud" ? (
              <Cloud className="w-12 h-12" />
            ) : weather.icon === "rain" ? (
              <CloudRain className="w-12 h-12" />
            ) : (
              <Sun className="w-12 h-12" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4" />
            <span>{weather.humidity}% Humidity</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="w-4 h-4" />
            <span>{weather.windSpeed} mph Wind</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
