import React from "react";
import Widget from "../framework/Widget";
import WidgetPush from "../framework/WidgetPush";

const WIDGET_WIDTH = 12;

const TitleWidget:React.FC = (props) => {
  return(
    <Widget w={WIDGET_WIDTH} push={WidgetPush.LEFT}>
      <h1>Good morning</h1>
      <p>June 10, 2021</p>
    </Widget>
  );
}

export default TitleWidget;