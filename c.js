import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getWeatherData } from './api/weatherAPI';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {weatherData ? (
        <>
          <Text style={styles.currentWeather}>
            Current Temperature: {weatherData.current.temp}°C
          </Text>
          <Text style={styles.forecast}>5-Day Forecast:</Text>
          {weatherData.forecast.map(day => (
            <Text key={day.id} style={styles.forecastItem}>
              {day.date}: High {day.high}°C, Low {day.low}°C
            </Text>
          ))}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentWeather: {
    fontSize: 24,
    marginBottom: 20,
  },
  forecast: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastItem: {
    marginBottom: 5,
  },
});

export default WeatherApp;
