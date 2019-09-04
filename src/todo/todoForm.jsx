import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
const keyHandler = e => {
  if(e.key === 'Enter') {
    e.shiftKey ? props.handleSearch(): props.handleAdd();
  } else if (e.key === 'Escape') {
    props.handleClear();
  }
}

  return (
    <div role="form" className="todo-form mb-4">
      <div className="row">
        <Grid col="12 9 10">
          <input
            value={props.description}
            onChange={props.handleChange}
            onKeyUp={keyHandler}
            type="text"
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
          />
        </Grid>

        <Grid col="12 3 2">
          <IconButton estilo="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton
            estilo="info"
            icon="search"
            onClick={props.handleSearch}
          />
          <IconButton
            estilo="secondary"
            icon="times"
            onClick={props.handleClear}
          />
        </Grid>
      </div>
    </div>
  );
};
