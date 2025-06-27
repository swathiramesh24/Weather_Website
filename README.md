# Weather Website

A responsive and user-friendly web application that provides real-time weather information for any location worldwide. This project leverages web technologies and public weather APIs to deliver current weather conditions, forecasts, and more in an intuitive interface.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- Search for current weather by city name or geolocation.
- Displays temperature, weather conditions, humidity, wind speed, and more.
- 5-day weather forecast.
- Responsive design for desktop and mobile devices.
- Clean and modern UI/UX.
- Error handling for invalid locations or API issues.


## Screenshots

![Main Page](https://raw.githubusercontent.com/swathiramesh24/Weather_Website/main/final%20structure/main_page.png)

![Weather Display](https://raw.githubusercontent.com/swathiramesh24/Weather_Website/main/final%20structure/weather_display.png)

![About Page](https://raw.githubusercontent.com/swathiramesh24/Weather_Website/main/final%20structure/about_page.png)

## Technologies Used

- **HTML5 & CSS3** – markup and styling.
- **JavaScript** – frontend logic and API integration.
- **Weather API** – (e.g., [OpenWeatherMap](https://openweathermap.org/api) or similar).

## Getting Started

### Prerequisites

- Modern web browser.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/swathiramesh24/Weather_Website.git
   cd Weather_Website
   ```


### Configuration

- Obtain a free API key from your preferred weather service provider (e.g., OpenWeatherMap).
- Add your API key to the configuration file or as an environment variable:
  - For frontend-only projects, locate the section in the JavaScript file where the API key is used and replace the placeholder.
  - For backend projects, set up a `.env` file:
    ```
    WEATHER_API_KEY=your_api_key_here
    ```

### Running the Application

- **Frontend only:**  
  Open `index.html` in your web browser, or use a local web server:
  ```bash
  npx serve .
  ```


## Usage

1. Enter a city name in the search box or allow location access for automatic detection.
2. View the current weather and forecast.
3. *(Describe any additional features, such as unit switching, theme toggling, etc.)*

## Deployment

- *(Instructions for deploying to GitHub Pages, Vercel, Netlify, or your own server.)*
- For GitHub Pages:
  1. Push your code to the `main` (or `gh-pages`) branch.
  2. Enable GitHub Pages in repository settings.
  3. Access your site at: `https://swathiramesh24.github.io/Weather_Website/`

## Project Structure

```
Weather_Website/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── icons/
├── README.md
└── ...
```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.


## Contact

Created by [swathiramesh24](https://github.com/swathiramesh24)  
For questions, contact via GitHub issues or email.

---

