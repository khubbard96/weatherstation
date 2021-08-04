import React from "react";
import Widget from "../framework/Widget";
import WidgetPush from "../framework/WidgetPush";
import WidgetConfig from "../framework/WidgetConfig";

const WIDGET_WIDTH = 5;

const TrafficWidget:React.FC = (props) => {
  return(
    <Widget w={WIDGET_WIDTH} push={WidgetPush.LEFT}>
      <h5>Traffic status</h5>
      <h1>GOOD</h1>
    </Widget>
  );
}

export default TrafficWidget;