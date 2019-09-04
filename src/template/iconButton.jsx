import React from "react";
import If from "../template/if";

export default props => (
  <If test={!props.hide}>
    <button className={"btn btn-" + props.estilo} onClick={props.onClick}>
      <i className={"fas fa-" + props.icon}></i>
    </button>
  </If>
);
