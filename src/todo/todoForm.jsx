import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton"

export default props => (
  <div role="form" className="todo-form">
    <div className="row">
      <Grid col="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid col="12 3 2">
        <IconButton estilo="primary" icon="plus" />
      </Grid>
    </div>
  </div>
);
