---
layout: project.njk
title: Weather Widget
date: 2024-03-19
tags: ["Web Development", "JavaScript", "API"]
techStack: ["JavaScript", "CSS", "OpenWeather API"]
demoUrl: "https://aippletree.com/weather-widget"
githubUrl: "https://github.com/aippletree/weather-widget"
---

## Overview

A customizable weather widget component for web applications. This widget provides real-time weather information with a clean, modern design and supports multiple weather APIs.

## Features

- **Real-time Updates**: Live weather data from OpenWeather API
- **Customizable Design**: Easy to match your website's theme
- **Multiple Locations**: Support for multiple weather locations
- **Responsive Design**: Works on all screen sizes
- **Dark Mode Support**: Automatic theme switching
- **Weather Forecast**: 5-day weather forecast
- **Unit Conversion**: Switch between Celsius and Fahrenheit
- **Error Handling**: Graceful fallback for API issues

## Implementation

### HTML Structure

```html
<div class="weather-widget">
  <div class="weather-header">
    <h2>Weather in <span class="location">San Francisco</span></h2>
    <div class="unit-toggle">
      <button class="active">°C</button>
      <button>°F</button>
    </div>
  </div>
  <div class="current-weather">
    <div class="temperature">22°C</div>
    <div class="description">Partly Cloudy</div>
    <div class="details">
      <span>Humidity: 65%</span>
      <span>Wind: 12 km/h</span>
    </div>
  </div>
  <div class="forecast">
    <!-- 5-day forecast -->
  </div>
</div>
```

### CSS Styling

```css
.weather-widget {
  background: var(--background-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 12px var(--shadow-color);
}

.weather-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.current-weather {
  text-align: center;
  margin-bottom: 2rem;
}

.temperature {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
}

.details {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: var(--text-color);
  opacity: 0.8;
}
```

## API Integration

The widget uses the OpenWeather API for weather data:

```javascript
class WeatherWidget {
  constructor(apiKey, location) {
    this.apiKey = apiKey;
    this.location = location;
    this.units = "metric";
  }

  async fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}&units=${this.units}`
      );
      const data = await response.json();
      return this.formatWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      return null;
    }
  }

  formatWeatherData(data) {
    return {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
    };
  }
}
```

## Usage Example

```javascript
// Initialize the widget
const widget = new WeatherWidget("your-api-key", "San Francisco");

// Update weather data
async function updateWeather() {
  const weather = await widget.fetchWeather();
  if (weather) {
    updateUI(weather);
  }
}

// Update every 30 minutes
setInterval(updateWeather, 30 * 60 * 1000);
```

## Customization Options

The widget can be customized through CSS variables:

```css
:root {
  --weather-primary: #4a90e2;
  --weather-background: #ffffff;
  --weather-text: #2c3e50;
  --weather-shadow: rgba(0, 0, 0, 0.1);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (with polyfills)

## Future Improvements

1. **Additional Features**

   - Weather alerts
   - Location search
   - Weather maps
   - Air quality index

2. **Performance**

   - Service worker for offline support
   - Data caching
   - Lazy loading

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

<style>
    .code-block {
        background: var(--background-color);
        padding: 1.5rem;
        border-radius: var(--border-radius);
        margin: 1.5rem 0;
        overflow-x: auto;
    }

    .code-block pre {
        margin: 0;
        font-family: 'Fira Code', monospace;
    }

    .code-block code {
        font-size: 0.9rem;
    }
</style>
