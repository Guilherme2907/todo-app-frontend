import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => (
  <div role="form" className="todo-form">
    <div className="row">
      <Grid col="12 9 10">
        <input
          value={props.description}
          onChange={props.handleChange}
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid col="12 3 2">
        <IconButton estilo="primary" icon="plus" onClick={props.handleAdd} />
      </Grid>
    </div>
  </div>
);
