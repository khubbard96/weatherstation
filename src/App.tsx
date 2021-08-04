import "./styles.css";
import React from "react";
import HorizWidgetContainer from "./components/framework/HorizWidgetContainer";
import TitleWidget from "./components/widget/TitleWidget";
import CurrentWeatherWidget from "./components/widget/CurrentWeatherWidget";
import TrafficWidget from "./components/widget/TrafficWidget";
import TodayForecastWidget from "./components/widget/TodayForecastWidget";
import DayTodoWidget, { DayTodoType } from "./components/widget/DayTodoWidget";
import WeekTodoWidget from "./components/widget/WeekTodoWidget";



const App: React.FC = () => {
  return (
    <div className="App">
    <HorizWidgetContainer>
      <TitleWidget/>
      <CurrentWeatherWidget/>
      <TrafficWidget />
      <TodayForecastWidget />
      <DayTodoWidget title={DayTodoType.TODAY} />
      <DayTodoWidget title={DayTodoType.TOMORROW} />
      <WeekTodoWidget />
    </HorizWidgetContainer>
    </div>
  );
}

export default App;
