export const getWeatherData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return formatWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

const formatWeatherData = rawData => {
  // Parse and format raw data from API
  return formattedData;
};