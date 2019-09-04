import React from "react";

export default props => {
  if (props.hide) {
    return null;
  } else {
    return (
      <button className={"btn btn-" + props.estilo} onClick={props.click}>
        <i className={"fa fa-" + props.icon}></i>
      </button>
    );
  }
};
