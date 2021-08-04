import React from "react"
import {Row, Col} from "react-flexbox-grid";
import Widget from "../framework/Widget";
import WidgetPush from "../framework/WidgetPush";
import WbCloudyOutlinedIcon from '@material-ui/icons/WbCloudyOutlined';

/*type HourBlockWeatherInput = {
  hrNumber:number;
  condition:string;
  temp:number
}*/

const HourBlockWeatherDisplay:React.FC = (props) => {
  return(
    <Col xs>
      <h5>6a</h5>
      <WbCloudyOutlinedIcon fontSize="large"/>
      <h4>70 ° F</h4>
    </Col>
  );
}

const WIDGET_WIDTH = 12;
const HOUR_BLOCKS_SHOWN = 4;

const TodayForecastWidget:React.FC = (props) => {
    return(
    <Widget w={WIDGET_WIDTH} push={WidgetPush.LEFT}>
      <Row>
        {
          [...Array(HOUR_BLOCKS_SHOWN)].map((e,i)=>{
            return(<HourBlockWeatherDisplay />);
          })
        }
      </Row>
    </Widget>
  );
}

export default TodayForecastWidget;