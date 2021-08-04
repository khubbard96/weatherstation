import React from "react";
import {Row} from "react-flexbox-grid";

type HorizContainerProps = {
}

const HorizWidgetContainer: React.FC = (props) => {
  return(
    <Row>{props.children}</Row>
  );
}

export default HorizWidgetContainer;