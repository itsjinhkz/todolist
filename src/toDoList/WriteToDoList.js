import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./ToDoList.module.css";

class WriteToDoList extends Component {
  state = {
    toDoList: [...this.props.toDoList],
  };
  renderToDoList = () => {
    return this.props.toDoList.map((item, index) => {
      return (
        <li className={style.WriteText} index={index}>
          {item}
          <button
            onClick={() => {
              this.props.removeFromDoList(index);
            }}
            className="bg-success"
            style={{ borderRadius: "30px" }}
          >
            <i className="fa-solid fa-check text-white"></i>
          </button>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="py-5">
        <input
          id="inputID"
          style={{ width: "300px", height: "40px", borderRadius: "5%" }}
          type="text"
        />
        <button
          style={{ padding: "5px", borderRadius: "5%" }}
          className="bg-primary"
          onClick={this.props.addToDoList}
        >
          <i className="fa fa-pencil text-white fa-lg "></i>
        </button>
        <ul className="py-5">{this.renderToDoList()}</ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    toDoList: state.ToDoReducer.toDoList,
  };
};

let payload = () => {
  let payloadValue = document.querySelector("#inputID").value;
  return payloadValue;
};

let mapDispatchToProps = (dispatch) => {
  return {
    addToDoList: () => {
      dispatch({
        type: "addToDoList",
        payload: payload(),
      });
    },
    removeFromDoList: (index) => {
      dispatch({
        type: "removeFromDoList",
        payload: index,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WriteToDoList);
