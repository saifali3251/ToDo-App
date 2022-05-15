import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

 & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.isValid ? 'red' : 'black')};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.isValid ? 'red' : '#ccc')} ;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

.invalid-class {
  border-color: red;
  color: red;
}
`;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [emptyValue, setEmptyValue] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setEmptyValue(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setEmptyValue(false)
      // alert('Please enter value')
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={!emptyValue}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
