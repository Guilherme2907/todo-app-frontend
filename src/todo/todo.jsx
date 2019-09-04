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

  refresh = (description = '') => {
    Axios.get(`${URL}?sort=-createdAt&description__regex=/${description}/`).then(resp =>
      this.setState({ ...this.state, description, list: resp.data })
    );
  };

  handleChange = e => {
    this.setState({ ...this.state, description: e.target.value });
  };

  handleSearch = () => {
    console.log(this.state.description);
    this.refresh(this.state.description);
  }

  handleAdd = () => {
    const description = this.state.description;
    Axios.post(URL, { description }).then(resp => this.refresh());
    this.refresh();
  };

  handleRemove = idTodo => {
    Axios.delete(`${URL}/${idTodo}`).then(resp => this.refresh(this.state.description));
  };

  handleMarkAsDone = todo => {
    Axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp =>
      this.refresh(this.state.description)
    );
  };

  handleMarkAsPending = todo => {
    Axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp =>
      this.refresh(this.state.description)
    );
  };

  handleClear = () => {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
