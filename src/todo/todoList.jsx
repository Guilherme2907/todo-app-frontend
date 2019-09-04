import React from "react";
import IconButton from '../template/iconButton'

export default props => {
  let renderRows = () =>
    props.list.map(todo => {
      return (
        <tr key={todo._id}>
          <td>{todo.description}</td>
          <td><IconButton estilo="danger" icon="trash-alt" onClick={() => props.handleRemove(todo._id)}/> </td>
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
