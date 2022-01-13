import { useState } from 'react';
import classes from './GoalForm.module.css';
import Button from './Button.js'

function GoalForm(props) {
	const [enteredName, setEnteredName] = useState('')
	const [enteredDescription, setEnteredDescription] = useState('')
	const addGoalHandler = (event) => {
    event.preventDefault();
    // EDIT: add error checking
    // Use parent's add goal method.
		let goalInfo = {
			// keyID, isGoal gets assigned in parent, rest will be from the user input.
			name: enteredName, 
			description: enteredDescription,
			prerequisites: [], 
			dependencies: []
		}
    props.onAddGoal(goalInfo);
    // clear inputs...
    setEnteredName('');
    setEnteredDescription('');
  }
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  return (
    <form onSubmit={addGoalHandler} className={classes.goalForm}>
		<div className={classes.inputArea}>
			<label>Goal: </label>
			<input type="text" value={enteredName} onChange={nameChangeHandler} className={classes.input}/>
		</div>
		<div className={classes.inputArea}>
			<label>Description:</label>
			<textarea className={classes.textArea} type="text" value={enteredDescription} onChange={descriptionChangeHandler}/>
		</div>
		<Button buttonName="Submit Goal"></Button>
    </form>
  );
}

export default GoalForm;