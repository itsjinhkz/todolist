import React, { Component } from "react";
import style from "./ToDoList.module.css";
import WriteToDoList from "./WriteToDoList";

export default class BodyToDoList extends Component {
  render() {
    return (
      <div className="py-5">
        <div className={style.BodyToDoListColor}>
          <div className="text-center">
            <img
              width={200}
              src="https://play-lh.googleusercontent.com/Pafln8gGuB6utU_-cFZbfd4FicCDL__leR2QwpIeMzvKSL4qBG-BDol00wQ4JR_8tg"
            />
            <span className={style.BodyToDoListText}>ToDo List</span>
            <WriteToDoList />
          </div>
        </div>
      </div>
    );
  }
}
