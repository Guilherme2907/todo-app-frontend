import React from "react";
import IconButton from "../template/iconButton";

export default props => {
  let renderRows = () =>
    props.list.map(todo => {
      return (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
          <td>
            <IconButton
              estilo="danger"
              icon="trash-alt"
              onClick={() => props.handleRemove(todo._id)}
              hide={!todo.done}
            />
            <IconButton
              estilo="success"
              icon="check-circle"
              onClick={() => props.handleMarkAsDone(todo)}
              hide={todo.done}
            />
            <IconButton
              estilo="warning"
              icon="undo-alt"
              onClick={() => props.handleMarkAsPending(todo)}
              hide={!todo.done}
            />{" "}
          </td>
        </tr>
      );
    });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
