//todo "TODO LIST APP TASK IN CLASS"
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Form = (props) => {

    // console.log(props);//obj

    let { handleSubmit, course, trainer, handleChange } = props;
    
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="div1">
          <label htmlFor="cname">COURSE : </label>
          <input
            type="text"
            id="cname"
            value={course}
            name="course"
            onChange={handleChange}
          />
        </div>
        <div id="div2">
          <label htmlFor="tname">TRAINER : </label>
          <input
            type="text"
            id="tname"
            value={trainer}
            name="trainer"
            onChange={handleChange}
          />
        </div>
        <div>
          <button id="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
}
export default Form