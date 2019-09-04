import React, { Component } from "react";
import Axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoList from "./todoList";
import TodoForm from "./todoForm";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.refresh();
  }

  refresh = () => {
    Axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({...this.state,description: '',list: resp.data}))
  }

  handleChange = e => {
    this.setState({ ...this.state, description: e.target.value });
  };

  handleAdd = () => {
    const description = this.state.description;
    Axios.post(URL, { description }).then(resp => this.refresh());
    this.refresh();
  };

  handleRemove = idTodo => {
    Axios.delete(`${URL}/${idTodo}`).then(resp => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
