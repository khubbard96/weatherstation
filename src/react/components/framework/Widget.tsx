import React from "react";
import { Col } from "react-flexbox-grid";
import WidgetConfig from "./WidgetConfig";
import WidgetPush from "./WidgetPush";
import Card from '@material-ui/core/Card';


const Widget: React.FC<WidgetConfig> = (props) => {

  let optionalOffset = 0;
  if(props.push === WidgetPush.RIGHT) {
    let width = props.w;
    optionalOffset = 12 - width;
  } else if (props.push === WidgetPush.CENTER) {
    let width = props.w;
    optionalOffset = ((12 - width) / 2);
  }

  return(
    <Col xs={props.w} xsOffset={optionalOffset}>
    <div className="widget">
          <Card>      
        {props.children}
      </Card>
    </div>
    </Col>
  )
}

export default Widget;