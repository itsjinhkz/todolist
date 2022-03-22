let ToDoState = {
  toDoList: [],
};

export let ToDoReducer = (state = ToDoState, action) => {
  switch (action.type) {
    case "addToDoList": {
      let taskListUpdate = [...state.toDoList];
      taskListUpdate.push(action.payload);
      state.toDoList = taskListUpdate;
      return { ...state };
    }
    case "removeFromDoList": {
      let taskListUpdate = [...state.toDoList];
      taskListUpdate.splice(action.payload, 1);
      state.toDoList = taskListUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
