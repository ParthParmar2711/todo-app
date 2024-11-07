//TODO "ITERATE DATA OF ARRAY USING map() method"
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodoList';

const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "", //!to store corse
    trainer: "", //!to store trainer name
    id: uuidv4(), //!generates random id and used to identify
  });

  //!event(onSubmit)-->SBE(Synthetic Based event)
  let handleSubmit = event => {
    event.preventDefault();
    //?logic to pass inside items array
    setState({
      ...state,
      items: [
        ...state.items,
        {
          course: state.course,
          trainer: state.trainer,
          id: state.id,
        },
      ],
      course: "",
      trainer: "",
      id: uuidv4(), //!to generate next id
    });
  };

  //!"delId" is parameters which holds "id of particular item" to be deleted.
  let handledelete = (delId) => {
    // console.log("id of item to be deleted", delId);
    let filteredItems = state.items.filter((val) => {
      // console.log("inside filter ",val);//obj
      return delId !== val.id
    })
    setState({ ...state, items: filteredItems });
  }

  //!"editId" is parameters which holds "id of particular item" to be edit.
  let handleEdit = (editId) => {
    //?apart from value to be updated collecting remaining values from array
    let restvalue = state.items.filter((val) => {
      return editId !== val.id
    })

    //?finding the item to update
    let editItem = state.items.find((val) => {
      return val.id === editId
    })
    console.log("item to update", editItem);//obj
    console.log("reast value", restvalue);
    setState({
      items: restvalue,
      course: editItem.course,
      trainer: editItem.trainer,
      id: editItem.id
    })
  }

  //! clear all
  let clearallItems = () => {
    //! Write a logic
    setState({
      ...state,
      items: [],      // Clear the items array
      course: "",     // Reset course field
      trainer: "",    // Reset trainer field
      id: uuidv4(),   // Generate a new id
    });
  };



//!event(onChange)-->SBE
let handleChange = event => {
  // console.log(event);
  let { name, value } = event.target;
  setState({ ...state, [name]: value });
};

return (
  <>
    <section id="mainContainer">
      <h1>TODO-APP</h1>
      <aside className="asideContainer">
        <Form
          handleSubmit={handleSubmit}
          course={state.course}
          trainer={state.trainer}
          handleChange={handleChange}
        />
        <TodoList
          items={state.items}
          handledelete={handledelete}
          handleEdit={handleEdit}
          clearallItems={clearallItems}
        />
      </aside>
    </section>
  </>
);
}
export default App

//!event-->target-->1)value 2)name