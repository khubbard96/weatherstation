import React from "react";
import Widget from "../framework/Widget";
import WidgetPush from "../framework/WidgetPush";
import WbCloudyOutlinedIcon from '@material-ui/icons/WbCloudyOutlined';
import { Row, Col } from "react-flexbox-grid";

const WIDGET_WIDTH = 7;

const CurrentWeatherWidget:React.FC = (props) => {
  return(
    <Widget w={WIDGET_WIDTH} push={WidgetPush.LEFT}>
      <Row>
        <Col xs={6}>
          <WbCloudyOutlinedIcon fontSize="large"/>
        </Col>
        <Col xs={6}>
          <h1>70 ° F</h1>
          <h3>Cloudy</h3>
          <h5>Pleasant</h5>
        </Col>
      </Row>
    </Widget>
  );
}

export default CurrentWeatherWidget;