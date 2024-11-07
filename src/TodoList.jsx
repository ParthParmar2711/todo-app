//todo "TODO LIST APP TASK IN CLASS"
//!display the content
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
const TodoList = (props) => {

    console.log(props);
    
    let { items, handledelete, handleEdit, clearallItems } = props;
    // console.log("items",items);//array
  return (
      <>
          <table id="table">
              <thead>
                  <tr>
                    <th id="course">COURSE</th>
                    <th id="trainer">TRAINER</th>
                    <th id="options">OPTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  {items.length > 0 && items.map((val) => {
                    //   console.log("value of array",val);//!obj
                    return (
                      <Fragment key={val.id}>
                        <tr id="table-row">
                          <td id="courses">{val.course}</td>
                          <td id="trainers">{val.trainer}</td>
                          <td>
                            <button onClick={()=>{handleEdit(val.id)}} id="edit">EDIT</button>
                            <button onClick={()=>{handledelete(val.id)}} id="delete">DELETE</button>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
              </tbody>
          </table>
          <div>
            <button onClick={clearallItems} id="clearall">CLEAR-ALL</button>
          </div>
      </>
  )
}
export default TodoList