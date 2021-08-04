import React from "react";
import Widget from "../framework/Widget";
import WidgetPush from "../framework/WidgetPush";

export enum DayTodoType {
  TODAY = "Today",
  TOMORROW = "Tomorrow"
}

const DayTodoItem:React.FC = (props) => {
  return(
    <li>todo!</li>
  )
}

const WIDGET_WIDTH = 12;
/*type DayTodoWidgetProps = {
  title:DayTodoType
}*/

const WeekTodoWidget:React.FC = (props) => {

  //const [dayType, setDayType] = useState("");

  const numTodos = 5;

  return(
    <Widget w={WIDGET_WIDTH} push={WidgetPush.LEFT}>
      <h1>This week</h1>
      <ul>
        {[...Array(numTodos)].map((e,i)=> {
          return(<DayTodoItem />);
        })}
      </ul>
    </Widget>
  );
}

export default WeekTodoWidget;