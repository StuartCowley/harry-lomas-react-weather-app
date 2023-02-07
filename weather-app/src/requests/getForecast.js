import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage,
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("This place does not exist");
        console.error("location is not valid");
      }
      if (status === 500) {
        setErrorMessage("You have destroyed the server hope you are happy");
        console.error("server error");
      }
    });
};
export default getForecast;
