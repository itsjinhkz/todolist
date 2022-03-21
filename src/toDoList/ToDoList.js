import React, { Component } from "react";
import BodyToDoList from "./BodyToDoList";
import style from "./ToDoList.module.css";

export default class ToDoList extends Component {
  render() {
    return (
      <div className={style.backgroundBody}>
        <div className="container">
          <BodyToDoList />
        </div>
      </div>
    );
  }
}
