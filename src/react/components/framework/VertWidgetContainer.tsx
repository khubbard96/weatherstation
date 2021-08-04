import React from "react";
import { Col } from "react-flexbox-grid";

const VertWidgetContainer: React.FC = (props) => {
  return (
    <Col md={12}>{props.children}</Col>
  )
}

export default VertWidgetContainer;