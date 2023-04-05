export const initialState = {
  tasksListData: [
    {
      "id":1,
      "todo": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ut.",
      "completed": true,
      "image":"https://robohash.org/luca.png",
      "username":"Luca",
    },
    {
      "id":2,
      "todo": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ut.",
      "completed": true,
      "image":"https://robohash.org/antonio.png",
      "username":"Antonio",
    },
  ],
  isModalVisibile: false,
  tempTodo:{
    username: "",
    todo: "",
    image: "",
  }
};
